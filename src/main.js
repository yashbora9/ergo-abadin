import gsap from 'gsap';
import { slides, sections, SUCCESS_QUESTIONS } from './slides.js';
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
  quote: document.querySelector('#quote'),
  quoteText: document.querySelector('#quoteText'),
  quoteCite: document.querySelector('#quoteCite'),
  facts: document.querySelector('#facts'),
  scores: document.querySelector('#scores'),
  hud: document.querySelector('#hud'),
  meta: document.querySelector('#sectionLabel'),
  count: document.querySelector('#count'),
  fill: document.querySelector('#fill'),
  ticks: document.querySelector('#ticks'),
  loader: document.querySelector('#loader'),
  hint: document.querySelector('#hint'),
  prev: document.querySelector('#prev'),
  next: document.querySelector('#next'),
};

sections.forEach((sec) => {
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

function renderFacts(slide) {
  els.facts.replaceChildren();
  (slide.facts || []).forEach((f) => {
    const d = document.createElement('div');
    d.className = 'fact';
    const v = document.createElement('b');
    v.textContent = f.v;
    const k = document.createElement('span');
    k.textContent = f.k;
    d.append(v, k);
    els.facts.appendChild(d);
  });
}

function renderScores(slide) {
  const box = els.scores;
  if (!box) return;
  gsap.killTweensOf(box.querySelectorAll('.score-fill, .score-pct'));
  box.replaceChildren();
  if (!slide.scores) {
    box.hidden = true;
    els.hud?.classList.remove('is-scores');
    return;
  }
  box.hidden = false;
  els.hud?.classList.add('is-scores');
  SUCCESS_QUESTIONS.forEach((q) => {
    const row = document.createElement('div');
    row.className = 'score-row';
    const name = document.createElement('span');
    name.textContent = q.title;
    const track = document.createElement('div');
    track.className = 'score-track';
    const fill = document.createElement('i');
    fill.className = 'score-fill';
    const to = Number(q.score) || 0;
    fill.dataset.to = String(to);
    fill.style.width = '0%';
    track.appendChild(fill);
    const pct = document.createElement('b');
    pct.className = 'score-pct';
    pct.textContent = '0%';
    row.append(name, track, pct);
    box.appendChild(row);
  });
}

function playScores() {
  const rows = els.scores?.querySelectorAll('.score-row');
  if (!rows?.length) return;
  rows.forEach((row, i) => {
    const fill = row.querySelector('.score-fill');
    const pct = row.querySelector('.score-pct');
    const to = Number(SUCCESS_QUESTIONS[i]?.score ?? fill?.dataset.to ?? 0);
    const delay = reduced ? 0 : 0.2 + i * 0.1;
    const dur = reduced ? 0.01 : 1.2;
    const proxy = { v: 0 };
    gsap.killTweensOf(fill);
    gsap.fromTo(
      fill,
      { width: '0%' },
      {
        width: `${to}%`,
        duration: dur,
        delay,
        ease: 'power3.out',
        overwrite: true,
      },
    );
    gsap.to(proxy, {
      v: to,
      duration: dur,
      delay,
      ease: 'power3.out',
      overwrite: true,
      onUpdate: () => {
        if (pct) pct.textContent = `${Math.round(proxy.v)}%`;
      },
      onComplete: () => {
        if (pct) pct.textContent = `${to}%`;
        if (fill) fill.style.width = `${to}%`;
      },
    });
  });
}

function renderHud(slide, first = false) {
  const dur = reduced || first ? 0.01 : 0.55;
  const tl = gsap.timeline();
  if (!first) {
    tl.to([els.kicker, els.title, els.line, els.quote, els.facts, els.scores], {
      opacity: 0,
      y: 12,
      duration: 0.28,
      ease: 'power2.in',
    });
  }
  tl.add(() => {
    els.kicker.textContent = slide.kicker;
    els.title.textContent = slide.title;
    els.line.textContent = slide.line || '';
    if (slide.quote) {
      els.quote.hidden = false;
      els.quoteText.textContent = slide.quote;
      els.quoteCite.textContent = slide.cite || '';
    } else {
      els.quote.hidden = true;
      els.quoteText.textContent = '';
      els.quoteCite.textContent = '';
    }
    renderFacts(slide);
    renderScores(slide);
    if (slide.scores) playScores();
    const sec = sections.find((s) => s.id === slide.section);
    els.meta.textContent = sec ? sec.label : '';
    els.count.textContent = `${String(index + 1).padStart(2, '0')}  /  ${String(slides.length).padStart(2, '0')}`;
    document.querySelectorAll('.ticks button').forEach((b) => {
      b.classList.toggle('active', b.dataset.section === slide.section);
    });
    els.fill.style.width = `${((index + 1) / slides.length) * 100}%`;
    els.prev.disabled = index === 0;
    els.next.disabled = index === slides.length - 1;
  });
  tl.fromTo(
    [els.kicker, els.title, els.line, els.quote, els.facts, els.scores],
    { opacity: 0, y: 18 },
    { opacity: 1, y: 0, duration: dur, stagger: 0.05, ease: 'power3.out' },
  );
  if (index > 0) els.hint.classList.add('gone');
}

function camFor(slide) {
  const mobile = window.innerWidth < 720;
  const c = slide.cam;
  if (!mobile) return { pos: { x: c.x, y: c.y, z: c.z }, look: { x: c.tx, y: c.ty, z: c.tz } };
  return {
    pos: { x: c.x * 0.12, y: c.y + 0.12, z: Math.min(c.z + 0.5, 9.3) },
    look: { x: Math.min(c.tx * 0.3, 1.05), y: c.ty + 0.22, z: c.tz },
  };
}

function moveCamera(slide, withTrail) {
  const dur = reduced ? 0.01 : 1.55;
  const from = world.camera.position.clone();
  const mapped = camFor(slide);
  const to = mapped.pos;
  if (withTrail && !reduced) world.burstTrail(from, to);
  const mid = {
    x: (from.x + to.x) / 2 + (to.z - from.z) * 0.07,
    y: (from.y + to.y) / 2 + 0.32,
    z: (from.z + to.z) / 2 - 0.15,
  };
  gsap.killTweensOf(world.camera.position);
  gsap.killTweensOf(lookProxy);
  if (reduced) {
    world.camera.position.set(to.x, to.y, to.z);
    lookProxy.x = mapped.look.x;
    lookProxy.y = mapped.look.y;
    lookProxy.z = mapped.look.z;
    world.look.set(lookProxy.x, lookProxy.y, lookProxy.z);
    return;
  }
  gsap.to(world.camera.position, {
    keyframes: [
      { x: mid.x, y: mid.y, z: mid.z, duration: dur * 0.42 },
      { x: to.x, y: to.y, z: to.z, duration: dur * 0.58 },
    ],
    ease: 'power2.inOut',
  });
  gsap.to(lookProxy, {
    x: mapped.look.x,
    y: mapped.look.y,
    z: mapped.look.z,
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
  world.setSlide(i, {
    reduced,
    section: slide.section,
    gallery: slide.gallery,
    galleryLit: !!slide.galleryLit,
  });
  document.getElementById('app')?.classList.remove('is-focus');
}

const nav = createNav({
  total: slides.length,
  getIndex: () => index,
  onGo: (i) => goTo(i),
  onSection: (n) => {
    const sec = sections[n];
    if (!sec) return;
    const idx = slides.findIndex((s) => s.section === sec.id);
    if (idx >= 0) nav.jump(idx);
  },
  onEscape: () => world.closeFocus(),
});

els.prev.addEventListener('click', () => nav.go(-1));
els.next.addEventListener('click', () => nav.go(1));

world.onGalleryPick((n) => {
  const idx = slides.findIndex((s) => s.id === `success-${n + 1}`);
  if (idx >= 0) nav.jump(idx);
});

window.addEventListener(
  'keydown',
  (e) => {
    if (slides[index]?.section !== 'success') return;
    let n = null;
    if (e.key === '0') n = 10;
    else if (/^[1-9]$/.test(e.key)) n = Number(e.key);
    if (n == null) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    const idx = slides.findIndex((s) => s.id === `success-${n}`);
    if (idx >= 0) nav.jump(idx);
  },
  true,
);

window.addEventListener('click', (e) => {
  if (e.target.closest('.nav-btn, .ticks, .chrome, .progress, .hint')) return;
  world.onClick();
});

const cursor = document.querySelector('#cursor');
const cursorDot = cursor?.querySelector('i');
const cursorRing = cursor?.querySelector('b');
const finePointer = window.matchMedia('(pointer: fine)').matches && !reduced;
const ring = { x: 0, y: 0 };
const mouse = { x: 0, y: 0 };

if (finePointer && cursor && cursorDot && cursorRing) {
  document.documentElement.classList.add('cursor-on');
  cursor.hidden = false;
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    world.setPointer(x, y);
    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });
  window.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  window.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
} else {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    world.setPointer(x, y);
  });
}

