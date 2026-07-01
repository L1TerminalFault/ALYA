<script setup lang="tsx">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  const spl = new SplitText(".antext", { type: "lines" });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".antext",
      start: "top 70%",
    },
  });

  tl.fromTo(
    spl.lines,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "back",
    },
    "<"
  );
});
</script>

<template>
  <div
    class="/max-h-max /min-h-100 /lg:min-h-350 relative z-0 flex w-full flex-col items-center justify-center gap-7 bg-transparent pt-90 pb-20 text-white max-2xl:aspect-video">
    <div class="flex w-full -translate-y-32 flex-col items-center gap-4 lg:gap-20">
      <div class="absolute -bottom-20 left-0 z-30 h-full w-1/9 bg-linear-to-l from-transparent via-gray-950 to-gray-950">
      </div>
      <div class="absolute right-0 -bottom-20 z-30 h-full w-1/9 bg-linear-to-r from-transparent via-gray-950 to-gray-950">
      </div>
      <div
        class="antext flex max-w-70 flex-col text-center /font-[Switzer] text-[clamp(30px,5vw,76px)] leading-none font-bold lg:max-w-100">
        <span class="antext text-nowrap">Our Trusted</span>
        <span class="antext text-nowrap">Partners</span>
      </div>
      <div class="w-max flex gap-50 items-center justify-center overflow-scroll/">
      <div v-for="id in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" :key="id" class="anim flex flex-row gap-50 -translate-x-935 items-center justify-evenly overflow-hidden max-lg:h-10">
        <img src="/part1.png" class="" />
        <img src="/part2.png" class="" />
        <img src="/part3.png" class="" />
        <img src="/part4.png" class="" />
      </div>
      </div>
    </div>
  </div>
</template>

<style>
.anim {
  animation: scroll 50s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(1870px);
  }

  100% {
    transform: translateX(3740px);
  }
}
</style>
