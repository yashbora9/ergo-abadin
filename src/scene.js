import * as THREE from 'three';
import gsap from 'gsap';

const BLUE = 0x0054a6;
const DARK = 0x05070b;

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

function setRectUVs(geo, w, h) {
  const pos = geo.getAttribute('position');
  const uv = geo.getAttribute('uv');
  for (let i = 0; i < pos.count; i++) {
    uv.setXY(i, (pos.getX(i) + w / 2) / w, (pos.getY(i) + h / 2) / h);
  }
  uv.needsUpdate = true;
}

function makePhotoMesh(tex, w, h) {
  const group = new THREE.Group();
  const radius = Math.min(w, h) * 0.045;
  const geo = new THREE.ShapeGeometry(roundedShape(w, h, radius), 12);
  setRectUVs(geo, w, h);

  const frameW = w + 0.07;
  const frameH = h + 0.07;
  const frameGeo = new THREE.ShapeGeometry(roundedShape(frameW, frameH, radius + 0.02), 12);
  setRectUVs(frameGeo, frameW, frameH);
  const frame = new THREE.Mesh(
    frameGeo,
    new THREE.MeshStandardMaterial({
      color: 0x07101c,
      emissive: BLUE,
      emissiveIntensity: 0.45,
      metalness: 0.2,
      roughness: 0.45,
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

  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(w * 1.05, h * 1.05),
    new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    }),
  );
  shadow.position.z = -0.08;
  group.add(shadow);

  group.userData.mat = mat;
  group.userData.shadow = shadow;
  group.userData.frame = frame;
  return group;
}

