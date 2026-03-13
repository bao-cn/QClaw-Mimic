<template>
    <section id="features" class="grid grid-cols-[repeat(5,1fr)] items-start justify-center gap-3 py-12 px-10 max-w-325">
        <div class="card hover-target flex flex-col gap-4 py-8 px-6">
            <div class="w-13 h-13 rounded-2xl badge transition-all duration-400">
                <LightningIcon :size="24" fill="white" />
            </div>
            <h3 class="text-[14px] font-bold text-white">自动部署，打开即用</h3>
            <p class="text-[12px] text-[rgba(240,240,245,0.6)] leading-[1.6]">支持 Mac & Windows，内置国产优质大模型，支持切换自定义模型</p>
            <span class="badge2 text-[12px] rounded-sm px-2 py-1">开箱即用</span>
        </div>
        <div class="card hover-target flex flex-col gap-4 py-8 px-6">
            <div class="w-13 h-13 rounded-2xl badge transition-all duration-400">
                <WechatIcon :size="24" fill="#07C160" />
            </div>
            <h3 class="text-[14px] font-bold text-white">微信直接对话，远程操控</h3>
            <p class="text-[12px] text-[rgba(240,240,245,0.6)] leading-[1.6]">直接关联微信，零配置，随时随地远程让 AI 干活</p>
            <span class="badge2 text-[12px] rounded-sm px-2 py-1">微信直联</span>
        </div>
        <div class="card hover-target flex flex-col gap-4 py-8 px-6">
            <div class="w-13 h-13 rounded-2xl badge transition-all duration-400">
                <PieceIcon :size="24" fill="white" />
            </div>
            <h3 class="text-[14px] font-bold text-white">5000+ Skills 生态</h3>
            <p class="text-[12px] text-[rgba(240,240,245,0.6)] leading-[1.6]">支持Skills市场，如ClawHub、GitHub 等丰富生态，Skills
                随取随用</p>
            <span class="badge2 text-[12px] rounded-sm px-2 py-1">丰富生态</span>
        </div>
        <div class="card hover-target flex flex-col gap-4 py-8 px-6">
            <div class="w-13 h-13 rounded-2xl badge transition-all duration-400">
                <span>🦞</span>
            </div>
            <h3 class="text-[14px] font-bold text-white">持续记忆，你的专属龙虾</h3>
            <p class="text-[12px] text-[rgba(240,240,245,0.6)] leading-[1.6]">记住偏好和上下文，持续成长，最懂你的 AI</p>
            <span class="badge2 text-[12px] rounded-sm px-2 py-1">懂你所想</span>
        </div>
        <div class="card hover-target flex flex-col gap-4 py-8 px-6">
            <div class="w-13 h-13 rounded-2xl badge transition-all duration-400">
                <HalvedIcon :size="24" fill="#07C160" />
            </div>
            <h3 class="text-[14px] font-bold text-white">本地部署，办公更高效</h3>
            <p class="text-[12px] text-[rgba(240,240,245,0.6)] leading-[1.6]">直接操控文件、浏览器、邮件，不是只会聊天</p>
            <span class="badge2 text-[12px] rounded-sm px-2 py-1">高效操控</span>
        </div>
    </section>
</template>

<script setup lang="ts">
import HalvedIcon from '@/components/icons/HalvedIcon.vue'
import WechatIcon from '@/components/icons/WechatIcon.vue'
import PieceIcon from '@/components/icons/PieceIcon.vue'
import LightningIcon from '@/components/icons/LightningIcon.vue'



</script>

<style scoped>
.badge {
    background: linear-gradient(135deg, rgba(255, 59, 48, 0.12), rgba(255, 100, 80, 0.04));
    border: 1px solid rgba(255, 59, 48, 0.1);
    color: #FF6B5E;
    display: flex;
    align-items: center;
    justify-content: center;
}

.badge2 {
    display: inline-block;
    width: fit-content;
    white-space: nowrap;
    background: linear-gradient(135deg, rgba(255, 59, 48, 0.12), rgba(255, 100, 80, 0.04));
    border: 1px solid rgba(255, 59, 48, 0.1);
    color: #FF6B5E;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01));
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
    transition: all 0.5s;
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: linear-gradient(135deg, rgba(255, 59, 48, 0.08), transparent 60%);
    opacity: 0;
    transition: opacity 0.5s;
}

.card:hover::before {
    opacity: 1;
}

.card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--red-glow), transparent);
    opacity: 0;
    transition: opacity 0.4s;
}

.card:hover::after {
    opacity: 1;
}

.card:hover {
    border-color: rgba(255, 59, 48, 0.25);
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(255, 59, 48, 0.08), 0 0 30px rgba(255, 59, 48, 0.04);
}

.card:hover .badge {
    background: linear-gradient(135deg, rgba(255, 59, 48, 0.25), rgba(255, 100, 80, 0.1));
    transform: scale(1.1) rotate(-3deg);
    box-shadow: 0 4px 20px rgba(255, 59, 48, 0.2);
}
</style>