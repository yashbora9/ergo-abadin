import * as THREE from 'three';
import gsap from 'gsap';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const ACCENT = 0x7a2042;
const CREAM = 0xf4e4d4;
const WARM = 0xc4a08a;

function roundedShape(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  const rr = Math.min(r, w * 0.12, h * 0.12);
  s.moveTo(x + rr, y);
  s.lineTo(x + w - rr, y);
  s.quadraticCurveTo(x + w, y, x + w, y + rr);
  s.lineTo(x + w, y + h - rr);
  s.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
  s.lineTo(x + rr, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - rr);
  s.lineTo(x, y + rr);
  s.quadraticCurveTo(x, y, x + rr, y);
  return s;
}

function coverUVs(geo, w, h, tex) {
  const img = tex.image;
  const tw = img?.width || 1;
  const th = img?.height || 1;
  const texAspect = tw / th;
  const planeAspect = w / h;
  let sx = 1;
  let sy = 1;
  let ox = 0;
  let oy = 0;
  if (texAspect > planeAspect) {
    sx = planeAspect / texAspect;
    ox = (1 - sx) / 2;
  } else {
    sy = texAspect / planeAspect;
    oy = (1 - sy) / 2;
    if (planeAspect < 0.95) oy = Math.min(oy * 0.28, 0.06);
  }
  const pos = geo.getAttribute('position');
  const uv = geo.getAttribute('uv');
  for (let i = 0; i < pos.count; i++) {
    const u = (pos.getX(i) + w / 2) / w;
    const v = (pos.getY(i) + h / 2) / h;
    uv.setXY(i, ox + u * sx, oy + v * sy);
  }
  uv.needsUpdate = true;
}

function makePhotoMesh(tex, w, h) {
  const group = new THREE.Group();
  const radius = Math.min(w, h) * 0.045;
  const geo = new THREE.ShapeGeometry(roundedShape(w, h, radius), 12);
  coverUVs(geo, w, h, tex);

  const frameW = w + 0.055;
  const frameH = h + 0.055;
  const frameGeo = new THREE.ShapeGeometry(roundedShape(frameW, frameH, radius + 0.018), 12);
  const frame = new THREE.Mesh(
    frameGeo,
    new THREE.MeshStandardMaterial({
      color: 0xf7efe6,
      emissive: ACCENT,
      emissiveIntensity: 0.28,
      metalness: 0.35,
      roughness: 0.38,
    }),
  );
  frame.position.z = -0.012;
  group.add(frame);

  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    transparent: true,
    opacity: 0,
    toneMapped: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.z = 0.01;
  group.add(mesh);

  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(w * 1.12, h * 1.12),
    new THREE.MeshBasicMaterial({
      color: ACCENT,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  glow.position.z = -0.05;
  group.add(glow);

  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(w * 1.08, h * 1.08),
    new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    }),
  );
  shadow.position.z = -0.09;
  group.add(shadow);

  group.userData.mat = mat;
  group.userData.shadow = shadow;
  group.userData.frame = frame;
  group.userData.glow = glow;
  return group;
}

