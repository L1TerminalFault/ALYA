<script setup lang="ts">
useHead({ title: "About Us" });

const leaders = [
  { name: "Belay Taye Gurmu", role: "General Manager (20 Yrs Exp)", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg" },
  { name: "Tesfaye Abiebie", role: "Project Manager (9 Yrs Exp)", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg" },
  { name: "Solomon Gizachew", role: "Finance Manager", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg" }
];
</script>
<template>
  <div class="w-full bg-gray-950 text-white flex flex-col items-center min-h-screen">
    <PageHeader title="About Aliya" subtitle="Building the foundations of tomorrow with uncompromising quality and expertise." bgImage="https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about1.png" />
    
    <div class="w-full max-w-7xl px-5 py-30 flex flex-col lg:flex-row gap-20">
      <div class="w-full lg:w-1/2 flex flex-col gap-8">
        <div class="text-brand-500 font-bold tracking-widest uppercase text-sm font-[Switzer]">Our Story</div>
        <div class="text-[clamp(35px,4vw,60px)] font-[Haas] font-bold leading-none tracking-tighter">Decades of Excellence in Construction</div>
        <div class="text-gray-400 text-lg leading-relaxed font-[Switzer]">
          Founded with a vision to redefine the construction landscape, Aliya has grown from a specialized contractor into a full-suite enterprise construction firm. Our journey is paved with milestones of structural innovation and engineering triumphs.
          <br><br>
          We believe in constructing not just buildings, but enduring legacies. Every project represents our commitment to safety, precision, and architectural brilliance.
        </div>
      </div>
      <div class="w-full lg:w-1/2 h-[500px] rounded-2xl overflow-hidden relative group">
        <img src="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/unnamed-4-1.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
      </div>
    </div>

    <!-- Capabilities & Machinery Section -->
    <div class="w-full bg-gray-900 py-30 px-5 flex flex-col items-center">
      <div class="w-full max-w-7xl flex flex-col gap-15">
        <div class="flex flex-col gap-4 text-center items-center">
          <div class="text-brand-500 font-[Switzer] text-sm font-bold tracking-widest uppercase">Scalable Logistics</div>
          <div class="text-[clamp(40px,5vw,70px)] font-[Haas] font-bold">Workforce & Equipment</div>
          <div class="text-gray-400 text-lg font-[Switzer] max-w-2xl">Backed by a systematically organized workforce and a comprehensive fleet of heavy-duty construction machinery ensuring full execution self-reliance.</div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="flex flex-col gap-6 p-10 bg-gray-950 rounded-3xl border border-white/5 shadow-2xl hover:border-brand-500/30 transition-colors">
            <div class="text-3xl font-[Haas55] font-bold text-white tracking-tighter">Our Staff (34+ Core Team)</div>
            <div class="text-gray-400 font-[Switzer] text-lg leading-relaxed flex flex-col gap-4">
              <p>We boast a foundational team of highly skilled <strong>Civil Engineers, Building Engineers, and Construction Managers</strong>. The engineering core includes <strong>Senait Fiseha</strong> and <strong>Feven Zewdie</strong> managing central office operations, supported natively by active site engineers including <strong>Sosina Mamo</strong>, <strong>Yoseph Fisseha</strong>, <strong>Anwar Mohammed</strong>, <strong>Natnael Markos</strong>, and <strong>Tekaligne Mengesha</strong>.</p>
              <p>Additionally, our administrative logistics are overseen gracefully by <strong>Hana Messele</strong> and <strong>Ashebir Taye</strong>.</p>
            </div>
          </div>

          <div class="flex flex-col gap-6 p-10 bg-gray-950 rounded-3xl border border-white/5 shadow-2xl hover:border-brand-500/30 transition-colors">
            <div class="text-3xl font-[Haas55] font-bold text-white tracking-tighter">Heavy Machinery Fleet</div>
            <div class="text-gray-400 font-[Switzer] text-lg leading-relaxed flex flex-col gap-4">
              <p>To assure uninterrupted velocity across operations, we maintain our own fleet:</p>
              <ul class="list-disc pl-5 flex flex-col gap-2 opacity-90">
                <li>Heavy transports featuring <strong>16m³ UD</strong> and <strong>16.5m³ SINO Dump Trucks</strong>.</li>
                <li>Four <strong>1HZ TOYOTA HILUX Pickups</strong> for instant site connectivity.</li>
                <li>High-powered <strong>42m Lifts</strong> and top tier <strong>HCB Machines</strong> (2000 blocks daily).</li>
                <li>An exhaustive arsenal of concrete mixers (360lt), robin plate compacters, jack hammers, and over <strong>5,000m² of professional scaffolding</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Leadership Section -->
    <div class="w-full bg-gray-950 py-30 px-5 flex flex-col items-center border-t border-gray-900">
      <div class="w-full max-w-7xl flex flex-col gap-15">
        <div class="flex flex-col items-center text-center gap-4">
          <div class="text-[clamp(40px,5vw,70px)] font-[Haas] font-bold">Leadership Team</div>
          <div class="text-gray-400 text-lg font-[Switzer] max-w-2xl">The visionaries guiding our projects to perfection, bringing decades of combined industry experience and strategic oversight.</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div v-for="(leader, i) in leaders" :key="i" class="flex flex-col gap-5 group cursor-pointer">
            <div class="w-full aspect-[3/4] bg-gray-800 rounded-2xl overflow-hidden relative shadow-lg">
              <img :src="leader.img" class="size-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
            <div class="flex flex-col items-center text-center">
              <div class="text-2xl font-[Haas55] font-bold text-white group-hover:text-brand-500 transition-colors">{{ leader.name }}</div>
              <div class="text-gray-400 font-[Switzer] font-bold text-sm tracking-widest uppercase mt-2">{{ leader.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <HomeFooter />
  </div>
</template>
