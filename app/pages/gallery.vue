<script setup lang="ts">
useHead({ title: "Site Gallery" });
const images = [
  "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg",
  "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg",
  "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg",
  "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.04-AM-1024x576.jpeg",
  "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/unnamed-4-1.jpg",
  "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg",
  "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.04-AM-1024x576.jpeg",
  "https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about1.png"
];
</script>
<template>
  <div class="w-full bg-gray-950 text-white flex flex-col items-center min-h-screen">
    <PageHeader title="Site Gallery" subtitle="A visual journey through our active and completed enterprise builds." bgImage="https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about2.png" />
    
    <div class="w-full max-w-[1400px] px-5 py-30">
      <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <div v-for="(img, i) in images" :key="i" class="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in border border-white/5">
          <img :src="img" class="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div class="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
        </div>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>
