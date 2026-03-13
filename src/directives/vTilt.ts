import type { Directive } from 'vue';

export const vTilt: Directive = {
  mounted(el: HTMLElement) {
    el.setAttribute('data-tilt', 'true');
    el.style.willChange = 'transform, box-shadow';
    el.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease';

    let frameId: number | null = null;

    const handleMove = (e: MouseEvent) => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const xRel = (e.clientX - rect.left) / rect.width;
        const yRel = (e.clientY - rect.top) / rect.height;

        const rotateY = (xRel - 0.5) * 8;
        const rotateX = (yRel - 0.5) * -8;

        el.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          translateZ(20px)
        `;

        el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
      });
    };

    const handleLeave = () => {
      if (frameId) cancelAnimationFrame(frameId);

      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
      el.style.boxShadow = 'none'; 
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    (el as any)._tiltHandlers = { handleMove, handleLeave };
  },

  unmounted(el) {
    const { handleMove, handleLeave } = (el as any)._tiltHandlers || {};
    el.removeEventListener('mousemove', handleMove);
    el.removeEventListener('mouseleave', handleLeave);
  }
};