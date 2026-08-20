import gsap from 'gsap';
import { slides, sections } from './slides.js';
import { createWorld } from './scene.js';
import { createNav } from './nav.js';
import './ui.css';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const canvas = document.querySelector('#gl');
const world = createWorld(canvas);

const els = {
  kicker: document.querySelector('#kicker'),
  title: document.querySelector('#title'),
  line: document.querySelector('#line'),
  meta: document.querySelector('#sectionLabel'),
  fill: document.querySelector('#fill'),
  ticks: document.querySelector('#ticks'),
  loader: document.querySelector('#loader'),
  hint: document.querySelector('#hint'),
  prev: document.querySelector('#prev'),
  next: document.querySelector('#next'),
};

sections.forEach((sec, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.textContent = sec.label;
  b.dataset.section = sec.id;
  b.addEventListener('click', () => {
    const idx = slides.findIndex((s) => s.section === sec.id);
    if (idx >= 0) nav.jump(idx);
  });
  els.ticks.appendChild(b);
});

let index = 0;
const lookProxy = { x: 0.15, y: 0.2, z: 0 };

function renderHud(slide, first = false) {
  const dur = reduced || first ? 0.01 : 0.55;
  const tl = gsap.timeline();
  if (!first) {
    tl.to([els.kicker, els.title, els.line], { opacity: 0, y: 12, duration: 0.28, ease: 'power2.in' });
  }
  tl.add(() => {
    els.kicker.textContent = slide.kicker;
    els.title.textContent = slide.title;
    els.line.textContent = slide.line;
    const sec = sections.find((s) => s.id === slide.section);
    els.meta.textContent = sec ? sec.label : '';
    document.querySelectorAll('.ticks button').forEach((b) => {
      b.classList.toggle('active', b.dataset.section === slide.section);
    });
    els.fill.style.width = `${((index + 1) / slides.length) * 100}%`;
  });
  tl.fromTo(
    [els.kicker, els.title, els.line],
    { opacity: 0, y: 18 },
    { opacity: 1, y: 0, duration: dur, stagger: 0.05, ease: 'power3.out' },
  );
  if (index > 0) els.hint.classList.add('gone');
}

function moveCamera(slide, withTrail) {
  const dur = reduced ? 0.01 : 1.55;
  const from = world.camera.position.clone();
  const to = { x: slide.cam.x, y: slide.cam.y, z: slide.cam.z };
  if (withTrail && !reduced) world.burstTrail(from, to);
  gsap.to(world.camera.position, {
    ...to,
    duration: dur,
    ease: 'power3.inOut',
  });
  gsap.to(lookProxy, {
    x: slide.cam.tx,
    y: slide.cam.ty,
    z: slide.cam.tz,
    duration: dur,
    ease: 'power3.inOut',
    onUpdate: () => world.look.set(lookProxy.x, lookProxy.y, lookProxy.z),
  });
}

function goTo(i, { first = false } = {}) {
  index = i;
  const slide = slides[i];
  renderHud(slide, first);
  moveCamera(slide, slide.trail && !first);
  world.setSlide(i, { trail: false, reduced });
}

const nav = createNav({
  total: slides.length,
  getIndex: () => index,
  onGo: (i) => goTo(i),
});

els.prev.addEventListener('click', () => nav.go(-1));
els.next.addEventListener('click', () => nav.go(1));

window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = -(e.clientY / window.innerHeight) * 2 + 1;
  world.setPointer(x, y);
});

function onResize() {
  world.resize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onResize);
onResize();

const clock = { t: 0 };
function loop() {
  clock.t += 0.016;
  world.tick(clock.t, reduced);
  requestAnimationFrame(loop);
}

async function start() {
  await world.buildSlides(slides);
  goTo(0, { first: true });
  loop();
  requestAnimationFrame(() => els.loader.classList.add('hide'));
}

start();
