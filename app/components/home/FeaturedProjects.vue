<script setup lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMounted } from "vue";

  const projects = [
    {
      name: "Ariyo Learning Institute",
      location: "Bonga, Keffa",
      img: "/featuredp1.jpg",
    },
    {
      name: "BGI Ethiopia Maintenance",
      location: "Addis Ababa",
      img: "/featuredp2.jpg",
    },
    {
      name: "Wro Martha Mixed-Use",
      location: "Addis Ababa",
      img: "/featuredp3.jpg",
    },
  ];

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 100, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 70%",
        },
      }
    );
  });
</script>
<template>
  <div
    class="projects-section flex w-full flex-col items-center justify-center gap-15 bg-gray-950 px-5 py-30 text-white"
  >
    <div
      class="flex w-full max-w-7xl flex-col items-end justify-between gap-10 md:flex-row"
    >
      <div
        class="font-[Haas] text-4xl leading-[1.1] font-bold lg:text-[70px]"
      >
        Featured<br />Projects
      </div>
      <NuxtLink
        to="/work"
        class="group text-brand-500 border-brand-500 flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border px-6 py-3 font-bold transition-colors hover:border-white hover:text-white"
      >
        <span class="mt-1 font-[Switzer] text-[15px] uppercase"
          >Explore Portfolio</span
        >
        <img
          src="/arrow.svg"
          class="w-4 transition-transform group-hover:translate-x-1"
          style="filter: invert(1)"
        />
      </NuxtLink>
    </div>

    <div
      class="mt-12 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <NuxtLink
        v-for="(project, i) in projects"
        :key="i"
        :to="'/projects/' + project.name.toLowerCase().replace(/ /g, '-')"
        class="project-card group relative block h-[500px] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/5"
      >
        <img
          :src="project.img"
          class="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        ></div>
        <div
          class="absolute bottom-0 left-0 flex w-full translate-y-4 flex-col gap-2 p-8 transition-transform duration-500 group-hover:translate-y-0"
        >
          <div class="flex w-full items-center justify-between">
            <div
              class="text-brand-500 font-[Switzer] text-sm font-bold uppercase"
            >
              {{ project.location }}
            </div>
            <div
              class="flex size-10 items-center justify-center overflow-hidden rounded-full border border-white/20 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100"
            >
              <img src="/arrow.svg" class="w-3 rotate-45 invert" />
            </div>
          </div>
          <div
            class="-mt-1 pr-4 font-[Haas55] text-3xl leading-tight font-bold text-white"
          >
            {{ project.name }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
