<script setup lang="ts">
useHead({ title: "Our Work" });
const projects = [
  { name: "The Zenith Tower", category: "Commercial", location: "Downtown District", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.04-AM-1024x576.jpeg" },
  { name: "Aura Logistics", category: "Industrial", location: "West Port", img: "https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about1.png" },
  { name: "Eco-Industrial Park", category: "Sustainable", location: "North Valley", img: "https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about1.png" },
  { name: "Harbor Freight Terminal", category: "Infrastructure", location: "South Bay", img: "https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about1.png" },
  { name: "Skyline Residences", category: "Residential", location: "East End", img: "https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about1.png" },
  { name: "Global Trade Center", category: "Commercial", location: "Financial District", img: "https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about2.png" },
];
</script>
<template>
  <div class="w-full bg-gray-950 text-white flex flex-col items-center min-h-screen">
    <PageHeader title="Our Work" subtitle="A showcase of structural excellence and architectural innovation." bgImage="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg" />
    
    <div class="w-full max-w-7xl px-5 py-30">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink v-for="(project, i) in projects" :key="i" :to="'/projects/' + project.name.toLowerCase().replace(/ /g, '-')" class="group relative h-[500px] w-full overflow-hidden rounded-2xl cursor-pointer block">
          <img :src="project.img" class="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="absolute bottom-0 left-0 p-8 flex flex-col gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
            <div class="flex justify-between items-center w-full">
              <div class="text-brand-500 text-xs font-[Switzer] font-bold tracking-widest uppercase">{{ project.category }} &middot; {{ project.location }}</div>
              <div class="size-10 rounded-full border border-white/20 flex items-center justify-center overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500 shrink-0">
                 <img src="/arrow.svg" class="w-3 rotate-45 invert" />
              </div>
            </div>
            <div class="text-3xl font-[Haas55] font-bold text-white pr-4 -mt-1 leading-tight">{{ project.name }}</div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>
