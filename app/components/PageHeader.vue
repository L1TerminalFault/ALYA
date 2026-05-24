<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";
import { SplitText } from "gsap/SplitText";

const props = defineProps({
  title: String,
  subtitle: String,
  bgImage: { type: String, default: "/hero1.jpg" }
});

onMounted(() => {
  gsap.registerPlugin(SplitText);
  const spl = new SplitText(".page-title", { type: "words,chars" });
  gsap.fromTo(spl.chars, 
    { opacity: 0, y: 50, rotateX: -90 },
    { opacity: 1, y: 0, rotateX: 0, stagger: 0.02, duration: 1, ease: "expo.out", delay: 0.2 }
  );
  gsap.fromTo(".page-subtitle", 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power2.out" }
  );
});
</script>
<template>
  <div class="relative w-full h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gray-950 z-0">
      <img :src="bgImage" class="w-full h-full object-cover opacity-40 mix-blend-overlay" />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
    </div>
    <div class="relative z-10 flex flex-col items-center text-center gap-4 px-5 pt-20">
      <div class="page-title text-[clamp(45px,6vw,90px)] /font-[Haas] font-bold text-white leading-[1.1] uppercase" style="perspective: 1000px">
        {{ title }}
      </div>
      <div class="page-subtitle text-gray-300 /font-[Switzer] text-xl max-w-2xl mt-4">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>
