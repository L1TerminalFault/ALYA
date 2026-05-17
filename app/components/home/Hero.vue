<script lang="ts" setup>
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ref, onMounted, onUnmounted } from "vue";
import AnimatedCtaBtn from "../AnimatedCtaBtn.vue";

const root = ref<HTMLElement | null>(null);
const heroBg = ref<HTMLElement | null>(null);
let ctx: gsap.Context;

onMounted(async () => {
  if (!root.value) return;
  ctx = gsap.context(() => {
    gsap.registerPlugin(SplitText);

    const splitedText1 = new SplitText(".spt", { type: "words,chars" });
    const charssplit = new SplitText(".cpt", { type: "lines" });

    gsap.set(".heroheader", { opacity: 1 });

    const tl = gsap.timeline({
      defaults: { ease: "expo.out" }
    });

    tl.fromTo(".hero-bg-img",
      { scale: 1.15, filter: "brightness(0.3)" },
      { scale: 1.05, filter: "brightness(0.55)", duration: 2.5, ease: "power2.out" }
    )
    .fromTo(".cutbwu",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=1.5"
    )
    .from(splitedText1.chars, {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.02,
      duration: 1.2,
      transformOrigin: "50% 50% -50",
    }, "-=1.2")
    .from(charssplit.lines, {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      stagger: 0.1,
      duration: 1,
    }, "-=0.8")
    .from(".heroheader .animated-cta", {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, "-=0.6");

    // Mouse Parallax effect
    if(root.value && heroBg.value) {
      root.value.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 50; 
        const y = (e.clientY / window.innerHeight - 0.5) * 50;
        gsap.to(".hero-bg-img", {
          x, y,
          duration: 1.5,
          ease: "power2.out"
        });
      });
    }

  }, root.value);
});

onUnmounted(() => {
  ctx?.revert();
})
</script>

<template>
  <div ref="root" class="fixed top-0 z-0 flex aspect-8/7 h-screen w-full justify-center overflow-visible lg:p-5">
    
    <div class="absolute inset-0 z-0 h-[115%] w-[115%] -top-[7.5%] -left-[7.5%] pointer-events-none">
      <img ref="heroBg" src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=2000" class="hero-bg-img h-full w-full object-cover rounded-xl shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] border border-gray-800" />
    </div>

    <!-- Content -->
    <div class="relative z-20 flex aspect-video h-full w-full justify-center pt-20 pointer-events-none">
      <div class="heroheader flex-col-center gap-3 p-6 text-black opacity-0 lg:gap-8 pointer-events-auto">
        <div class="cutbwu">
          <NuxtLink to="/contact"
            class="group flex cursor-pointer items-center gap-2.75 rounded-full bg-brand-600 border border-brand-500 hover:bg-brand-500 transition-colors px-4 py-1.5 shadow-xl">
            <div class="light font-Giest text-[20px]! tracking-tighter font-light md:text-[22px] text-white pt-1">
              contact us to build with us
            </div>
            <img src="/arrow.svg" class="bounce-back w-4 shrink-0 transition-all group-hover:ml-3.5 invert" />
          </NuxtLink>
        </div>

        <div class="perspective-container hero-text-large">
          <span class="spt text-nowrap drop-shadow-2xl">CREATING SPACES</span>
          <span class="spt text-nowrap drop-shadow-2xl">WITH PURPOSE</span>
        </div>

        <div class="cpt font-Geist text-center fluid-subtext drop-shadow-xl text-white">
          We build for a better future, not just for the sake of doing so.
        </div>
        
        <AnimatedCtaBtn text="Get Started" class="animated-cta" />
      </div>
    </div>
  </div>
</template>

<style>
@reference "tailwindcss";

.fluid-subtext {
  @apply leading-6.5 tracking-tighter font-[Switzer] text-lg lg:text-3xl text-[#E7E7E7] lg:max-w-160;
}

.hero-text-large {
  @apply flex w-full min-w-75 flex-col items-center justify-center text-center leading-[85%] font-black;
  font-family: 'Haas', sans-serif;
  font-size: clamp(30px, 5.5vw, 160px);
  color: white;
}

.bounce-back {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.perspective-container {
  perspective: 1000px;
  transform-style: preserve-3d;
}

:deep(.spt) {
  display: inline-block;
  overflow: visible !important;
  padding-bottom: 0.05em;
}
</style>