function makeCard({ label, sub = '', kicker = '' }) {
  const w = 2.2;
  const h = 2.85;
  const W = 1024;
  const H = 1328;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#f7efe6';
  ctx.fillRect(0, 0, W, H);
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, 'rgba(122,32,66,0.16)');
  g.addColorStop(0.5, 'rgba(247,239,230,0.4)');
  g.addColorStop(1, 'rgba(244,228,212,0.2)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(122, 32, 66, 0.72)';
  ctx.lineWidth = 7;
  ctx.strokeRect(40, 40, W - 80, H - 80);

  const pad = 96;
  let y = 150;
  ctx.textBaseline = 'top';

  if (kicker) {
    ctx.fillStyle = 'rgba(122, 32, 66, 0.88)';
    ctx.font = '700 34px Manrope, system-ui, sans-serif';
    ctx.letterSpacing = '6px';
    ctx.fillText(String(kicker).toUpperCase(), pad, y);
    ctx.letterSpacing = '0px';
    y += 78;
  }

  ctx.fillStyle = '#7a2042';
  const labelSize = String(label).length > 11 ? 84 : 108;
  ctx.font = `700 ${labelSize}px Syne, sans-serif`;
  const labelLines = wrapText(ctx, String(label), W - pad * 2);
  labelLines.forEach((line) => {
    ctx.fillText(line, pad, y);
    y += labelSize + 14;
  });

  y += 28;
  ctx.strokeStyle = 'rgba(122, 32, 66, 0.45)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(pad, y);
  ctx.lineTo(pad + 160, y);
  ctx.stroke();
  y += 44;

  if (sub) {
    ctx.fillStyle = 'rgba(44, 42, 41, 0.82)';
    ctx.font = '600 48px Manrope, system-ui, sans-serif';
    const subLines = wrapText(ctx, sub, W - pad * 2);
    subLines.forEach((line) => {
      ctx.fillText(line, pad, y);
      y += 64;
    });
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return makePhotoMesh(tex, w, h);
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

export function createWorld(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(CREAM, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(CREAM, 22, 48);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
  camera.position.set(0, 0.3, 8.6);

  const look = new THREE.Vector3(0, 0.15, 0);

  scene.add(new THREE.AmbientLight(0xf3e6d8, 0.72));

  const key = new THREE.DirectionalLight(0xffffff, 1.12);
  key.position.set(4.5, 6, 8);
  scene.add(key);

  const rim = new THREE.DirectionalLight(ACCENT, 0.85);
  rim.position.set(-6, 2, -4);
  scene.add(rim);

  const fill = new THREE.PointLight(ACCENT, 4.5, 28, 2);
  fill.position.set(0, 1.2, 4);
  scene.add(fill);

  const groundGlow = new THREE.PointLight(0xc9a58a, 3.2, 18, 2);
  groundGlow.position.set(0, -3, 2);
  scene.add(groundGlow);

  const isMobile = () => window.matchMedia('(max-width: 720px)').matches;
  let mobile = isMobile();
  const count = mobile ? 260 : 820;
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 28;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 22 - 2;
    speeds[i] = 0.04 + Math.random() * 0.08;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0xc4a08a,
    size: mobile ? 0.028 : 0.022,
    transparent: true,
    opacity: 0.32,
    depthWrite: false,
    blending: THREE.NormalBlending,
    sizeAttenuation: true,
  });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  function makeTrail(color) {
    const geo = new THREE.BufferGeometry();
    const n = 90;
    const pos = new Float32Array(n * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const line = new THREE.Line(geo, mat);
    scene.add(line);
    return { geo, mat, pos, n, line };
  }
  const trailA = makeTrail(ACCENT);
  const trailB = makeTrail(WARM);

  const loader = new THREE.TextureLoader();
  const texCache = new Map();

  function loadTex(url) {
    if (texCache.has(url)) return texCache.get(url);
    const p = new Promise((resolve, reject) => {
      loader.load(
        url,
        (t) => {
          t.colorSpace = THREE.SRGBColorSpace;
          t.anisotropy = renderer.capabilities.getMaxAnisotropy();
          t.minFilter = THREE.LinearMipmapLinearFilter;
          t.generateMipmaps = true;
          t.wrapS = THREE.ClampToEdgeWrapping;
          t.wrapT = THREE.ClampToEdgeWrapping;
          resolve(t);
        },
        undefined,
        reject,
      );
    });
    texCache.set(url, p);
    return p;
  }

  const slideGroups = [];
  let composer = null;
  let bloomPass = null;
  let useBloom = !mobile && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setupComposer(w, h) {
    if (!useBloom) {
      composer = null;
      return;
    }
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 0.08, 0.3, 0.92);
    composer.addPass(bloomPass);
  }

  async function buildSlides(slides) {
    const urls = new Set();
    slides.forEach((s) => (s.photos || []).forEach((ph) => urls.add(ph.src)));
    await Promise.all([...urls].map(loadTex));

    for (const slide of slides) {
      const g = new THREE.Group();
      g.visible = false;
      for (const ph of slide.photos || []) {
        const tex = await texCache.get(ph.src);
        const mesh = makePhotoMesh(tex, ph.w, ph.h);
        mesh.position.set(ph.x, ph.y, ph.z);
        mesh.rotation.y = ph.ry || 0;
        mesh.userData.rest = { x: ph.x, y: ph.y, z: ph.z, ry: ph.ry || 0 };
        mesh.userData.phase = Math.random() * Math.PI * 2;
        g.add(mesh);
      }
      for (const card of slide.cards || []) {
        const mesh = makeCard(card);
        mesh.position.set(card.x, card.y, card.z);
        mesh.userData.rest = { x: card.x, y: card.y, z: card.z, ry: card.ry || 0 };
        mesh.userData.phase = Math.random() * Math.PI * 2;
        mesh.rotation.y = card.ry || 0;
        g.add(mesh);
      }
      scene.add(g);
      slideGroups.push(g);
    }
  }

  let current = -1;
  let hover = null;
  const pointer = new THREE.Vector2(0, 0);
  let pointerLive = false;
  const raycaster = new THREE.Raycaster();

  function killMeshTweens(m) {
    gsap.killTweensOf(m.position);
    gsap.killTweensOf(m.scale);
    gsap.killTweensOf(m.rotation);
    if (m.userData.mat) gsap.killTweensOf(m.userData.mat);
    if (m.userData.shadow) gsap.killTweensOf(m.userData.shadow.material);
    if (m.userData.glow) gsap.killTweensOf(m.userData.glow.material);
    if (m.userData.frame) gsap.killTweensOf(m.userData.frame.material);
  }

  function fadeGroup(group, show, delay = 0) {
    group.visible = true;
    const meshes = group.children;
    meshes.forEach((m, i) => {
      killMeshTweens(m);
      const rest = m.userData.rest || { x: 0, y: 0, z: 0, ry: 0 };
      const mat = m.userData.mat;
      const shadow = m.userData.shadow;
      const glow = m.userData.glow;
      if (show) {
        m.position.set(rest.x * 1.18, rest.y - 0.35, rest.z - 1.2);
        m.scale.set(0.86, 0.86, 0.86);
        if (mat) mat.opacity = 0;
        if (shadow) shadow.material.opacity = 0;
        if (glow) glow.material.opacity = 0;
        gsap.to(m.position, {
          x: rest.x,
          y: rest.y,
          z: rest.z,
          duration: 1.35,
          delay: delay + i * 0.08,
          ease: 'power3.out',
        });
        gsap.to(m.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1.35,
          delay: delay + i * 0.08,
          ease: 'power3.out',
        });
        if (mat) {
          gsap.to(mat, {
            opacity: 1,
            duration: 0.9,
            delay: delay + i * 0.08,
            ease: 'power2.out',
          });
        }
        if (shadow) {
          gsap.to(shadow.material, {
            opacity: 0.28,
            duration: 0.9,
            delay: delay + 0.2,
          });
        }
        if (glow) {
          gsap.to(glow.material, {
            opacity: 0.16,
            duration: 1.1,
            delay: delay + 0.15,
          });
        }
      } else {
        gsap.to(m.position, {
          z: rest.z - 0.8,
          y: rest.y + 0.15,
          duration: 0.7,
          ease: 'power2.in',
        });
        if (mat) gsap.to(mat, { opacity: 0, duration: 0.55, ease: 'power2.in' });
        if (shadow) gsap.to(shadow.material, { opacity: 0, duration: 0.4 });
        if (glow) gsap.to(glow.material, { opacity: 0, duration: 0.4 });
        gsap.to(m.scale, {
          x: 0.94,
          y: 0.94,
          z: 0.94,
          duration: 0.7,
          ease: 'power2.in',
          onComplete: () => {
            if (current !== slideGroups.indexOf(group)) group.visible = false;
          },
        });
      }
    });
  }

  function fillTrail(trail, from, to, amp) {
    for (let i = 0; i < trail.n; i++) {
      const t = i / (trail.n - 1);
      const s = t * t * (3 - 2 * t);
      trail.pos[i * 3] = from.x + (to.x - from.x) * s + Math.sin(t * 8) * amp;
      trail.pos[i * 3 + 1] = from.y + (to.y - from.y) * s + Math.sin(t * 5) * amp * 0.55;
      trail.pos[i * 3 + 2] = from.z + (to.z - from.z) * s;
    }
    trail.geo.attributes.position.needsUpdate = true;
    trail.mat.opacity = 0.85;
    gsap.to(trail.mat, { opacity: 0, duration: 1.4, ease: 'power2.out', delay: 0.15 });
  }

  function burstTrail(from, to) {
    fillTrail(trailA, from, to, 0.15);
    fillTrail(trailB, from, to, 0.22);
  }

  function setSlide(index, { reduced = false } = {}) {
    if (index === current) return;
    const prev = current;
    hover = null;
    if (prev >= 0) fadeGroup(slideGroups[prev], false);
    current = index;
    const g = slideGroups[index];
    if (g) fadeGroup(g, true, reduced ? 0 : 0.25);
  }

  function setPointer(x, y) {
    pointer.x = x;
    pointer.y = y;
    pointerLive = true;
  }

  function layoutGroups(w) {
    mobile = w < 720;
    useBloom = !mobile && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const s = mobile ? 0.4 : w < 1100 ? 0.82 : 1;
    slideGroups.forEach((g) => {
      g.scale.setScalar(s);
      g.position.set(0, mobile ? 1.28 : 0, 0);
    });
  }

  function resize(w, h) {
    camera.aspect = w / h;
    camera.fov = w < 720 ? 46 : 38;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    layoutGroups(w);
    if (useBloom) {
      if (!composer) setupComposer(w, h);
      else {
        composer.setSize(w, h);
        bloomPass?.setSize(w, h);
      }
    } else {
      composer = null;
    }
  }

  function dimOthers(active) {
    const g = slideGroups[current];
    if (!g) return;
    g.children.forEach((m) => {
      const on = !active || m === active;
      if (m.userData.mat) gsap.to(m.userData.mat, { opacity: on ? 1 : 0.32, duration: 0.35 });
      if (m.userData.frame) {
        gsap.to(m.userData.frame.material, {
          emissiveIntensity: on ? 0.28 : 0.08,
          duration: 0.35,
        });
      }
      if (m.userData.glow) {
        gsap.to(m.userData.glow.material, { opacity: on ? 0.16 : 0.04, duration: 0.35 });
      }
    });
  }

  function tick(t, reduced) {
    if (!reduced) {
      particles.rotation.y = t * 0.012;
      const arr = pGeo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        arr[i * 3 + 1] += Math.sin(t * speeds[i] + i) * 0.0012;
      }
      pGeo.attributes.position.needsUpdate = true;
    }

    const g = slideGroups[current];
    if (g) {
      g.children.forEach((m) => {
        const rest = m.userData.rest;
        if (!rest) return;
        const ph = m.userData.phase || 0;
        if (!reduced) {
          m.position.y = rest.y + Math.sin(t * 0.7 + ph) * 0.06;
          m.rotation.y = rest.ry + Math.sin(t * 0.35 + ph) * 0.03;
        }
      });
    }

    raycaster.setFromCamera(pointer, camera);
    const hits = g ? raycaster.intersectObjects(g.children, true) : [];
    const next =
      hits.length && hits[0].object.parent && hits[0].object.parent.userData.mat
        ? hits[0].object.parent
        : null;
    if (hover !== next) {
      if (hover) gsap.to(hover.scale, { x: 1, y: 1, z: 1, duration: 0.45, ease: 'power2.out' });
      hover = next;
      dimOthers(hover);
      if (hover) gsap.to(hover.scale, { x: 1.045, y: 1.045, z: 1.045, duration: 0.45, ease: 'power2.out' });
    }
    if (hover) {
      hover.rotation.x = THREE.MathUtils.lerp(hover.rotation.x, pointer.y * 0.12, 0.08);
      hover.rotation.y = THREE.MathUtils.lerp(
        hover.rotation.y,
        (hover.userData.rest?.ry || 0) + pointer.x * 0.18,
        0.08,
      );
    }

    const px = pointerLive ? pointer.x : 0;
    const py = pointerLive ? pointer.y : 0;
    camera.lookAt(look.x + px * 0.12, look.y + py * 0.06, look.z);
    if (composer && useBloom && !reduced) composer.render();
    else renderer.render(scene, camera);
  }

  setupComposer(window.innerWidth || 1280, window.innerHeight || 720);

  return {
    renderer,
    scene,
    camera,
    look,
    buildSlides,
    setSlide,
    setPointer,
    resize,
    tick,
    burstTrail,
  };
}
