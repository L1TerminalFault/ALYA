<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

const projects = [
  { name: "The Zenith Tower", location: "Downtown District", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.04-AM-1024x576.jpeg" },
  { name: "Aura Logistics Center", location: "West Port", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/Gemini_Generated_Image_b71en4b71en4b71e-777x1024.png" },
  { name: "Eco-Industrial Park", location: "North Valley", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg" },
];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".project-card",
    { opacity: 0, y: 100, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 70%",
      },
    }
  );
});
</script>
<template>
  <div class="projects-section w-full bg-gray-950 py-30 text-white flex flex-col items-center justify-center gap-15 px-5">
    <div class="flex flex-col md:flex-row w-full max-w-7xl justify-between items-end gap-10">
      <div class="text-4xl lg:text-[70px] font-bold font-[Haas] tracking-tighter leading-[0.9]">Featured<br>Projects</div>
      <NuxtLink to="/work" class="group flex cursor-pointer items-center gap-3 text-brand-500 hover:text-white px-6 py-3 border border-brand-500 hover:border-white rounded-full transition-colors font-bold overflow-hidden">
        <span class="font-[Switzer] text-[15px] uppercase tracking-wider mt-1">Explore Portfolio</span>
        <img src="/arrow.svg" class="w-4 transition-transform group-hover:translate-x-1" style="filter: invert(1);" />
      </NuxtLink>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-12">
      <NuxtLink
        v-for="(project, i) in projects"
        :key="i"
        :to="'/projects/' + project.name.toLowerCase().replace(/ /g, '-')"
        class="project-card group relative h-[500px] w-full overflow-hidden rounded-2xl cursor-pointer block border border-white/5"
      >
        <img :src="project.img" class="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="absolute bottom-0 left-0 p-8 flex flex-col gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
          <div class="flex justify-between items-center w-full">
            <div class="text-brand-500 text-sm font-[Switzer] font-bold tracking-widest uppercase">{{ project.location }}</div>
            <div class="size-10 rounded-full border border-white/20 flex items-center justify-center overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
               <img src="/arrow.svg" class="w-3 rotate-45 invert" />
            </div>
          </div>
          <div class="text-3xl font-[Haas55] font-bold text-white pr-4 -mt-1 leading-tight">{{ project.name }}</div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
