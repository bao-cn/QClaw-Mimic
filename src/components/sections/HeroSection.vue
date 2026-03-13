<template>
    <section id="hero" class="flex flex-col gap-6 items-center justify-center py-16 pt-40">
        <div
            class="flex items-center badge-text-secondary badge-bg gap-2 text-sm py-2 px-5 border border-[#383838] rounded-full">
            <img class="h-4" :src="logo" alt="Logo">
            Gabriel Bao 模仿
        </div>
        <img class="h-48 filter-[drop-shadow(0_60px_60px_rgba(255,59,48,0.4))]" :src="logoCombined" alt="Logo Combined">
        <p class="hero-slogan">随时随地，微信一下，QClaw 帮你搞定一切</p>
        <div
            class="flex items-center text-[#FFD700] bg-[#FFD700]/8 gap-2 text-sm py-2 px-5 border border-[rgba(255,215,0,0.2)] rounded-full font-bold">
            <FireIcon :size="20" fill="currentColor" />
            邀请制内测中
        </div>
        <div class="flex gap-4">
            <HoverCard :openDelay="0" :closeDelay="0">
                <HoverCardTrigger>
                    <Button variant="default"
                        class="text-[15px] bg-white text-[#0A0A0E] w-60 h-12 rounded-[12px] font-bold hover:bg-white transition-all duration-300 hover:translate-y-[-2.5px] hover:shadow-2xl hover:shadow-white/20">
                        <AppleIcon :size="18" fill="currentColor" />
                        macOS
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent class="flex flex-col gap-2 p-1.5 bg-[rgba(20,20,28,0.95)] border border-[rgba(255,255,255,0.1)] text-white">
                    <Button variant="ghost" class="hover:bg-[rgba(255,255,255,0.1)] hover:text-white">Apple 芯片</Button>
                    <Button variant="ghost" class="hover:bg-[rgba(255,255,255,0.1)] hover:text-white">Intel 芯片</Button>
                </HoverCardContent>
            </HoverCard>
            <HoverCard :openDelay="0" :closeDelay="0">
                <HoverCardTrigger>
                    <Button variant="default"
                        class="text-[15px] bg-white text-[#0A0A0E] w-60 h-12 rounded-[12px] font-bold hover:bg-white transition-all duration-300 hover:translate-y-[-2.5px] hover:shadow-2xl hover:shadow-white/20">
                        <LinuxIcon :size="18" fill="currentColor" />
                        Linux
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent class="flex flex-col gap-2 p-1.5 bg-[rgba(20,20,28,0.95)] border border-[rgba(255,255,255,0.1)] text-white">
                    <Button variant="ghost" class="hover:bg-[rgba(255,255,255,0.1)] hover:text-white">x86_64 | RPM</Button>
                    <Button variant="ghost" class="hover:bg-[rgba(255,255,255,0.1)] hover:text-white">aarch64 | RPM</Button>
                    <Button variant="ghost" class="hover:bg-[rgba(255,255,255,0.1)] hover:text-white">aarch64 | DEB</Button>
                    <Button variant="ghost" class="hover:bg-[rgba(255,255,255,0.1)] hover:text-white">AppImage | x86_64</Button>
                    <Button variant="ghost" class="hover:bg-[rgba(255,255,255,0.1)] hover:text-white">AppImage | aarch64</Button>
                    <Button variant="ghost" class="hover:bg-[rgba(255,255,255,0.1)] hover:text-white">Snap</Button>
                    <Button variant="ghost" class="hover:bg-[rgba(255,255,255,0.1)] hover:text-white">Flatpak</Button>
                </HoverCardContent>
            </HoverCard>
            <HoverCard :openDelay="0" :closeDelay="0">
                <HoverCardTrigger>
                    <Button variant="default" disabled
                        class="text-[15px] bg-transparent text-[rgba(255,255,255,0.5)] w-60 h-12 rounded-[12px] font-bold hover:bg-transparent transition-all duration-300 hover:translate-y-[-2.5px] hover:shadow-2xl hover:shadow-white/20 border-[rgba(255,255,255,0.08)]">
                        <WindowsIcon :size="18" fill="currentColor" />
                        Windows 敬请期待
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent v-if="false" class="flex flex-col gap-2 p-1.5 bg-[rgba(20,20,28,0.95)] border border-[rgba(255,255,255,0.1)] text-white">
                    <Button variant="ghost" class="hover:bg-[rgba(255,255,255,0.1)] hover:text-white">amd64(x64)</Button>
                    <Button variant="ghost" class="hover:bg-[rgba(255,255,255,0.1)] hover:text-white">arm64(aarch64)</Button>
                </HoverCardContent>
            </HoverCard>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Button } from '../ui/button'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'
import FireIcon from '@/components/icons/FireIcon.vue'
import WindowsIcon from '@/components/icons/WindowsIcon.vue'
import AppleIcon from '@/components/icons/AppleIcon.vue'
import LinuxIcon from '@/components/icons/LinuxIcon.vue'
import logo from '@/assets/logo.png'
import logoCombined from '@/assets/logo-combined.png'
</script>

<style scoped>
.badge-text-secondary {
    color: rgba(240, 240, 245, 0.6);
}

.badge-bg {
    background: rgba(255, 255, 255, 0.05);
}

.hero-slogan {
    font-size: clamp(17px, 2.2vw, 22px);
    max-width: 640px;
    line-height: 1.8;
    font-weight: 500;
    margin-bottom: 24px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.95), #FF6B5E, rgba(255, 255, 255, 0.95));
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeInUp 0.8s ease-out 0.3s both;
}
</style>
