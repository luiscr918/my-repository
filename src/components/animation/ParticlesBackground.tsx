import { useEffect } from "react";
import "../../styles/ParticlesBackground.css";

export default function ParticlesBackground() {
  useEffect(() => {
    const container = document.createElement("div");
    container.className = "particles-container";
    document.body.appendChild(container);

    const particleCount = 60;

    function createParticle() {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      resetParticle(particle);
      container.appendChild(particle);
      animateParticle(particle);
    }

    function resetParticle(particle: HTMLDivElement) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.opacity = "0";
      return { x, y };
    }

    function animateParticle(particle: HTMLDivElement) {
      const { x, y } = resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        const moveX = x + (Math.random() * 20 - 10);
        const moveY = y - Math.random() * 30;
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
        setTimeout(() => animateParticle(particle), duration * 1000);
      }, delay * 1000);
    }

    for (let i = 0; i < particleCount; i++) createParticle();

    const onMouseMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = "0.6";
      container.appendChild(particle);
      setTimeout(() => {
        particle.style.transition = "all 2s ease-out";
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = "0";
        setTimeout(() => particle.remove(), 2000);
      }, 10);
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      container.remove();
    };
  }, []);

  return null;
}
