import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.fadeDelay = Math.random() * 600;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000 + 1;
        this.prevX = this.x;
        this.prevY = this.y;
        this.vel = {
          x: (Math.random() - 0.5) * 0.3,
          y: (Math.random() - 0.5) * 0.3,
          z: Math.random() * 0.5 + 0.1
        };
        this.life = Math.random() * 3000 + 2000;
        this.birth = Date.now();
        this.opacity = 0;
        this.fadingOut = false;
      }

      update() {
        this.prevX = this.x;
        this.prevY = this.y;

        this.x += this.vel.x;
        this.y += this.vel.y;
        this.z += this.vel.z;

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Handle lifecycle
        const age = Date.now() - this.birth;
        const fadeInDuration = 1000;
        const fadeOutDuration = 1000;

        if (age < fadeInDuration) {
          this.opacity = age / fadeInDuration;
        } else if (age > this.life - fadeOutDuration) {
          this.opacity = (this.life - age) / fadeOutDuration;
          this.fadingOut = true;
        } else {
          this.opacity = 1;
        }

        if (age > this.life) {
          this.reset();
        }
      }

      draw() {
        const size = (1000 - this.z) / 1000 * 2;
        const opacity = this.opacity * 0.8;

        ctx.save();
        ctx.globalAlpha = opacity;

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size * 2);
        
        // Color based on position for variety
        const hue = (this.x / canvas.width * 60 + this.y / canvas.height * 60 + 180) % 360;
        gradient.addColorStop(0, `hsla(${hue}, 70%, 60%, ${opacity})`);
        gradient.addColorStop(0.5, `hsla(${hue}, 70%, 60%, ${opacity * 0.3})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw core particle
        ctx.fillStyle = `hsla(${hue}, 70%, 80%, ${opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      drawConnection(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.3 * this.opacity * other.opacity;
          
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = '#00d4ff';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Initialize particles
    const particleCount = Math.min(window.innerWidth / 15, 80);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Draw connections to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          particle.drawConnection(particles[j]);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Mouse interaction
    let mouse = { x: 0, y: 0 };
    
    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      // Add attraction effect to nearby particles
      particles.forEach(particle => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100 * 0.01;
          particle.vel.x += dx * force;
          particle.vel.y += dy * force;
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};

export default ParticleBackground;