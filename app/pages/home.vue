<script setup lang="tsx">
  import gsap from "gsap";
  import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
  import { ref, onMounted, nextTick } from "vue";

  useHead({
    title: "Home",
  });

  const animate = ref(false);
  const showIntro = ref(true);

  onMounted(async () => {
    gsap.registerPlugin(DrawSVGPlugin);

    await nextTick();
    // Delay a bit so transition applies
    setTimeout(() => {
      animate.value = true;
      gsap.fromTo(
        ".cls-1, .cls-2, .cls-3",
        { drawSVG: "0%" },
        {
          drawSVG: "100%",
          duration: 3.2,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(".cls-1", {
              fill: "#eb2629",
              stroke: "transparent",
              duration: 0.4,
            });
            gsap.to(".cls-2", {
              fill: "#000",
              stroke: "transparent",
              duration: 0.4,
            });
            gsap.to(".cls-3", {
              fill: "#ed1c24",
              stroke: "transparent",
              duration: 0.4,
            });
          },
        }
      );
    }, 100);

    setTimeout(() => {
      showIntro.value = false;
    }, 4000);
  });
</script>

<template>
  <div
    class="flex h-max w-full flex-col items-center justify-center overflow-x-clip bg-gray-950 text-gray-50"
  >
    <!-- Intro Overlay -->
    <div
      :class="
        showIntro
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      "
      class="fixed inset-0 z-[9999] flex h-svh w-svw items-center justify-center gap-6 bg-white transition-opacity duration-1000 ease-in-out"
    >
      <div
        :class="animate ? 'scale-100 opacity-100' : 'scale-200 opacity-0'"
        class="flex items-center justify-center gap-6 transition-all duration-1500"
      >
        <svg
          id="Layer_6"
          data-name="Layer 6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 238.56 205.68"
          class="size-30"
        >
          <defs></defs>
          <polyline
            class="cls-3"
            points="187.66 120.15 168.3 120.15 108.87 17.84 118.68 1.04 187.66 120.15"
          />
          <g>
            <path
              class="cls-2"
              d="m46.52,124.65l22.95,41.52h-19.78l-2.75-5.22h-9.55l-8.41-.03-1.42-.03-1.88,3.49c-.46.87-1.03,1.79-1.03,1.79h-1.88s-.04-.2-.04-.31c0-.25.19-.71.56-1.39.37-.67,1.67-2.9,3.9-6.66l19.35-33.16m-8.73,18.99l-4.98,8.39-3.98,6.9,8.5.12,8.54-.12-8.07-15.29Z"
            />
            <path
              class="cls-2"
              d="m89.61,127.23l-.11,5.96-.11,9.5.03,6.94.12,14.68,2.05.03,12.19-.2,2.22-.03c1.12,0,1.68.34,1.68,1.02,0,.59-.3.92-.91.98-.13.01-.57.04-1.31.05h-33.37l.08-10.84.06-6.64.05-7.54-.11-11.46.03-2.46h17.43"
            />
            <polyline
              class="cls-2"
              points="128.6 127.23 128.6 129.23 128.43 144.87 128.6 166.17 111.14 166.17 111.31 142.87 111.12 128.63 111.14 127.23 128.6 127.23"
            />
            <path
              class="cls-2"
              d="m169.52,127.23h2.48l-23.06,38.93h-1.88s-.27-.22-.13-.54c.22-.5,3.94-6.67,3.94-6.67l-18.32-31.73h19.38l8.82,14.93,8.78-14.93"
            />
            <path
              class="cls-2"
              d="m76.69,119.34c0-3.99,2.79-10.4,8.35-19.22.11-.14,3.64-5.14,10.57-14.96l-6.23.75c-.46.05-.84.08-1.15.08-1.81,0-2.84-1.2-3.11-3.59v.03s0-.08,0-.08v.05c.06-.26.09-3.5.09-9.71,0-1.41-.41-2.27-1.22-2.58l5.18-.61c1.67-.3,3.06-.45,4.17-.45.65,0,1.23.05,1.74.15.77.15,1.22.73,1.37,1.74.05.25.07,1.27.07,3.04v10.04l10.95-1.15c-.1.15-3.01,4.6-8.74,13.37l8.96-1.67c1.52-.31,2.56-.46,3.11-.46,2.94,0,5.02,2.23,6.23,6.7.41,1.42.84,3.9,1.28,7.44.36,2.9.72,5.78,1.08,8.66.2,1.33.47,2.39.83,3.24h27.66l-49.25-84.78-49.49,84.78h27.62c-.05-.25-.08-.52-.08-.81"
            />
          </g>
          <path
            class="cls-1"
            d="m190.71,125.01s-22.95,38.79-23.33,39.46c-.37.68-.56,1.39-.56,1.39,0,.12.2.32.2.32h1.72s2.91-5.29,2.91-5.29l1.42.03,8.41.03h10.52l13.07,22.5-192.9.05-10,17.12,232.34-.23-43.8-75.39m-9.27,34.03l-8.51-.12,3.99-6.9,4.99-8.46,8.93,15.37-9.4.11Z"
          />
        </svg>
        <!-- <img src="/logo.png" class="size-30" /> -->
        <div
          :class="
            animate
              ? 'blur-0 max-w-100 opacity-100'
              : 'max-w-0 opacity-0 blur-xl'
          "
          class="whole-text overflow-hidden font-[Inter] text-8xl font-bold text-nowrap text-black transition-all delay-1300 duration-1000"
        >
          <span
            :class="animate ? 'text-brand-600 text-shadow-lg' : 'text-black'"
            class="transition-all delay-2700 duration-1000"
            >ALIYA</span
          >
          <span
            :class="
              animate ? 'text-4xl text-black/75' : 'text-[80px] text-black'
            "
            class="span-text pt-3 transition-all delay-2700 duration-700"
            >Co.</span
          >
        </div>
      </div>
    </div>

    <HomeHero />
    <div
      class="/bg-black/5 /p-140 pointer-events-none aspect-8/7 h-auto w-full"
    ></div>
    <div
      class="relative z-10 flex h-max w-full flex-col items-center justify-center shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      <!-- Alternating sections tightly stacked -->
      <div class="w-full bg-gray-950"><HomeCommitment /></div>
      <div class="w-full bg-white"><HomeProcessTimeline /></div>
      <div class="w-full bg-gray-950"><HomeStats /></div>
      <div class="w-full bg-[#f8f8f8]"><HomeServices /></div>
      <div class="w-full bg-gray-950"><HomeInnovation /></div>
      <div class="w-full bg-white"><HomeFaq /></div>
      <div class="w-full bg-gray-950 py-20"><HomeTestimonials /></div>
      <div class="w-full bg-gray-950"><HomeSafetyCertifications /></div>
      <div class="w-full bg-gray-950"><HomePartners /></div>
      <div class="w-full bg-gray-950"><HomeFeaturedProjects /></div>
      <div class="w-full bg-white"><HomeFooter /></div>
    </div>
  </div>
</template>

<style>
  .cls-1 {
    fill: transparent;
    stroke: #eb2629;
    stroke-width: 2px;
  }

  .cls-2 {
    fill: transparent;
    stroke: #000;
    stroke-width: 2px;
  }

  .cls-3 {
    fill: transparent;
    stroke: #ed1c24;
    stroke-width: 2px;
  }
</style>
