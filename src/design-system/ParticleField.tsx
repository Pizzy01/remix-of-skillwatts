import { useEffect, useRef } from "react";
import * as THREE from "three";

type ParticleColor = "plasma" | "fusion" | "reactor";

interface ParticleFieldProps {
  color?: ParticleColor;
  size?: number;
  speed?: number;
  opacity?: number;
  interactive?: boolean;
  className?: string;
}

const colorValues: Record<ParticleColor, number> = {
  plasma: 0x00e5ff,
  fusion: 0xffb300,
  reactor: 0x00ff66,
};

export const ParticleField = ({
  color = "plasma",
  size = 5,
  speed = 1,
  opacity = 0.6,
  interactive = true,
  className = "",
}: ParticleFieldProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const w = el.clientWidth || 400;
    const h = el.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    // Outer particle sphere
    const geo = new THREE.IcosahedronGeometry(6, 6);
    const mat = new THREE.PointsMaterial({
      color: colorValues[color],
      size: 0.07,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
    });
    const sphere = new THREE.Points(geo, mat);
    scene.add(sphere);

    // Inner wireframe
    const innerGeo = new THREE.IcosahedronGeometry(3.5, 3);
    const innerMat = new THREE.MeshBasicMaterial({
      color: colorValues[color],
      wireframe: true,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    const positions = geo.attributes.position;
    const originalPositions = new Float32Array(positions.array);

    const startTime = performance.now();
    let mouseX = 0;
    let mouseY = 0;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = el.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    if (interactive) window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const t = ((performance.now() - startTime) / 1000) * speed;

      sphere.rotation.y = t * 0.05 + mouseX * 0.2;
      sphere.rotation.x = t * 0.02 + mouseY * 0.2;
      innerSphere.rotation.y = -t * 0.1;
      innerSphere.rotation.x = -t * 0.05;

      for (let i = 0; i < positions.count; i++) {
        const i3 = i * 3;
        const x = originalPositions[i3];
        const y = originalPositions[i3 + 1];
        const z = originalPositions[i3 + 2];
        const wave =
          Math.sin(x * 1.5 + t * 1.5) * 0.15 +
          Math.cos(y * 1.5 + t * 1.2) * 0.15;
        const f = 1 + wave;
        positions.array[i3] = x * f;
        positions.array[i3 + 1] = y * f;
        positions.array[i3 + 2] = z * f;
      }
      positions.needsUpdate = true;

      if (interactive) {
        camera.position.x += (mouseX * 3 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 3 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const nw = el.clientWidth;
      const nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(el);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      if (interactive) window.removeEventListener("mousemove", handleMouseMove);
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      geo.dispose();
      mat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      renderer.dispose();
    };
  }, [color, speed, opacity, interactive, size]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
};
