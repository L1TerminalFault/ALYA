<script setup lang="ts">
useHead({ title: "Contact Us" });
</script>
<template>
  <div class="w-full bg-gray-950 text-white flex flex-col items-center min-h-screen">
    <PageHeader title="Contact Us" subtitle="Start a conversation with our enterprise team." bgImage="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/Gemini_Generated_Image_b71en4b71en4b71e-777x1024.png" />
    
    <div class="w-full max-w-7xl px-5 py-30 flex flex-col lg:flex-row gap-20">
      
      <!-- Form Section -->
      <div class="w-full lg:w-1/2 flex flex-col gap-8">
        <div class="text-brand-500 font-bold tracking-widest text-sm font-[Switzer] uppercase">Get In Touch</div>
        <div class="text-[clamp(35px,4vw,50px)] font-[Haas] font-bold leading-none tracking-tighter shadow-sm text-white">Let's build the future together.</div>
        
        <form class="flex flex-col gap-6 mt-4 w-full max-w-lg" @submit.prevent>
          <div class="flex flex-col gap-2">
            <label class="text-gray-400 font-[Switzer] text-sm tracking-wide">Full Name</label>
            <input type="text" class="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-brand-500 transition-colors" placeholder="John Doe" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-gray-400 font-[Switzer] text-sm tracking-wide">Email Address</label>
            <input type="email" class="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-brand-500 transition-colors" placeholder="john@example.com" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-gray-400 font-[Switzer] text-sm tracking-wide">Project Details</label>
            <textarea rows="4" class="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-white outline-none focus:border-brand-500 transition-colors mt-2 resize-none" placeholder="Tell us about your requirements..."></textarea>
          </div>
          <button class="mt-4 bg-white text-black font-bold font-[Switzer] py-4 rounded-full hover:bg-brand-50 hover:text-brand-900 transition-colors self-start px-12">Submit Request</button>
        </form>
      </div>
      
      <!-- Locations Section -->
      <div class="w-full lg:w-1/2 flex flex-col gap-12 lg:pl-10 mt-10 lg:mt-0">
        <div class="flex flex-col gap-6 p-10 bg-gray-900 rounded-3xl border border-white/5">
          <div class="text-2xl font-[Haas] font-bold">Global Headquarters</div>
          <div class="text-gray-400 font-[Switzer] text-lg leading-relaxed">
            100 Innovation Drive,<br>
            Tech District, Metropolis 90210<br>
            United States
          </div>
          <div class="text-brand-500 font-[Switzer] text-lg font-bold">+1 (800) 555-0199</div>
          <div class="text-white font-[Switzer] text-lg hover:text-brand-500 transition-colors cursor-pointer w-fit border-b border-dashed border-gray-500 pb-1">enterprise@alya.co</div>
        </div>
        
        <div class="w-full h-80 bg-gray-800 rounded-3xl overflow-hidden relative group cursor-crosshair border border-white/5 shadow-2xl">
          <img src="https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about1.png" class="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full text-white font-bold text-sm tracking-widest uppercase border border-white/20">View Map</div>
          </div>
        </div>
      </div>
      
    </div>
    
    <HomeFooter />
  </div>
</template>
