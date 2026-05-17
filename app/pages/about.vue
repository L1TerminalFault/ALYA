<script setup lang="ts">
useHead({ title: "About Us" });
</script>
<template>
  <div class="w-full bg-gray-950 text-white flex flex-col items-center min-h-screen">
    <PageHeader title="About Alya" subtitle="Building the foundations of tomorrow with uncompromising quality and expertise." bgImage="https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about1.png" />
    
    <div class="w-full max-w-7xl px-5 py-30 flex flex-col lg:flex-row gap-20">
      <div class="w-full lg:w-1/2 flex flex-col gap-8">
        <div class="text-brand-500 font-bold tracking-widest uppercase text-sm font-[Switzer]">Our Story</div>
        <div class="text-[clamp(35px,4vw,60px)] font-[Haas] font-bold leading-none tracking-tighter">Decades of Excellence in Construction</div>
        <div class="text-gray-400 text-lg leading-relaxed font-[Switzer]">
          Founded with a vision to redefine the construction landscape, Alya has grown from a specialized contractor into a full-suite enterprise construction firm. Our journey is paved with milestones of structural innovation and engineering triumphs.
          <br><br>
          We believe in constructing not just buildings, but enduring legacies. Every project represents our commitment to safety, precision, and architectural brilliance.
        </div>
      </div>
      <div class="w-full lg:w-1/2 h-[500px] rounded-2xl overflow-hidden relative group">
        <img src="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/unnamed-4-1.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
      </div>
    </div>

    <!-- Leadership Section -->
    <div class="w-full bg-gray-900 py-30 px-5 flex flex-col items-center">
      <div class="w-full max-w-7xl flex flex-col gap-15">
        <div class="flex flex-col items-center text-center gap-4">
          <div class="text-[clamp(40px,5vw,70px)] font-[Haas] font-bold">Leadership Team</div>
          <div class="text-gray-400 text-lg font-[Switzer] max-w-2xl">The visionaries guiding our projects to perfection, bringing decades of combined industry experience and strategic oversight.</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div v-for="i in 3" :key="i" class="flex flex-col gap-5 group cursor-pointer">
            <div class="w-full aspect-[3/4] bg-gray-800 rounded-2xl overflow-hidden relative shadow-lg">
              <img :src="i === 1 ? 'https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg' : i === 2 ? 'https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg' : 'https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg'" class="size-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
            <div class="flex flex-col items-center text-center">
              <div class="text-2xl font-[Haas55] font-bold text-white group-hover:text-brand-500 transition-colors">Executive Name {{i}}</div>
              <div class="text-gray-400 font-[Switzer] font-bold text-sm tracking-widest uppercase mt-2">Director of Operations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <HomeFooter />
  </div>
</template>
