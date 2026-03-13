<template>
    <section id="demos">
        <SectionTitle tip="USE CASES" title="真实场景，即刻体验" subTitle="从日常提醒到自动化开发，Qclaw 帮你解锁无限可能" />
        <div class="demos mb-[100px]">
            <div v-tilt class="card">
                <div class="card-img">
                    <div class="visual bg-[linear-gradient(135deg,#0a1628,#0a2818)]">
                        <div class="hex-pattern"></div>
                        <DesktopIcon class="icon" :size="88" fill="#FF6B5E" />
                    </div>
                    <div class="mockup horizontal">
                        <div class="chat-bubble user flex items-center gap-1">
                            <div class="text-[10px] text-[#07c160] flex items-center">
                                <WechatIcon :size="15" fill="currentColor" />
                                    微信
                            </div>
                            帮我打开桌面的"Q3报告.xlsx"，把第3列数据求和
                        </div>
                        <div class="chat-bubble bot">
                            📂 已打开文件<br>
                            ✅ Q3总销售额为 ¥2,847,600，已保存!
                            <span class="typeing"></span>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <span class="badge b1">💻 远程操控</span>
                    <h3 class="text-[18px] font-bold text-white my-2">远程操作电脑文件/网页</h3>
                    <p class="text-[14px] text-white/70">不带电脑也能随时改文档、查数据、处理工作</p>
                </div>
            </div>
            <div v-tilt class="card">
                <div class="card-img">
                    <div class="visual bg-[linear-gradient(135deg,#1a0a2e,#2e0a1a)]">
                        <div class="hex-pattern"></div>
                        <HashtagIcon class="icon" :size="88" fill="#FF6B5E" />

                    </div>
                    <div class="mockup horizontal">
                        <div class="chat-bubble user flex items-center gap-1">
                            <div class="text-[10px] text-[#07c160] flex items-center">
                                <WechatIcon :size="15" fill="currentColor" />
                                    微信
                            </div>
                            帮我在小红书发一条 AI 效率笔记，自动互动涨粉
                        </div>
                        <div class="chat-bubble bot">
                            📝 笔记已生成 & 发布！<br>
                            🤖 已开启自动互动，今日新增 127 粉丝 🚀
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <span class="badge b2">📱 社媒运营</span>
                    <h3 class="text-[18px] font-bold text-white my-2">社媒自动运营涨粉</h3>
                    <p class="text-[14px] text-white/70">不用团队自动互动发帖，轻松涨粉</p>
                </div>
            </div>
            <div v-tilt class="card">
                <div class="card-img">
                    <div class="visual bg-[linear-gradient(135deg,#0a0f1e,#1e0a28)]">
                        <div class="hex-pattern"></div>
                        <GithubIcon class="icon" :size="88" fill="#FF6B5E" />
                    </div>
                    <div class="mockup horizontal">
                        <div class="chat-bubble user flex items-center gap-1">
                            <div class="text-[10px] text-[#07c160] flex items-center">
                                <WechatIcon :size="15" fill="currentColor" />
                                    微信
                            </div>
                            帮我创建一个 Chrome 插件项目，自动提交到 GitHub
                        </div>
                        <div class="chat-bubble bot">
                            🛠 项目已创建：qclaw-chrome-ext<br>
                            📦 已 push 到 GitHub，自动生成 README<br>
                            ⭐ 目标：冲击 1000 Stars！
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <span class="badge b3">🚀 自动开发</span>
                    <h3 class="text-[18px] font-bold text-white my-2">GitHub 项目自动开发</h3>
                    <p class="text-[14px] text-white/70">你出创意，我来实现，自动建库冲千星</p>
                </div>
            </div>
            <div v-tilt class="card">
                <div class="card-img">
                    <div class="visual bg-[linear-gradient(135deg,#0a1e1e,#0a0f28)]">
                        <div class="hex-pattern"></div>
                        <GraduationCapIcon class="icon" :size="88" fill="#FF6B5E" />
                    </div>
                    <div class="mockup horizontal">
                        <div class="chat-bubble user flex items-center gap-1">
                            <div class="text-[10px] text-[#07c160] flex items-center">
                                <WechatIcon :size="15" fill="currentColor" />
                                    微信
                            </div>
                            搜近3年 LLM Agent 综述论文，整理成文献综述
                        </div>
                        <div class="chat-bubble bot">
                            🔍 已检索到 47 篇相关论文<br>
                            📋 已筛选 Top 20 高引论文<br>
                            📝 综述草稿已完成，引用格式：APA<br>
                            ✅ 已导出 PDF & LaTeX
                            <span class="typeing"></span>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <span class="badge b4">📚 学术研究</span>
                    <h3 class="text-[18px] font-bold text-white my-2">学术论文自动整理</h3>
                    <p class="text-[14px] text-white/70">自动找文献、整理引用、写综述、提升发文效率</p>
                </div>
            </div>
            <div v-tilt class="card full-width">
                <div class="card-img">
                    <div class="visual bg-[linear-gradient(135deg,#0a1628,#1a0a2e)]">
                        <div class="hex-pattern"></div>
                        <CloudSunRainIcon class="icon" :size="88" fill="#FF6B5E" />
                    </div>
                    <div class="mockup horizontal">
                        <div class="chat-bubble full-user flex items-center gap-1">
                            <div class="text-[10px] text-[#07c160] flex items-center">
                                <WechatIcon :size="15" fill="currentColor" />
                                    微信
                            </div>
                            帮我设置每天早上 8 点推送天气
                        </div>
                        <div class="chat-bubble full-bot">
                            ✅ 已设置！明早 8 点准时播报<br>
                            🌤 明天晴，23°C，建议穿薄外套~<br>
                            🌧 后天有雨，记得带伞哦
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <span class="badge b5">☀️ 智能提醒</span>
                    <h3 class="text-[18px] font-bold text-white my-2">每日天气定时提醒</h3>
                    <p class="text-[14px] text-white/70">自动推送天气状况，给出穿衣 & 出行建议</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import CloudSunRainIcon from '../icons/CloudSunRainIcon.vue';
