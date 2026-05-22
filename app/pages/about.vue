<script setup lang="ts">
useHead({ title: "About Us" });

const leaders = [
  { name: "Belay Taye Gurmu", role: "General Manager (20 Yrs Exp)", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg" },
  { name: "Tesfaye Abiebie", role: "Project Manager (9 Yrs Exp)", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg" },
  { name: "Solomon Gizachew", role: "Finance Manager", img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg" }
];
</script>
<template>
  <div class="w-full bg-gray-950 text-white flex flex-col items-center min-h-screen">
    <PageHeader title="About Aliya" subtitle="Building the foundations of tomorrow with uncompromising quality and expertise." bgImage="https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about1.png" />
    
    <!-- Our Story Layout (Original) -->
    <div class="w-full max-w-7xl px-5 py-30 flex flex-col lg:flex-row gap-20">
      <div class="w-full lg:w-1/2 flex flex-col gap-8">
        <div class="text-brand-500 font-bold uppercase text-sm font-[Switzer]">Our Story</div>
        <div class="text-[clamp(35px,4vw,60px)] font-[Haas] font-bold leading-none">Decades of Excellence in Construction</div>
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

    <!-- Added Info Palettes -->
    <div class="w-full bg-gray-950 py-20 px-5 flex flex-col items-center border-t border-white/5">
      <div class="w-full max-w-7xl flex flex-col gap-15">
        
        <div class="flex flex-col lg:flex-row gap-15">
          <div class="lg:w-1/2 flex flex-col gap-6">
            <div class="text-brand-500 font-bold uppercase text-sm font-[Switzer]">Building with Experience</div>
            <div class="text-[clamp(30px,3.3vw,50px)] font-[Haas] font-bold leading-tight">Reliability, and Professional Execution</div>
            <div class="text-gray-400 text-lg leading-relaxed font-[Switzer] flex flex-col gap-4">
              <p>Based in Addis Ababa, <strong>Aliya Construction PLC</strong> operates as a licensed contractor committed to delivering projects that meet required standards while maintaining efficiency, safety, and client satisfaction.</p>
              <p>Established in 2014 G.C. with the objective of contributing to the country’s growing infrastructure and building sector. Since its establishment, the company has delivered residential, commercial, and institutional projects through structured planning, technical supervision, and quality-focused execution.</p>
            </div>
          </div>
          <div class="lg:w-1/2 flex flex-col gap-6 p-10 bg-gray-900 rounded-3xl border border-white/5 shadow-2xl">
            <div class="text-3xl font-[Haas] font-bold">Founded by Belay Taye</div>
            <div class="text-brand-500 font-bold uppercase text-sm font-[Switzer] -mt-4">Who We Are</div>
            <div class="text-gray-400 text-lg leading-relaxed font-[Switzer] flex flex-col gap-4 mt-2">
              <p>Founded by <strong>Belay Taye</strong>, Aliya Construction PLC was established to participate in Ethiopia’s expanding construction industry and provide dependable building solutions for both public and private sector projects.</p>
              <p>The company is registered and licensed under Ethiopian regulations and continues to grow through experience, professional management, and practical execution. Today, our team includes engineers, project managers, financial professionals, and skilled construction personnel working together to ensure successful project delivery.</p>
            </div>
            <button class="w-fit mt-4 px-6 py-3 bg-white text-black font-[Switzer] font-bold rounded-full hover:bg-gray-200 transition-colors">Download Company Profile</button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col gap-4 p-8 bg-black rounded-3xl border border-white/10 relative overflow-hidden group">
            <div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 mb-2 transform group-hover:scale-110 transition-transform">
              <div class="w-4 h-4 bg-brand-500 rounded-full"></div>
            </div>
            <div class="text-2xl font-[Haas] font-bold text-white">Our Vision</div>
            <div class="text-gray-400 text-base leading-relaxed font-[Switzer]">To become a leading construction company recognized for integrity, excellence, and delivering results beyond client expectations.</div>
          </div>
          <div class="flex flex-col gap-4 p-8 bg-black rounded-3xl border border-white/10 relative overflow-hidden group">
            <div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 mb-2 transform group-hover:scale-110 transition-transform">
              <div class="w-4 h-4 bg-brand-500 rounded-md rotate-45"></div>
            </div>
            <div class="text-2xl font-[Haas] font-bold text-white">Our Mission</div>
            <div class="text-gray-400 text-base leading-relaxed font-[Switzer]">To provide quality construction services through competitive pricing, safe working environments, efficient project management, and timely project completion.</div>
          </div>
          <div class="flex flex-col gap-4 p-8 bg-brand-900 rounded-3xl border border-brand-500/30 relative overflow-hidden">
            <div class="text-2xl font-[Haas] font-bold text-white mb-2">Our Commitment</div>
            <div class="text-white/80 text-base leading-relaxed font-[Switzer]">At Aliya Construction PLC, we believe construction is more than completing structures. Every project represents responsibility, planning, and long-term value. We remain committed to delivering dependable construction solutions that support growth and development across Ethiopia.</div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row gap-15 bg-gray-900 rounded-3xl p-10 lg:p-16 border border-white/5">
          <div class="lg:w-1/2 flex flex-col gap-6">
            <div class="text-[clamp(30px,3vw,45px)] font-[Haas] font-bold">What We Do</div>
            <div class="text-gray-400 text-lg leading-relaxed font-[Switzer]">Aliya Construction PLC delivers construction services across multiple sectors:</div>
            <ul class="flex flex-col gap-3 mt-2 font-[Switzer] text-white/90">
              <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-brand-500"></span>Residential Buildings & Apartments</li>
              <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-brand-500"></span>Commercial Buildings & Facilities</li>
              <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-brand-500"></span>Institutional Projects & Schools</li>
              <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-brand-500"></span>Warehouses and Industrial Complexes</li>
              <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-brand-500"></span>Mixed-use Developments</li>
            </ul>
          </div>
          <div class="lg:w-1/2 flex flex-col gap-6 lg:pl-10 lg:border-l border-white/10">
            <div class="text-[clamp(30px,3vw,45px)] font-[Haas] font-bold">Our Approach</div>
            <div class="text-gray-400 text-lg leading-relaxed font-[Switzer]">We follow a structured project delivery process that focuses on planning, supervision, and quality assurance.</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div class="bg-black p-4 rounded-xl text-sm font-[Switzer] text-white/80 border border-white/5">Detailed project scheduling</div>
              <div class="bg-black p-4 rounded-xl text-sm font-[Switzer] text-white/80 border border-white/5">Resource & manpower planning</div>
              <div class="bg-black p-4 rounded-xl text-sm font-[Switzer] text-white/80 border border-white/5">Site supervision & control</div>
              <div class="bg-black p-4 rounded-xl text-sm font-[Switzer] text-white/80 border border-white/5">Continuous monitoring</div>
              <div class="bg-black p-4 rounded-xl text-sm font-[Switzer] text-white/80 border border-white/5">Coordination with stakeholders</div>
              <div class="bg-brand-600 p-4 rounded-xl text-sm font-[Switzer] font-bold text-white shadow-lg">Timely delivery & handover</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Capabilities & Machinery Section -->
    <div class="w-full bg-gray-900 py-30 px-5 flex flex-col items-center">
      <div class="w-full max-w-7xl flex flex-col gap-15">
        <div class="flex flex-col gap-4 text-center items-center">
          <div class="text-brand-500 font-[Switzer] text-sm font-bold uppercase">Scalable Logistics</div>
          <div class="text-[clamp(40px,5vw,70px)] font-[Haas] font-bold">Workforce & Equipment</div>
          <div class="text-gray-400 text-lg font-[Switzer] max-w-2xl">Backed by a systematically organized workforce and a comprehensive fleet of heavy-duty construction machinery ensuring full execution self-reliance.</div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="flex flex-col gap-6 p-10 bg-gray-950 rounded-3xl border border-white/5 shadow-2xl hover:border-brand-500/30 transition-colors">
            <div class="text-3xl font-[Haas55] font-bold text-white">Our Staff (34+ Core Team)</div>
            <div class="text-gray-400 font-[Switzer] text-lg leading-relaxed flex flex-col gap-4">
              <p>We boast a foundational team of highly skilled <strong>Civil Engineers, Building Engineers, and Construction Managers</strong>. The engineering core includes <strong>Senait Fiseha</strong> and <strong>Feven Zewdie</strong> managing central office operations, supported natively by active site engineers including <strong>Sosina Mamo</strong>, <strong>Yoseph Fisseha</strong>, <strong>Anwar Mohammed</strong>, <strong>Natnael Markos</strong>, and <strong>Tekaligne Mengesha</strong>.</p>
              <p>Additionally, our administrative logistics are overseen gracefully by <strong>Hana Messele</strong> and <strong>Ashebir Taye</strong>.</p>
            </div>
          </div>

          <div class="flex flex-col gap-6 p-10 bg-gray-950 rounded-3xl border border-white/5 shadow-2xl hover:border-brand-500/30 transition-colors">
            <div class="text-3xl font-[Haas55] font-bold text-white">Heavy Machinery Fleet</div>
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
              <div class="text-gray-400 font-[Switzer] font-bold text-sm uppercase mt-2">{{ leader.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <HomeFooter />
  </div>
</template>
