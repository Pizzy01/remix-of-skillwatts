import { useEffect, useRef } from "react";
import * as THREE from "three";

export const EnergyCore = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mountNode = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 18;
    camera.position.x = 0;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountNode.appendChild(renderer.domElement);

    // 1. Outer Particle Sphere (Fluid Energy)
    // Lower geometry detail on small screens to keep the animation smooth
    const isMobile = window.innerWidth < 768;
    const geometry = new THREE.IcosahedronGeometry(6, isMobile ? 16 : 30);
    const material = new THREE.PointsMaterial({
      color: 0x00E5FF, // Plasma Blue
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const sphere = new THREE.Points(geometry, material);
    scene.add(sphere);

    // 2. Inner Wireframe Core (Structure)
    const innerGeometry = new THREE.IcosahedronGeometry(4, 4);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFB300, // Fusion Gold
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerSphere);

    // Store original positions for fluid animation
    const positions = geometry.attributes.position;
    const originalPositions = new Float32Array(positions.count * 3);
    for (let i = 0; i < positions.count * 3; i++) {
      originalPositions[i] = positions.array[i];
    }

    const clock = new THREE.Clock();
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let rafId = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Fluid rotation
      sphere.rotation.y = elapsedTime * 0.05 + mouseX * 0.2;
      sphere.rotation.x = elapsedTime * 0.02 + mouseY * 0.2;

      innerSphere.rotation.y = -elapsedTime * 0.1;
      innerSphere.rotation.x = -elapsedTime * 0.05;

      // Morph vertices to create the organic fluid effect
      for (let i = 0; i < positions.count; i++) {
        const i3 = i * 3;
        const x = originalPositions[i3];
        const y = originalPositions[i3 + 1];
        const z = originalPositions[i3 + 2];

        // Complex wave function based on time and position
        const wave = Math.sin(x * 1.5 + elapsedTime * 1.5) * 0.15 +
                     Math.cos(y * 1.5 + elapsedTime * 1.2) * 0.15;

        const factor = 1 + wave;

        positions.array[i3] = x * factor;
        positions.array[i3 + 1] = y * factor;
        positions.array[i3 + 2] = z * factor;
      }
      positions.needsUpdate = true;

      // Parallax effect on camera
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
};
