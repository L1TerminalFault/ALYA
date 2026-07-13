<script lang="ts" setup>
  import gsap from "gsap";
  import { SplitText } from "gsap/all";
  import { ref, onMounted, onUnmounted } from "vue";

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
        defaults: { ease: "expo.out" },
      });

      tl.fromTo(
        ".hero-bg-img",
        { scale: 1.05, filter: "brightness(0.3)" },
        {
          scale: 1,
          filter: "brightness(0.55)",
          duration: 2.5,
          ease: "power2.out",
        }
      )
        .fromTo(
          ".cutbwu",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=1.5"
        )
        .from(
          splitedText1.chars,
          {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.02,
            duration: 1.2,
            transformOrigin: "50% 50% -50",
          },
          "-=1.2"
        )
        .from(
          charssplit.lines,
          {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            stagger: 0.1,
            duration: 1,
          },
          "-=0.8"
        )
        .from(
          ".heroheader .animated-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        );

      // Mouse Parallax effect (FIXED: Only targeting the background image now)
      if (root.value && heroBg.value) {
        root.value.addEventListener("mousemove", (e) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 50;
          const y = (e.clientY / window.innerHeight - 0.5) * 50;
          gsap.to(".hero-bg-img", {
            x: -x,
            y: -y,
            duration: 2.5,
            ease: "power2.out",
          });
        });
      }
    }, root.value);
  });

  onUnmounted(() => {
    ctx?.revert();
  });
</script>

<template>
  <div
    ref="root"
    class="fixed top-0 z-0 flex aspect-8/7 h-screen w-full max-w-svw justify-center overflow-visible lg:p-5"
    style="perspective: 1000px;"
  >
    <div
      class="pointer-events-none absolute inset-0 -top-[12.5%] -left-[7.5%] z-0 h-[115%] w-[115%]"
    >
      <img
        ref="heroBg"
        src="/hero.png"
        class="hero-bg-img saturate-200 h-full w-full rounded-xl border border-gray-800 object-cover shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"
      />
    </div>

    <div
      class="pointer-events-none relative z-20 flex aspect-video h-full w-full justify-center pt-20"
      style="transform-style: preserve-3d;"
    >
      <div
        class="heroheader safari-layering-fix w-full flex flex-col items-center pointer-events-auto gap-3 p-6 text-black opacity-0 lg:gap-8"
      >
        <div class="cutbwu">
          <NuxtLink
            to="/contact"
            class="group bg-brand-600 border-brand-500 hover:bg-brand-500 flex cursor-pointer items-center gap-2.75 rounded-full border px-4 py-1.5 shadow-xl transition-colors"
          >
            <div class="light text-xs font-light text-white md:text-sm">
              contact us to build with us
            </div>
            <NuxtImg
              src="/arrow.svg"
              :placeholder="1"
              class="bounce-back w-4 shrink-0 invert transition-all group-hover:ml-3.5"
            />
          </NuxtLink>
        </div>

        <div class="perspective-container hero-text-large">
          <span class="spt text-nowrap italic drop-shadow-2xl">
            WE DO WHAT IS RIGHT,
          </span>
          <span class="spt text-nowrap italic drop-shadow-2xl">NOT WHAT IS EASY!</span>
        </div>
        
        <div
          class="cpt fluid-subtext text-center text-white italic drop-shadow-xl"
        >
          Creating spaces with purpose
        </div>

        <NuxtLink
          to="/contact"
          class="animated-cta"
        >
          <AnimatedCtaBtn
            text="Get Started"
            class="z-0 bg-white"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
  @reference "tailwindcss";

  /* FIXED: Direct Safari Layer Elevation Hack */
  .safari-layering-fix {
    position: relative;
    z-index: 50;
    -webkit-transform: translateZ(50px);
    transform: translateZ(50px);
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
  }

  .fluid-subtext {
    @apply text-lg leading-6.5 text-[#E7E7E7] lg:max-w-160 lg:text-3xl;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  .hero-text-large {
    @apply flex w-full flex-col items-center justify-center text-center leading-[1.1] font-black;
    font-size: clamp(30px, 5vw, 160px);
    color: white;
  }

  .bounce-back {
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .perspective-container {
    perspective: 1000px;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
  }

  :deep(.spt) {
    display: inline-block;
    overflow: visible !important;
    padding-bottom: 0.05em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
</style>
