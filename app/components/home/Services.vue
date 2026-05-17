<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

const services = [
  { title: "Pre-Construction", desc: "Design-build planning and risk management.", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg" },
  { title: "General Contracting", desc: "Full-scale project execution with expert logistics.", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg" },
  { title: "Civil Infrastructure", desc: "High-level civil engineering solutions.", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg" }
];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    ".svc-card",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".offer-section", start: "top 70%" } }
  );
});
</script>

<template>
  <div class="offer-section w-full bg-[#f8f8f8] flex flex-col items-center justify-center p-5 py-30 text-black">
    <div class="w-full max-w-7xl flex flex-col items-center gap-15">
      <div class="flex flex-col items-center text-center gap-4 max-w-3xl">
        <div class="text-brand-600 font-bold uppercase tracking-widest text-sm font-[Switzer]">What We Offer</div>
        <div class="text-[clamp(40px,5vw,70px)] font-[Haas] font-bold leading-none tracking-tighter">Enterprise Solutions</div>
        <div class="text-gray-600 font-[Switzer] text-xl mt-2 leading-relaxed">
          From sourcing through to last-mile delivery, we manage complex supply chains with precision and reliability.
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-10">
        <NuxtLink v-for="(svc, i) in services" :key="i" to="/services" class="svc-card group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-gray-200 block">
          <img :src="svc.img" class="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-8 flex flex-col gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
            <div class="text-2xl font-[Haas55] font-bold text-white leading-tight drop-shadow-md">{{ svc.title }}</div>
            <div class="text-gray-300 font-[Switzer] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{{ svc.desc }}</div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
