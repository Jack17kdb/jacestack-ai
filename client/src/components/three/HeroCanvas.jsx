import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationId;
    let renderer, scene, camera, particles, grid, torus;
    let mouse = { x: 0, y: 0 };
    let targetMouse = { x: 0, y: 0 };

    const init = () => {
      if (!window.THREE) return;
      const THREE = window.THREE;
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Renderer
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

      // Scene & Camera
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
      camera.position.z = 5;

      // --- Particle field ---
      const particleCount = 1800;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

        const t = Math.random();
        if (t > 0.7) {
          // electric cyan
          colors[i * 3] = 0; colors[i * 3 + 1] = 0.96; colors[i * 3 + 2] = 1;
        } else if (t > 0.5) {
          // ember orange
          colors[i * 3] = 1; colors[i * 3 + 1] = 0.42; colors[i * 3 + 2] = 0.2;
        } else {
          // mist
          colors[i * 3] = 0.5; colors[i * 3 + 1] = 0.55; colors[i * 3 + 2] = 0.8;
        }
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const pMat = new THREE.PointsMaterial({
        size: 0.025,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);

      // --- Wireframe torus knot ---
      const torusGeo = new THREE.TorusKnotGeometry(1.8, 0.45, 120, 16);
      const torusMat = new THREE.MeshBasicMaterial({
        color: 0x00f5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.07,
      });
      torus = new THREE.Mesh(torusGeo, torusMat);
      torus.position.x = 3.5;
      torus.position.y = -0.5;
      scene.add(torus);

      // --- Grid plane ---
      const gridGeo = new THREE.PlaneGeometry(30, 30, 30, 30);
      const gridMat = new THREE.MeshBasicMaterial({
        color: 0x00f5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.04,
      });
      grid = new THREE.Mesh(gridGeo, gridMat);
      grid.rotation.x = -Math.PI / 2.5;
      grid.position.y = -4;
      scene.add(grid);

      // Mouse parallax
      const onMouseMove = (e) => {
        targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('mousemove', onMouseMove);

      // Resize
      const onResize = () => {
        if (!canvas) return;
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      };
      window.addEventListener('resize', onResize);

      // Animate
      const clock = new THREE.Clock();
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        // Smooth mouse
        mouse.x += (targetMouse.x - mouse.x) * 0.04;
        mouse.y += (targetMouse.y - mouse.y) * 0.04;

        particles.rotation.y = t * 0.03 + mouse.x * 0.08;
        particles.rotation.x = t * 0.015 + mouse.y * 0.05;

        torus.rotation.x = t * 0.2;
        torus.rotation.y = t * 0.3;
        torus.position.x = 3.5 + mouse.x * 0.3;
        torus.position.y = -0.5 + mouse.y * 0.3;

        grid.rotation.z = t * 0.005;

        camera.position.x = mouse.x * 0.15;
        camera.position.y = mouse.y * 0.1;

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
      };
    };

    const loadThree = () => {
      if (window.THREE) { init(); return; }
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.onload = init;
      document.head.appendChild(script);
    };
    loadThree();

    return () => {
      cancelAnimationFrame(animationId);
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