function onResize() {
  world.resize(window.innerWidth, window.innerHeight);
  const slide = slides[index];
  if (!slide) return;
  const mapped = camFor(slide);
  gsap.killTweensOf(world.camera.position);
  gsap.killTweensOf(lookProxy);
  world.camera.position.set(mapped.pos.x, mapped.pos.y, mapped.pos.z);
  lookProxy.x = mapped.look.x;
  lookProxy.y = mapped.look.y;
  lookProxy.z = mapped.look.z;
  world.look.set(lookProxy.x, lookProxy.y, lookProxy.z);
}
window.addEventListener('resize', onResize);
onResize();

const clock = { t: 0 };
function loop() {
  clock.t += 0.016;
  if (finePointer && cursorRing) {
    ring.x += (mouse.x - ring.x) * 0.18;
    ring.y += (mouse.y - ring.y) * 0.18;
    cursorRing.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`;
  }
  world.tick(clock.t, reduced);
  requestAnimationFrame(loop);
}

async function start() {
  try {
    await document.fonts.ready;
  } catch {
    /* canvas cards still render with fallback fonts */
  }
  await world.buildSlides(slides);
  onResize();
  goTo(0, { first: true });
  loop();
  requestAnimationFrame(() => els.loader.classList.add('hide'));
}

start();
