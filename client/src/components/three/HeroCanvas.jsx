import { useEffect, useRef } from 'react';

/**
 * Hero canvas — monochrome particle field + geometric lines.
 * Palette: white particles only, very low opacity.
 * On dark #080808 background this reads as premium/minimal.
 */
export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animId;
    let renderer, scene, camera, particles, lines, ring;
    let mouse = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };

    const init = () => {
      if (!window.THREE) return;
      const THREE = window.THREE;
      const canvas = canvasRef.current;
      if (!canvas) return;

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(55, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
      camera.position.z = 5.5;

      // ── Particle field — all white, varying opacity via size ──
      const count = 1400;
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3]     = (Math.random() - 0.5) * 22;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const pMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.02,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);

      // ── Wireframe icosahedron — structural/geometric ──
      const icoGeo = new THREE.IcosahedronGeometry(2.2, 1);
      const icoMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.045,
      });
      ring = new THREE.Mesh(icoGeo, icoMat);
      ring.position.x = 3.2;
      ring.position.y = 0.2;
      scene.add(ring);

      // ── Grid plane — perspective grid ──
      const gridGeo = new THREE.PlaneGeometry(28, 28, 24, 24);
      const gridMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.028,
      });
      lines = new THREE.Mesh(gridGeo, gridMat);
      lines.rotation.x = -Math.PI / 2.2;
      lines.position.y = -4.5;
      scene.add(lines);

      const onMove = (e) => {
        target.x = (e.clientX / window.innerWidth - 0.5) * 1.6;
        target.y = -(e.clientY / window.innerHeight - 0.5) * 1.2;
      };
      window.addEventListener('mousemove', onMove);

      const onResize = () => {
        if (!canvas) return;
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      };
      window.addEventListener('resize', onResize);

      const clock = new THREE.Clock();
      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        mouse.x += (target.x - mouse.x) * 0.035;
        mouse.y += (target.y - mouse.y) * 0.035;

        particles.rotation.y = t * 0.025 + mouse.x * 0.06;
        particles.rotation.x = t * 0.012 + mouse.y * 0.04;

        ring.rotation.x = t * 0.15;
        ring.rotation.y = t * 0.22;
        ring.position.x = 3.2 + mouse.x * 0.25;
        ring.position.y = 0.2 + mouse.y * 0.2;

        lines.rotation.z = t * 0.004;

        camera.position.x = mouse.x * 0.12;
        camera.position.y = mouse.y * 0.08;

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('resize', onResize);
      };
    };

    if (window.THREE) {
      init();
    } else {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      s.onload = init;
      document.head.appendChild(s);
    }

    return () => {
      cancelAnimationFrame(animId);
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