function makeCard(label) {
  const w = 2.15;
  const h = 2.7;
  const canvas = document.createElement('canvas');
  canvas.width = 768;
  canvas.height = 960;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0c1828';
  ctx.fillRect(0, 0, 768, 960);
  const g = ctx.createLinearGradient(0, 80, 768, 960);
  g.addColorStop(0, 'rgba(0,84,166,0.55)');
  g.addColorStop(1, 'rgba(10,22,38,0.2)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 768, 960);
  ctx.strokeStyle = 'rgba(170,208,240,0.8)';
  ctx.lineWidth = 8;
  ctx.strokeRect(28, 28, 712, 904);
  ctx.fillStyle = 'rgba(190,220,245,0.9)';
  ctx.font = '500 26px Manrope, system-ui, sans-serif';
  ctx.fillText('THE TRIANGLE', 72, 170);
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 78px Syne, sans-serif';
  const words = label.split(' ');
  words.forEach((word, i) => ctx.fillText(word, 72, 390 + i * 92));
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const group = makePhotoMesh(tex, w, h);
  return group;
}

export function createWorld(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(DARK, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(DARK, 18, 42);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
  camera.position.set(0, 0.3, 8.6);

  const look = new THREE.Vector3(0, 0.15, 0);

  scene.add(new THREE.AmbientLight(0x9bb4cc, 0.32));

  const key = new THREE.DirectionalLight(0xffffff, 1.05);
  key.position.set(4.5, 6, 8);
  scene.add(key);

  const rim = new THREE.DirectionalLight(BLUE, 1.35);
  rim.position.set(-6, 2, -4);
  scene.add(rim);

  const fill = new THREE.PointLight(BLUE, 8, 28, 2);
  fill.position.set(0, 1.2, 4);
  scene.add(fill);

  const groundGlow = new THREE.PointLight(0x1a3a66, 4, 18, 2);
  groundGlow.position.set(0, -3, 2);
  scene.add(groundGlow);

  const mobile = window.matchMedia('(max-width: 720px)').matches;
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
    color: 0xb7d4f0,
    size: mobile ? 0.028 : 0.022,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  const trailGeo = new THREE.BufferGeometry();
  const trailCount = 90;
  const trailPos = new Float32Array(trailCount * 3);
  trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
  const trailMat = new THREE.LineBasicMaterial({
    color: BLUE,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const trail = new THREE.Line(trailGeo, trailMat);
  scene.add(trail);

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
  const interactive = [];

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
        interactive.push(mesh);
      }
      for (const card of slide.cards || []) {
        const mesh = makeCard(card.label);
        mesh.position.set(card.x, card.y, card.z);
        mesh.userData.rest = { x: card.x, y: card.y, z: card.z, ry: 0 };
        mesh.userData.phase = Math.random() * Math.PI * 2;
        g.add(mesh);
        interactive.push(mesh);
      }
      scene.add(g);
      slideGroups.push(g);
    }
  }

  let current = -1;
  let hover = null;
  const pointer = new THREE.Vector2(-99, -99);
  const raycaster = new THREE.Raycaster();

  function fadeGroup(group, show, delay = 0) {
    group.visible = true;
    const meshes = group.children;
    meshes.forEach((m, i) => {
      const rest = m.userData.rest || { x: 0, y: 0, z: 0, ry: 0 };
      const mat = m.userData.mat;
      const shadow = m.userData.shadow;
      if (show) {
        m.position.set(rest.x * 1.18, rest.y - 0.35, rest.z - 1.2);
        m.scale.set(0.86, 0.86, 0.86);
        if (mat) mat.opacity = 0;
        if (shadow) shadow.material.opacity = 0;
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
      } else {
        gsap.to(m.position, {
          z: rest.z - 0.8,
          y: rest.y + 0.15,
          duration: 0.7,
          ease: 'power2.in',
        });
        if (mat) gsap.to(mat, { opacity: 0, duration: 0.55, ease: 'power2.in' });
        if (shadow) gsap.to(shadow.material, { opacity: 0, duration: 0.4 });
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

  function burstTrail(from, to) {
    for (let i = 0; i < trailCount; i++) {
      const t = i / (trailCount - 1);
      const s = t * t * (3 - 2 * t);
      trailPos[i * 3] = from.x + (to.x - from.x) * s + Math.sin(t * 8) * 0.15;
      trailPos[i * 3 + 1] = from.y + (to.y - from.y) * s + Math.sin(t * 5) * 0.08;
      trailPos[i * 3 + 2] = from.z + (to.z - from.z) * s;
    }
    trailGeo.attributes.position.needsUpdate = true;
    trailMat.opacity = 0.85;
    gsap.to(trailMat, { opacity: 0, duration: 1.4, ease: 'power2.out', delay: 0.15 });
  }

  function setSlide(index, { trail = false, reduced = false } = {}) {
    if (index === current) return;
    const prev = current;
    if (prev >= 0) fadeGroup(slideGroups[prev], false);
    current = index;
    const g = slideGroups[index];
    if (g) fadeGroup(g, true, reduced ? 0 : 0.25);
    if (trail && prev >= 0 && !reduced) {
      burstTrail(camera.position.clone(), camera.position);
    }
  }

  function setPointer(x, y) {
    pointer.x = x;
    pointer.y = y;
  }

  function resize(w, h) {
    camera.aspect = w / h;
    camera.fov = w < 720 ? 46 : 38;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    const mobile = w < 720;
    const s = mobile ? 0.36 : w < 1100 ? 0.82 : 1;
    slideGroups.forEach((g) => {
      g.scale.setScalar(s);
      g.position.set(0, mobile ? 1.15 : 0, 0);
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
    const hits = raycaster.intersectObjects(interactive, true);
    const next =
      hits.length && hits[0].object.parent && hits[0].object.parent.userData.mat
        ? hits[0].object.parent
        : null;
    if (hover !== next) {
      if (hover) gsap.to(hover.scale, { x: 1, y: 1, z: 1, duration: 0.45, ease: 'power2.out' });
      hover = next;
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

    camera.lookAt(look);
    renderer.render(scene, camera);
  }

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
