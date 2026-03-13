<template>
    <section id="how">
        <SectionTitle tip="HOW IT WORKS" title="三步上手" subTitle="从下载到开始干活，只需 3 分钟" />
        <div class="relative flex flex-row items-start gap-20 mb-40">
            <a href="#hero" class="setps">
                <div class="circle">
                    <Badge class="circle-badeg" variant="destructive">
                        1
                    </Badge>
                    📥
                </div>
                <h3 class="text-[16px] font-bold text-white">下载安装</h3>
                <p class="text-[12px] text-white/70 font-bold text-wrap text-center py-3">支持 Mac & Windows<br>一键安装，无需配置环境</p>
            </a>
            <div class="setps-controller">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                    <path d="M0 10h32m0 0l-6-6m6 6l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
            </div>
            <a href="#hero" class="setps">
                <div class="circle">
                    <Badge class="circle-badeg" variant="destructive">
                        2
                    </Badge>
                    📱
                </div>
                <h3 class="text-[16px] font-bold text-white">扫码绑定微信</h3>
                <p class="text-[12px] text-white/70 font-bold text-wrap text-center py-3">打开 Qclaw 扫码关联微信<br>立即关联</p>
            </a>
            <div class="setps-controller">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                    <path d="M0 10h32m0 0l-6-6m6 6l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
            </div>
            <a href="#hero" class="setps">
                <div class="circle">
                    <Badge class="circle-badeg" variant="destructive">
                        3
                    </Badge>
                    🚀
                </div>
                <h3 class="text-[16px] font-bold text-white">微信或电脑发指令，开干</h3>
                <p class="text-[12px] text-white/70 font-bold text-wrap text-center py-3">通过微信或电脑发消息<br>Qclaw 立刻帮你执行任务</p>
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import SectionTitle from '../SectionTitle.vue'


</script>

<style scoped>
@reference "tailwindcss";

.setps {
    @apply flex flex-col items-center justify-center;
}

.setps-controller {
    @apply  text-[#FF3B30] opacity-30 pt-8;
}

.circle {
    @apply relative w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-4xl bg-[rgba(255,59,48,0.08)] border border-[rgba(255,59,48,0.15)] transition-all duration-400;
}

.setps:hover .circle {
    @apply bg-[rgba(255,59,48,0.15)] border-[rgba(255,59,48,0.35)] transform scale-[1.08];
}

.circle-badeg {
    @apply absolute h-6 min-w-6 rounded-full px-1 font-mono tabular-nums top-0 right-0 bg-[#FF3B30] text-[12px] text-white font-bold;
}
</style>