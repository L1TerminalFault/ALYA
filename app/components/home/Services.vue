<script setup lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMounted } from "vue";

  const services = [
    {
      title: "Pre-Construction",
      desc: "Design-build planning and risk management.",
      img: "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg",
    },
    {
      title: "General Contracting",
      desc: "Full-scale project execution with expert logistics.",
      img: "/palette.jpg",
    },
    {
      title: "Civil Infrastructure",
      desc: "High-level civil engineering solutions.",
      img: "/palettesecond.jpg",
    },
  ];

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".svc-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".offer-section", start: "top 70%" },
      }
    );
  });
</script>

<template>
  <div
    class="offer-section flex w-full flex-col items-center justify-center bg-[#f8f8f8] p-5 py-30 text-black"
  >
    <div class="flex w-full max-w-7xl flex-col items-center gap-15">
      <div class="flex max-w-3xl flex-col items-center gap-4 text-center">
        <div
          class="text-brand-600 font-[Switzer] text-sm font-bold tracking-widest uppercase"
        >
          What We Offer
        </div>
        <div
          class="font-[Haas] text-[clamp(40px,5vw,70px)] leading-none font-bold tracking-tighter"
        >
          Enterprise Solutions
        </div>
        <div class="mt-2 font-[Switzer] text-xl leading-relaxed text-gray-600">
          From sourcing through to last-mile delivery, we manage complex supply
          chains with precision and reliability.
        </div>
      </div>

      <div class="mt-10 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        <NuxtLink
          v-for="(svc, i) in services"
          :key="i"
          to="/services"
          class="svc-card group relative block h-[500px] cursor-pointer overflow-hidden rounded-3xl border border-gray-200 shadow-xl"
        >
          <img
            :src="svc.img"
            class="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
          ></div>
          <div
            class="absolute bottom-0 left-0 flex w-full translate-y-4 flex-col gap-2 p-8 transition-transform duration-500 group-hover:translate-y-0"
          >
            <div
              class="font-[Haas55] text-2xl leading-tight font-bold text-white drop-shadow-md"
            >
              {{ svc.title }}
            </div>
            <div
              class="font-[Switzer] text-sm text-gray-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              {{ svc.desc }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
