import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBG() {
  const ref = useRef(null);
  useEffect(() => {
    let scene, camera, renderer, particles, shapes = [], animId;
    const init = () => {
      const w = window.innerWidth, h = window.innerHeight;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
      camera.position.z = 5;
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(window.devicePixelRatio);
      if (ref.current) ref.current.appendChild(renderer.domElement);
      const particleCount = 800;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = (Math.random() - 0.5) * 20;
        positions[i + 2] = (Math.random() - 0.5) * 20;
        colors[i] = Math.random() * 0.3 + 0.4;
        colors[i + 1] = Math.random() * 0.3 + 0.4;
        colors[i + 2] = Math.random() * 0.5 + 0.5;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const material = new THREE.PointsMaterial({ size: 0.04, vertexColors: true, transparent: true, opacity: 0.7 });
      particles = new THREE.Points(geometry, material);
      scene.add(particles);
      const geometries = [
        new THREE.DodecahedronGeometry(0.4, 0),
        new THREE.ConeGeometry(0.3, 0.8, 8),
        new THREE.TorusGeometry(0.4, 0.1, 16, 32)
      ];
      for (let i = 0; i < 8; i++) {
        const g = geometries[Math.floor(Math.random() * geometries.length)];
        const m = new THREE.MeshBasicMaterial({
          color: new THREE.Color(Math.random() * 0.3 + 0.4, Math.random() * 0.3 + 0.4, Math.random() * 0.5 + 0.5),
          wireframe: true, transparent: true, opacity: 0.2
        });
        const mesh = new THREE.Mesh(g, m);
        mesh.position.x = (Math.random() - 0.5) * 15;
        mesh.position.y = (Math.random() - 0.5) * 15;
        mesh.position.z = (Math.random() - 0.5) * 15;
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        const s = Math.random() * 0.5 + 0.5; mesh.scale.set(s, s, s);
        scene.add(mesh);
        shapes.push(mesh);
      }
      const onResize = () => {
        const w2 = window.innerWidth, h2 = window.innerHeight;
        camera.aspect = w2 / h2;
        camera.updateProjectionMatrix();
        renderer.setSize(w2, h2);
      };
      window.addEventListener('resize', onResize);
      const animate = () => {
        animId = requestAnimationFrame(animate);
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.0005;
        shapes.forEach(s => { s.rotation.x += 0.005; s.rotation.y += 0.005; });
        renderer.render(scene, camera);
      };
      animate();
      return () => {
        window.removeEventListener('resize', onResize);
        if (animId) cancelAnimationFrame(animId);
        if (renderer) {
          renderer.dispose();
          if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
        }
        scene.traverse(obj => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
            else obj.material.dispose();
          }
        });
      };
    };
    const cleanup = init();
    return cleanup;
  }, []);
  return <div id="three-bg" ref={ref} />;
}