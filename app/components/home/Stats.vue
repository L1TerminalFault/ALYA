<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";

const stats = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 450, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Commitment to Safety" },
];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".stat-card",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".stats-container",
        start: "top 75%",
      },
    }
  );
});
</script>

<template>
  <div class="stats-container w-full bg-gray-950 py-30 text-white flex flex-col items-center justify-center gap-15 relative overflow-hidden">
    <!-- Decorative background element -->
    <div class="absolute -right-20 -top-20 size-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="text-4xl lg:text-7xl font-bold font-[Haas] tracking-tighter text-center px-5">
      The Foundation of Trust
    </div>
    
    <div class="flex flex-col lg:flex-row gap-15 lg:gap-30 w-full justify-center max-w-7xl px-5">
      <div v-for="(stat, i) in stats" :key="i" class="stat-card flex flex-col items-center gap-3">
        <div class="text-6xl lg:text-[100px] font-black text-brand-500 leading-none">
          <AnimatedCounter :target="stat.value" :suffix="stat.suffix" />
        </div>
        <div class="text-xl font-[Switzer] text-gray-400 mt-2 text-center max-w-xs uppercase tracking-widest">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</template>