import DesktopIcon from '../icons/DesktopIcon.vue';
import GithubIcon from '../icons/GithubIcon.vue';
import GraduationCapIcon from '../icons/GraduationCapIcon.vue';
import HashtagIcon from '../icons/HashtagIcon.vue';
import WechatIcon from '../icons/WechatIcon.vue';
import SectionTitle from '../SectionTitle.vue'
import { vTilt } from '@/directives/vTilt'

</script>

<style scoped>
@reference "tailwindcss";

.demos {
    @apply grid grid-cols-2 gap-5 max-w-350 w-350;
}

.card {
    @apply rounded-3xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] backdrop-blur-sm overflow-hidden transition-all duration-500;
}

.card:hover {
    @apply border-[rgba(255,59,48,0.2)] shadow-2xl shadow-[rgba(255,59,48,0.05)];
}

.card-img {
    @apply h-60 relative overflow-hidden;
}

.card-content {
    @apply px-6 py-7;
}
.full-width {
    @apply col-span-2;
}

.visual {
    @apply relative w-full h-full flex items-center justify-center;
}
.hex-pattern {
    @apply absolute inset-0 bg-[url('./pattern.svg')] opacity-[0.5];
}

.icon {
    @apply opacity-[0.12] absolute;
}

.badge {
    @apply inline-block py-0.5 px-3 rounded-sm text-[11px] font-bold mb-3;
}

.b1 {
    @apply bg-[rgba(255,59,48,0.1)] text-[#ff3b30];
}
.b2 {
    @apply bg-[rgba(0,255,136,0.1)] text-[#00ff88];
}
.b3 {
    @apply bg-[rgba(255,45,117,0.1)] text-[#ff2d75];
}
.b4 {
    @apply bg-[rgba(123,47,255,0.1)] text-[#7b2fff];
}
.b5 {
    @apply bg-[rgba(255,165,0,0.1)] text-[#ffa500];
}
.mockup {
    @apply flex flex-col p-5 gap-3 relative;
}
.horizontal {
    @apply flex-row items-center justify-center gap-4 flex-wrap;
}
.chat-bubble {
    @apply px-4 py-2.5 rounded-lg text-sm;
}
.user {
    @apply absolute -top-45 right-10 bg-[linear-gradient(135deg,rgba(255,59,48,0.12),rgba(255,100,80,0.08))] border border-[rgba(255,59,48,0.15)] text-[#F0F0F5];
}
.bot {
    @apply absolute -top-30 left-10 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)] text-[rgba(240,240,245,0.6)];
}
.full-user {
    @apply absolute -top-30 right-[51%] bg-[linear-gradient(135deg,rgba(255,59,48,0.12),rgba(255,100,80,0.08))] border border-[rgba(255,59,48,0.15)] text-[#F0F0F5];
}
.full-bot {
    @apply absolute -top-40 left-[51%] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)] text-[rgba(240,240,245,0.6)];
}
.typeing {
    @apply inline-block w-0.5 h-3.5 bg-[#FF6B5E] animate-blink ml-0.5;
}
</style>