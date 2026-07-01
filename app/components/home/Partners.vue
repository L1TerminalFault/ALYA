<script setup lang="tsx">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

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
  <div class="relative z-0 flex w-full flex-col items-center justify-center gap-7 bg-transparent pt-32 pb-20 text-white">
    <div class="flex w-full flex-col items-center gap-4 lg:gap-20">
      
      <div class="absolute top-0 bottom-0 left-0 z-30 w-1/12 bg-linear-to-l from-transparent to-gray-950 pointer-events-none"></div>
      <div class="absolute top-0 bottom-0 right-0 z-30 w-1/12 bg-linear-to-r from-transparent to-gray-950 pointer-events-none"></div>

      <div class="antext flex max-w-70 flex-col text-center text-[clamp(30px,5vw,76px)] leading-none font-bold lg:max-w-100">
        <span class="text-nowrap">Our Trusted</span>
        <span class="text-nowrap text-blue-400">Partners</span>
      </div>

      <div class="marquee-container w-full overflow-hidden flex whitespace-nowrap">
        <div class="marquee-track flex gap-16 items-center shrink-0 pr-16">
          <img src="/part1.png" alt="Partner 1" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part2.png" alt="Partner 2" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part3.png" alt="Partner 3" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part4.png" alt="Partner 4" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part1.png" alt="Partner 1" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part2.png" alt="Partner 2" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part3.png" alt="Partner 3" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part4.png" alt="Partner 4" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part1.png" alt="Partner 1" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part2.png" alt="Partner 2" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part3.png" alt="Partner 3" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part4.png" alt="Partner 4" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part1.png" alt="Partner 1" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part2.png" alt="Partner 2" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part3.png" alt="Partner 3" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part4.png" alt="Partner 4" class="h-12 lg:h-20 object-contain mx-4" />
        </div>
        
        <div class="marquee-track flex gap-16 items-center shrink-0 pr-16" aria-hidden="true">
          <img src="/part1.png" alt="Partner 1" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part2.png" alt="Partner 2" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part3.png" alt="Partner 3" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part4.png" alt="Partner 4" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part1.png" alt="Partner 1" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part2.png" alt="Partner 2" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part3.png" alt="Partner 3" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part4.png" alt="Partner 4" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part1.png" alt="Partner 1" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part2.png" alt="Partner 2" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part3.png" alt="Partner 3" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part4.png" alt="Partner 4" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part1.png" alt="Partner 1" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part2.png" alt="Partner 2" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part3.png" alt="Partner 3" class="h-12 lg:h-20 object-contain mx-4" />
          <img src="/part4.png" alt="Partner 4" class="h-12 lg:h-20 object-contain mx-4" />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.marquee-container {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-track {
  animation: scrollMarquee 10s linear infinite;
}

/* Pause animation on hover so users can look closer */
.marquee-container:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes scrollMarquee {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
