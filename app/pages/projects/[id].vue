<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const projectId = route.params.id as string;
// Simulate fetching data based on ID
const projectName = projectId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

useHead({ title: projectName + " | Project Details" });
</script>
<template>
  <div class="w-full bg-gray-950 text-white flex flex-col items-center min-h-screen">
    <PageHeader :title="projectName" subtitle="A deep dive into our structural masterpiece and engineering process." bgImage="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg" />
    
    <div class="w-full max-w-7xl px-5 py-30 flex flex-col gap-20">
      <div class="flex flex-col lg:flex-row gap-15">
        <div class="w-full lg:w-2/3 flex flex-col gap-8">
          <div class="text-[clamp(35px,4vw,50px)] font-[Haas] font-bold leading-tight">Project Overview</div>
          <div class="text-gray-400 font-[Switzer] text-lg leading-relaxed">
            The {{ projectName }} represents the pinnacle of modern construction methodology. 
            Blending sustainable practices with extreme structural integrity, this project was successfully delivered on time and within our client's stringent budget.
            <br><br>
            Our team utilized advanced BIM modeling to predict spatial constraints, saving weeks of rework on site. High-grade industrial composites were sourced globally, ensuring a finish that meets the highest enterprise standards.
          </div>
        </div>
        
        <div class="w-full lg:w-1/3 bg-gray-900 border border-gray-800 rounded-3xl p-8 flex flex-col gap-6">
          <div class="text-xl font-[Haas] font-bold border-b border-gray-800 pb-4">Key Metrics</div>
          <div class="flex flex-col gap-4">
            <div class="flex justify-between">
              <span class="text-gray-400 font-[Switzer]">Sector</span>
              <span class="font-bold">Commercial</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400 font-[Switzer]">Scale</span>
              <span class="font-bold">1.2M sq ft</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400 font-[Switzer]">Timeline</span>
              <span class="font-bold">24 Months</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400 font-[Switzer]">Safety Record</span>
              <span class="font-bold">Zero Incidents</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="w-full h-[600px] rounded-3xl overflow-hidden relative shadow-2xl border border-white/5">
        <img src="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/Gemini_Generated_Image_b71en4b71en4b71e-777x1024.png" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
      </div>
    </div>
    
    <HomeFooter />
  </div>
</template>
