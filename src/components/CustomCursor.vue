<template>
  <div class="cursor-container">
    <div class="cursor-dot" :style="dotStyle"></div>
    
    <div 
      class="cursor-ring" 
      :class="{ 'hovering': isHovering }" 
      :style="ringStyle"
    ></div>

    <div class="cursor-glow" :style="glowStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, computed } from 'vue';

const mouse = reactive({ x: -100, y: -100 });  
const ringPos = reactive({ x: -100, y: -100 });  
const isHovering = ref(false);

let rafId: number;

const hideSystemCursor = () => {
  document.body.style.cursor = 'none';
};

const updateMouse = (e: MouseEvent) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

const animate = () => {
  ringPos.x += (mouse.x - ringPos.x) * 0.15;
  ringPos.y += (mouse.y - ringPos.y) * 0.15;

  rafId = requestAnimationFrame(animate);
};

const dotStyle = computed(() => ({
  transform: `translate3d(${mouse.x - 4}px, ${mouse.y - 4}px, 0)`
}));

const ringStyle = computed(() => {
  const size = isHovering.value ? 56 : 36;
  return {
    width: `${size}px`,
    height: `${size}px`,
    transform: `translate3d(${ringPos.x - size / 2}px, ${ringPos.y - size / 2}px, 0)`
  };
});

const glowStyle = computed(() => ({
  transform: `translate3d(${mouse.x - 200}px, ${mouse.y - 200}px, 0)`
}));

const handleHover = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const isHoverTarget = target.closest('a, button, .hover-target, [data-tilt]');

  isHovering.value = !!isHoverTarget;
};

onMounted(() => {
  hideSystemCursor();
  window.addEventListener('mousemove', updateMouse);
  window.addEventListener('mouseover', handleHover);
  animate();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouse);
  window.removeEventListener('mouseover', handleHover);
  cancelAnimationFrame(rafId);
});
</script>

<style scoped>
.cursor-container {
  pointer-events: none; /* 防止遮挡下方点击 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
}

.cursor-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #F8463A;
  border-radius: 50%;
  will-change: transform;
}

.cursor-ring {
  position: absolute;
  border: 1.5px solid #F8463A;
  border-radius: 50%;
  transition: width 0.3s ease, height 0.3s ease, background 0.3s ease;
  will-change: transform;
}

.cursor-ring.hovering {
  background: rgba(248, 70, 58, 0.15);
  border-width: 2px;
}

.cursor-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(248, 70, 58, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  will-change: transform;
}
</style>