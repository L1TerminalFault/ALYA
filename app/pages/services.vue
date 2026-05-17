<script setup lang="ts">
useHead({ title: "Our Services" });
const services = [
  { title: "Pre-Construction", desc: "Design-build planning, accurate estimations, and rigorous risk management assessments before ground is broken.", img: "https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about1.png" },
  { title: "General Contracting", desc: "Full-scale project execution with expert resource management, ensuring timelines and budgets are strictly met.", img: "https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about2.png" },
  { title: "Civil Infrastructure", desc: "High-level civil engineering solutions for roads, bridges, and public infrastructure projects.", img: "https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about2.png" },
  { title: "Sustainable Building", desc: "LEED-certified green construction practices, utilizing eco-friendly materials and energy-efficient designs.", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/Gemini_Generated_Image_wv3w8swv3w8swv3w-777x1024.png" },
];
</script>
<template>
  <div class="w-full bg-gray-950 text-white flex flex-col items-center min-h-screen">
    <PageHeader title="Our Services" subtitle="Comprehensive construction solutions tailored for enterprise scale logistics and execution." bgImage="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/Gemini_Generated_Image_wv3w8swv3w8swv3w-777x1024.png" />
    
    <div class="w-full max-w-7xl px-5 py-30 grid grid-cols-1 md:grid-cols-2 gap-15">
      <div v-for="(svc, i) in services" :key="i" class="flex flex-col gap-6 group cursor-pointer">
        <div class="w-full h-80 rounded-2xl overflow-hidden relative border border-white/5 shadow-xl">
          <img :src="svc.img" class="size-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div class="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
        </div>
        <div class="flex flex-col gap-3 px-2">
          <div class="text-3xl font-[Haas] font-bold text-white group-hover:text-brand-500 transition-colors">{{ svc.title }}</div>
          <div class="text-gray-400 font-[Switzer] text-lg leading-relaxed">{{ svc.desc }}</div>
        </div>
      </div>
    </div>
    
    <HomeFooter />
  </div>
</template>
