<template>
  <div class="flex flex-col items-center transition-all duration-300">
    <ParticleCanvas />
    <CustomCursor />
    <nav class="fixed top-0 left-0 flex w-full h-20 gap-6.5 items-center px-16 bg-[#0A0A0E] border-b border-[#271b23] z-50">
      <a href="#hero" class="h-9 flex gap-3 items-center mr-5">
        <img class="h-9" :src="logo" alt="Logo">
        <img class="h-6.5" :src="logoText" alt="Logo Text">
      </a>
      <a href="#features" class="animated-link-btn font-bold text-[16px]">功能优势</a>
      <a href="#how" class="animated-link-btn font-bold text-[16px]">快速上手</a>
      <a href="#demos" class="animated-link-btn font-bold text-[16px]">使用场景</a>
      <div class="flex-1"></div>
      <a href="https://github.com/bao-cn/QClaw-Mimic" target="_blank">
        <GithubIcon :size="24" fill="white" />
      </a>
      <a href="#hero" variant="default" class="text-[16px] bg-gradient-red text-white w-30 h-8.5 rounded-md flex items-center justify-center font-bold">立即下载</a>
    </nav>
    <HeroSection class="reveal-section"/>
    <FeaturesSection class="reveal-section"/>
    <HowSection class="reveal-section"/>
    <DemosSection class="reveal-section"/>
    <CtaSection class="reveal-section"/>
    <footer class="w-full border-t border-[#271b23] flex flex-col items-center justify-center pt-10">
      <div class="flex items-center justify-center gap-2 mb-4.5">
        <img class="h-6" :src="logo" alt="Logo">
        <img class="h-4" :src="logoText" alt="Logo Text">
      </div>
      <p class="text-[12px] text-[rgba(255,255,255,0.35)] mb-2.5">Copyright © 1998 - 2026 Tencent. All Rights Reserved.</p>
      <div class="mb-10">
        <ul class="flex items-center justify-center gap-4.5 text-[13px] text-[rgba(255,255,255,0.35)]">
          <li>
            <a class="decoration-0 transition-all duration-300 hover:text-[#FF3B30]" href="#">腾讯公司</a>
          </li>
          <li> | </li>
          <li>
            <a class="decoration-0 transition-all duration-300 hover:text-[#FF3B30]" href="#">版权所有</a>
          </li>
          <li> | </li>
          <li>
            <a class="decoration-0 transition-all duration-300 hover:text-[#FF3B30]" href="#">使用协议</a>
          </li>
          <li> | </li>
          <li>
            <a class="decoration-0 transition-all duration-300 hover:text-[#FF3B30]" href="#">隐私政策</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import CustomCursor from './components/CustomCursor.vue'
import ParticleCanvas from './components/ParticleCanvas.vue'
import HeroSection from './components/sections/HeroSection.vue'
import FeaturesSection from './components/sections/FeaturesSection.vue'
import HowSection from './components/sections/HowSection.vue'
import DemosSection from './components/sections/DemosSection.vue'
import logoText from './assets/logo-text.png'
import logo from './assets/logo.png'
import CtaSection from './components/sections/CtaSection.vue'
import GithubIcon from './components/icons/GithubIcon.vue'

onMounted(() => {
  const observerOptions = {
    root: null, 
    threshold: 0.20,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const sections = document.querySelectorAll('.reveal-section')
  sections.forEach((el) => observer.observe(el))
})
</script>
<style scoped>
.bg-gradient-red {
  background: linear-gradient(135deg, #FF3B30, #FF6B5E);
}

.animated-link-btn {
  position: relative;
  text-decoration: none !important;
  padding-bottom: 4px;
  overflow: hidden;
  color: #ffffffcc;
}

.animated-link-btn:hover {
  color: #FFFFFF;
}

.animated-link-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #FF3B30, #FF6B5E);
  transition: width 0.4s ease;
  transform-origin: left center;
}

.animated-link-btn:hover::after {
  width: 100%;
}

.animated-link-btn::after {
  transition: width 0.4s ease, transform-origin 0s 0.4s;
}

.animated-link-btn:not(:hover)::after {
  transform-origin: right center;
}

.reveal-section {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1); 
  will-change: transform, opacity;
}

.reveal-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

</style>
