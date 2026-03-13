<template>
    <div class="flex flex-col items-center gap-5 my-16">
        <p
            class="relative inline-block text-center tracking-[3px] font-['JetBrains Mono'] text-[12px] text-[#FF6B5E] uppercase text-with-dividers">
            {{ tip }}</p>
        <h1 class="text-[40px] font-bold tracking-wider text-white">{{ title }}</h1>
        <p class="text-sm font-medium tracking-wider text-white/50">{{ subTitle }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    tip?: string
    title?: string
    subTitle?: string
}>()
</script>

<style scoped>
@reference "tailwindcss";

.text-with-dividers::before,
.text-with-dividers::after {
    content: '';
    @apply absolute top-1/2 w-8 h-[.1px] bg-[#FF6B5E] -translate-y-1/2 opacity-50;
}

.text-with-dividers::before {
    @apply right-full mr-4;
}

.text-with-dividers::after {
    @apply left-full ml-4;
}
</style>