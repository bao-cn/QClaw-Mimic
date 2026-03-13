<template>
    <section class="w-full flex items-center justify-center px-25 py-10 mb-15 text-center">
        <div class="cta">
            <img class="w-15" :src="logo" alt="Logo">
            <h2 class="text-[32px] font-bold text-white mb-3">开始使用 QClaw</h2>
            <p class="text-[16px] text-[rgba(240,240,245,0.6)] mb-9">随时随地，微信一下，QClaw 帮你搞定一切</p>
            <div class="flex flex-wrap items-center justify-center gap-4.5">
                <Button variant="default"
                    class="text-[15px] bg-white text-[#0A0A0E] w-60 h-12 rounded-[12px] font-bold hover:bg-white transition-all duration-300 hover:translate-y-[-2.5px] hover:shadow-2xl hover:shadow-white/20">
                    <AppleIcon :size="18" fill="currentColor" />
                    macOS
                </Button>
                <Button variant="default"
                    class="text-[15px] bg-white text-[#0A0A0E] w-60 h-12 rounded-[12px] font-bold hover:bg-white transition-all duration-300 hover:translate-y-[-2.5px] hover:shadow-2xl hover:shadow-white/20">
                    <LinuxIcon :size="18" fill="currentColor" />
                    Linux
                </Button>
                <Button variant="outline" disabled
                    class="text-[15px] bg-transparent text-[rgba(255,255,255,0.5)] w-60 h-12 rounded-[12px] font-bold hover:bg-transparent transition-all duration-300 hover:translate-y-[-2.5px] hover:shadow-2xl hover:shadow-white/20 border-[rgba(255,255,255,0.08)]">
                    <WindowsIcon :size="18" fill="currentColor" />
                    Windows 敬请期待
                </Button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import WindowsIcon from '@/components/icons/WindowsIcon.vue'
import AppleIcon from '@/components/icons/AppleIcon.vue'
import LinuxIcon from '@/components/icons/LinuxIcon.vue'
</script>

<style scoped>
@reference "tailwindcss";

.cta {
    @apply relative max-w-200 flex flex-col items-center justify-center gap-4.5 px-16 py-12 rounded-3xl bg-[linear-gradient(135deg,rgba(255,59,48,0.08),rgba(255,59,48,0.02))] border border-[rgba(255,59,48,0.12)] overflow-hidden;
}

.cta::before {
    content: '';
    @apply absolute w-75 h-75 bg-[radial-gradient(circle,rgba(255,59,48,0.1),transparent_70%)] -top-25 -left-20 pointer-events-none;
}
</style>