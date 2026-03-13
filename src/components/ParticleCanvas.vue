<template>
  <canvas ref="canvasRef" class="particles-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Point { x: number; y: number; }

class Particle {
  x: number; y: number; vx: number; vy: number; r: number;
  alpha: number; targetAlpha: number;
  readonly baseSpeed: number = 0.05;
  readonly friction: number = 0.996;
  readonly colorRGB: string = "248, 70, 58";

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * this.baseSpeed;
    this.vy = (Math.random() - 0.5) * this.baseSpeed;
    this.r = Math.random() * 1.5 + 0.6;
    this.targetAlpha = Math.random() * 0.3 + 0.1;
    this.alpha = 0;
  }

  update(w: number, h: number, mouse: Point, mouseVel: Point) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x <= 0 || this.x >= w) { this.vx *= -0.9; this.x = this.x <= 0 ? 1 : w - 1; }
    if (this.y <= 0 || this.y >= h) { this.vy *= -0.9; this.y = this.y <= 0 ? 1 : h - 1; }

    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const repulseRadius = 90; 

    if (distance < repulseRadius) {
      const linearFactor = (repulseRadius - distance) / repulseRadius;
      const forceFactor = Math.pow(linearFactor, 2); 
      const mouseSpeed = Math.sqrt(mouseVel.x ** 2 + mouseVel.y ** 2);
      const power = forceFactor * (mouseSpeed * 0.08 + 0.03);
      this.vx += (dx / distance) * power;
      this.vy += (dy / distance) * power;
    }

    const currentSpeed = Math.sqrt(this.vx ** 2 + this.vy ** 2);
    if (currentSpeed > this.baseSpeed) {
      this.vx *= this.friction;
      this.vy *= this.friction;
    }
    this.alpha += (this.targetAlpha - this.alpha) * 0.05;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.colorRGB}, ${this.alpha})`;
    ctx.fill();
  }
}

const canvasRef = ref<HTMLCanvasElement | null>(null);
const mouse = ref<Point>({ x: -2000, y: -2000 });
const lastMouse = ref<Point>({ x: -2000, y: -2000 });
const mouseVel = ref<Point>({ x: 0, y: 0 });

let particles: Particle[] = [];
let animationId: number;

const drawBackground = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
  ctx.fillStyle = '#0A0A0F';
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = '#FF0B1010';
  ctx.lineWidth = 1;
  ctx.beginPath();
  // 纵线
  for (let x = 0; x <= w; x += 80) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
  }
  // 横线
  for (let y = 0; y <= h; y += 80) {
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
  }
  ctx.stroke();

  const drawGlow = (x: number, y: number, radius: number) => {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, 'rgba(248, 70, 58, 0.12)'); 
    gradient.addColorStop(1, 'rgba(248, 70, 58, 0)');    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  };

  drawGlow(w * 0.25, h * 0.3, 300);
  drawGlow(w * 0.65, h * 0.6, 200);
};

const init = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  particles = Array.from({ length: 180 }, () => new Particle(canvas.width, canvas.height));

  const animate = () => {
    const w = canvas.width;
    const h = canvas.height;

    drawBackground(ctx, w, h);

    mouseVel.value = {
      x: mouse.value.x - lastMouse.value.x,
      y: mouse.value.y - lastMouse.value.y
    };
    lastMouse.value = { ...mouse.value };

    for (let i = 0; i < particles.length; i++) {
      const p1 : Particle | undefined = particles[i];
      if (!p1) continue;

      p1.update(w, h, mouse.value, mouseVel.value);
      p1.draw(ctx);

      for (let j = i + 1; j < particles.length; j++) {
        const p2 : Particle | undefined = particles[j];
        if (!p2) continue;

        const d = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(248, 70, 58, ${(1 - d / 120) * 0.17})`;
          ctx.lineWidth = 0.4; 
          ctx.stroke();
        }
      }
    }
    animationId = requestAnimationFrame(animate);
  };
  animate();
};

onMounted(() => {
  init();
  window.addEventListener('mousemove', (e) => {
    mouse.value = { x: e.clientX, y: e.clientY };
  });
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
});
</script>

<style scoped>
.particles-canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: #0A0A0F;
  z-index: -1;
}
</style>