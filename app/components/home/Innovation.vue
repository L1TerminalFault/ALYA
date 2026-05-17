<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

const technologies = [
  { name: "Building Information Modeling (BIM)", desc: "Advanced 3D modeling for flawless execution and clash detection." },
  { name: "Automated Drones", desc: "For real-time site surveying, safety compliance, and progress tracking." },
  { name: "Sustainable Logistics", desc: "Proprietary green composites reducing carbon footprint by up to 40%." },
  { name: "AI Resource Management", desc: "Predictive logistics and intelligent resource allocation across all sites." }
];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.fromTo(".innov-card", 
    { opacity: 0, y: 30, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: ".innov-section", start: "top 70%" } }
  );
});
</script>
<template>
  <div class="innov-section w-full bg-gray-950 flex flex-col items-center justify-center px-5 py-20">
    <div class="w-full max-w-7xl flex flex-col lg:flex-row gap-15">
      <div class="w-full lg:w-1/2 rounded-3xl overflow-hidden relative min-h-[500px] border border-white/5 shadow-2xl">
        <img src="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/Gemini_Generated_Image_b71en4b71en4b71e-777x1024.png" class="absolute inset-0 size-full object-cover transition-transform duration-1000 hover:scale-105" />
      </div>
      <div class="w-full lg:w-1/2 flex flex-col justify-center gap-10">
        <div class="flex flex-col gap-4">
          <div class="text-brand-500 font-bold uppercase tracking-widest text-lg font-[Switzer]">Innovation At Core</div>
          <div class="text-4xl lg:text-[70px] font-[Haas] font-bold leading-[0.9] tracking-tighter">Engineering the Future</div>
          <div class="text-gray-400 font-[Switzer] text-xl mt-4 max-w-lg leading-relaxed">We push the boundaries of modern construction using proprietary technology and state-of-the-art management systems.</div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
          <div v-for="(tech, i) in technologies" :key="i" class="innov-card bg-gray-900 border border-gray-800 p-6 rounded-2xl flex flex-col gap-3 hover:border-brand-500/50 transition-colors shadow-lg">
            <div class="text-white font-[Haas] font-bold text-xl leading-tight">{{ tech.name }}</div>
            <div class="text-gray-400 font-[Switzer] text-sm leading-relaxed">{{ tech.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
