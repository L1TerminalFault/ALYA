<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

const steps = [
  { id: "01", title: "Project Scheduling", desc: "Detailed building scheduling paired with structured resource and manpower planning." },
  { id: "02", title: "Quality Supervision", desc: "Persistent site supervision inextricably combined with absolute quality control frameworks." },
  { id: "03", title: "Progress Coordination", desc: "Continuous execution monitoring and strict alignment with core client stakeholders." },
  { id: "04", title: "Project Handover", desc: "Methodical execution leading directly to timely project delivery and rigorous handover." },
];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".process-step",
    { opacity: 0, x: -30 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".process-section",
        start: "top 60%",
      },
    }
  );
  
  gsap.fromTo(
    ".process-line",
    { scaleY: 0 },
    {
      scaleY: 1,
      duration: 1.5,
      ease: "power2.inOut",
      transformOrigin: "top",
      scrollTrigger: {
        trigger: ".process-section",
        start: "top 60%",
      },
    }
  );
});
</script>

<template>
  <div class="process-section w-full bg-white py-30 text-black flex flex-col items-center justify-center px-5">
    <div class="w-full max-w-7xl flex flex-col lg:flex-row gap-20">
      
      <div class="flex flex-col gap-6 w-full lg:w-1/3">
        <div class="text-brand-600 font-[Switzer] text-lg uppercase tracking-widest font-bold">How We Work</div>
        <div class="text-[clamp(40px,5vw,70px)] font-[Haas] font-bold leading-[0.9] tracking-tighter">
          Our Proven<br>Methodology
        </div>
        <div class="text-gray-600 font-[Switzer] text-xl leading-relaxed mt-4">
          A systematic, phased approach ensures that every project is delivered on time, within budget, and to our strict quality protocols.
        </div>
      </div>

      <div class="w-full lg:w-2/3 relative flex flex-col gap-12 lg:pl-10">
        <!-- Vertical guide line -->
        <div class="process-line absolute left-0 lg:left-10 top-2 bottom-4 w-1 bg-gray-200 hidden md:block"></div>
        <div class="process-line absolute left-0 lg:left-10 top-2 bottom-4 w-1 bg-brand-600 hidden md:block opacity-30"></div>
        
        <div v-for="(step, i) in steps" :key="i" class="process-step relative flex flex-col md:flex-row gap-6 md:gap-14 lg:pl-16">
          <div class="absolute -left-[5px] lg:left-[35px] top-1 size-3.5 bg-brand-600 rounded-full border-2 border-white hidden md:block z-10"></div>
          
          <div class="text-3xl font-[Haas] font-bold text-gray-300 md:w-20 shrink-0">{{ step.id }}</div>
          <div class="flex flex-col gap-3">
            <div class="text-2xl font-[Haas75] font-bold text-gray-950">{{ step.title }}</div>
            <div class="text-gray-600 font-[Switzer] text-lg leading-snug">{{ step.desc }}</div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
