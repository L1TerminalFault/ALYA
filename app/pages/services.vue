<script setup lang="ts">
useHead({ title: "Our Services" });

const services = [
  { 
    title: "Residential Building Construction", 
    desc: "We undertake residential construction projects ranging from private homes to multi-story apartment developments.", 
    list: ["Residential homes", "G+1 and multi-level buildings", "Apartment construction", "Structural and finishing works", "Site development"]
  },
  { 
    title: "Commercial Building Construction", 
    desc: "We deliver commercial projects designed to support business operations and long-term functionality.", 
    list: ["Office buildings", "Mixed-use developments", "Retail and commercial spaces", "Business facilities", "Building extensions"]
  },
  { 
    title: "Institutional Construction", 
    desc: "Aliya Construction PLC provides construction services for public and institutional facilities.", 
    list: ["Schools and training centers", "Hospitals and health facilities", "Government buildings", "Community facilities"]
  },
  { 
    title: "Industrial & Warehouse Facilities", 
    desc: "We construct facilities designed for storage, production, and operational use.", 
    list: ["Warehouses", "Industrial buildings", "Storage facilities", "Utility structures"]
  },
  { 
    title: "Renovation & Finishing Works", 
    desc: "We provide renovation and improvement services for existing structures.", 
    list: ["Interior and exterior renovation", "Structural modification", "Finishing works", "Repair and maintenance"]
  },
  { 
    title: "Site Management & Supervision", 
    desc: "Proper supervision is essential for successful construction delivery. Our team ensures effective coordination throughout project execution.", 
    list: ["Site planning", "Work supervision", "Progress monitoring", "Resource coordination", "Quality assurance"]
  },
  // { 
  //   title: "Equipment & Construction Support", 
  //   desc: "Aliya Construction PLC operates construction equipment and machinery to support project execution and operational efficiency.", 
  //   list: ["Concrete mixers", "Lifting equipment", "Compactors", "Dump trucks", "Scaffolding systems", "Site equipment support"]
  // }
];
</script>

<template>
  <div class="w-full bg-gray-950 text-white flex flex-col items-center min-h-screen">
    <PageHeader title="Our Services" subtitle="Comprehensive construction solutions tailored for enterprise scale logistics and execution." bgImage="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/Gemini_Generated_Image_wv3w8swv3w8swv3w-777x1024.png" />
    
    <div class="w-full max-w-7xl px-5 py-30 flex flex-col gap-15">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(svc, i) in services" :key="i" class="flex flex-col gap-6 p-10 bg-gray-900 rounded-3xl border border-white/5 shadow-xl hover:border-brand-500/50 transition-colors">
          <div class="text-2xl /font-[Haas] font-bold text-white">{{ svc.title }}</div>
          <div class="text-gray-400 /font-[Switzer] text-base leading-relaxed">{{ svc.desc }}</div>
          <ul class="flex flex-col gap-2 mt-2">
            <li v-for="(item, j) in svc.list" :key="j" class="flex items-center gap-3 text-sm /font-[Switzer] text-white/80">
              <div class="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0"></div>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      
      <!-- CTA Palette -->
      <div class="w-full bg-brand-600 rounded-3xl p-12 flex flex-col xl:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden mt-10">
        <div class="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"></div>
        <div class="flex flex-col gap-4 relative z-10 max-w-3xl text-center xl:text-left">
          <div class="text-[clamp(1.8rem,3vw,2.5rem)] /font-[Haas] font-bold text-white leading-tight">Our Commitment to your Project is Exceptional</div>
          <div class="text-white/90 /font-[Switzer] text-lg leading-relaxed">We are committed to delivering construction services with quality workmanship, professional management, and reliable project execution from planning through completion.</div>
        </div>
        <NuxtLink to="/contact" class="shrink-0 relative z-10 bg-white text-brand-900 /font-[Switzer] font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform">Contact Us</NuxtLink>
      </div>
    </div>
    
    <HomeFooter />
  </div>
</template>
