<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

const certs = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
  "LEED Platinum Provider",
];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".cert-item",
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: ".safety-section",
        start: "top 80%",
      },
    }
  );
});
</script>

<template>
  <div class="safety-section w-full bg-gray-950 py-25 text-white flex flex-col items-center justify-center px-4 border-t border-white/5 border-b">
    <div class="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">
      
      <div class="flex flex-col gap-4 max-w-2xl text-center lg:text-left">
        <div class="text-brand-500 font-bold uppercase tracking-widest text-sm font-[Switzer]">Safety & Standards</div>
        <div class="text-3xl md:text-5xl font-[Haas] font-bold leading-tight">Uncompromising on Safety & Industry Standards</div>
      </div>

      <div class="flex flex-wrap lg:flex-nowrap gap-4 justify-center">
        <div v-for="(cert, i) in certs" :key="i" class="cert-item bg-gray-900 border border-gray-800 px-6 py-4 rounded-xl flex items-center justify-center text-center font-[Switzer] font-medium text-gray-300 hover:text-white hover:border-brand-500/50 transition-colors cursor-default">
          {{ cert }}
        </div>
      </div>

    </div>
  </div>
</template>
