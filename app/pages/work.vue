<script setup lang="ts">
  useHead({ title: "Our Work" });

  const projects = [
    {
      id: "mixed-use-bg6-finishing-1",
      name: "Mixed-Use Building (B+G+6) Finishing Work",
      category: "Commercial",
      status: "Under Construction",
      client: "Ato Girma Amare & W/ro Martha Negash",
      value: "4,870,151.85",
      location: "Addis Ababa",
      img: "/work2.png",
    },
    {
      id: "residence-2bg3-senait",
      name: "Residence Building (2+B+G+3)",
      category: "Residential",
      status: "Completed",
      client: "W/ro Senait G/Gziabher",
      value: "6,464,859.31",
      location: "Addis Ababa",
      img: "/work3.png",
    },
    {
      id: "mixed-use-bg6-structural-1",
      name: "Mixed-Use Building (B+G+6) Structural Work",
      category: "Commercial",
      status: "Completed",
      client: "Ene W/ro Belay Tesfaye",
      value: "19,580,858.65",
      location: "Addis Ababa",
      img: "/work4.png",
    },
    {
      id: "residence-2bg3-ephrem",
      name: "Residence Building (2+B+G+3)",
      category: "Residential",
      status: "Completed",
      client: "Art. Ephrem Tamiru",
      value: "10,776,989.85",
      location: "Addis Ababa",
      img: "/work5.png",
    },
    {
      id: "mixed-use-bg5-etenesh",
      name: "Mixed-Use Building (B+G+5)",
      category: "Commercial",
      status: "Completed",
      client: "W/ro Etenesh Haile",
      value: "9,789,682.22",
      location: "Addis Ababa",
      img: "/work6.png",
    },
    {
      id: "mixed-use-bg6-structural-2",
      name: "Mixed-Use Building (B+G+6) Structural Work",
      category: "Commercial",
      status: "Completed",
      client: "Ato Girma Amare & W/ro Martha Negash",
      value: "8,008,878.53",
      location: "Addis Ababa",
      img: "/work7.png",
    },
    {
      id: "mixed-use-bg6-finishing-2",
      name: "Mixed-Use Building (B+G+6) Finishing Work",
      category: "Commercial",
      status: "Completed",
      client: "Ene Belay Tesfaye",
      value: "4,235,042.90",
      location: "Addis Ababa",
      img: "/work8.png",
    },
    {
      id: "residence-bg2-atnafu",
      name: "Residence Building (B+G+2)",
      category: "Residential",
      status: "Completed",
      client: "Dr. Atnafu Tola",
      value: "3,551,588.89",
      location: "Addis Ababa",
      img: "/work9.png",
    },
    {
      id: "mixed-use-bg5-misrak",
      name: "Mixed-Use Building (B+G+5)",
      category: "Commercial",
      status: "Completed",
      client: "W/ro Misrak Elias",
      value: "2,180,277.90",
      location: "Addis Ababa",
      img: "/work10.png",
    },
    {
      id: "apartment-g5-tigist",
      name: "Apartment Building Construction (G+5)",
      category: "Residential",
      status: "Completed",
      client: "Tigist Asefa",
      value: "2,165,583.40",
      location: "Addis Ababa",
      img: "/work11.png",
    },
    {
      id: "kera-store-maintenance",
      name: "Kera Store Maintenance Work",
      category: "Commercial",
      status: "Completed",
      client: "BGI Ethiopia PLC",
      value: "1,181,868.92",
      location: "Addis Ababa",
      img: "/work12.png",
    },
    // {
    //   id: "ariyo-catholic-phase-3",
    //   name: "Ariyo Catholic Learning Institute – 3rd Phase / Lot 1",
    //   category: "Institutional",
    //   status: "Under Construction",
    //   client: "Ethiopia Catholic Church Society of Jesus",
    //   value: "77,721,943.75",
    //   location: "Bonga, Keffa",
    //   img: "/pal1.jpeg",
    // },
    // {
    //   id: "ariyo-catholic-phase-2",
    //   name: "Ariyo Catholic Learning Institute – 2nd Phase",
    //   category: "Institutional",
    //   status: "Under Construction",
    //   client: "Ethiopia Catholic Church Society of Jesus",
    //   value: "189,181,324.57",
    //   location: "Bonga, Keffa",
    //   img: "/pal2.jpeg",
    // },
    {
      id: "ariyo-catholic-g1-residence",
      name: "Ariyo Catholic Learning Institute (G+1 Residence)",
      category: "Institutional",
      status: "Completed",
      client: "Ethiopia Catholic Church Society of Jesus",
      value: "28,476,075.52",
      location: "Bonga, Keffa",
      img: "/work1.png",
    },
  ];
</script>
<template>
  <div
    class="flex min-h-screen w-full flex-col items-center bg-gray-950 text-white"
  >
    <PageHeader
      title="Our Work"
      subtitle="A showcase of structural excellence and architectural innovation."
      bgImage="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg"
    />

    <div class="w-full max-w-7xl px-5 py-30">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="(project, i) in projects"
          :key="i"
          :to="'/projects/' + project.id"
          class="group relative block h-[500px] w-full cursor-pointer overflow-hidden rounded-2xl"
        >
          <img
            :src="project.img"
            class="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/70 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
          ></div>
          <div
            class="absolute bottom-0 left-0 flex w-full translate-y-18 flex-col gap-3 p-8 pb-10 transition-transform duration-500 group-hover:translate-y-0"
          >
            <div class="flex w-full items-center gap-0.5">
              <div
                class="text-brand-500 font-[Switzer] text-xs font-bold tracking-widest uppercase"
              >
                {{ project.category }} &middot; {{ project.location }}
              </div>
              <div
                class="px-2 py-1 font-[Switzer] text-[8px] tracking-wide text-nowrap uppercase italic opacity-90"
                :class="
                  project.status === 'Completed'
                    ? 'text-[#b0ffb090]'
                    : 'text-[#ffb0b0c5]'
                "
              >
                {{ project.status }}
              </div>
            </div>
            <div
              class="pr-4 font-[Haas55] text-2xl leading-tight font-bold text-white"
            >
              {{ project.name }}
            </div>
            <div
              class="mt-1 flex flex-col gap-1 text-sm text-white/70 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100"
            >
              <div class="flex items-start gap-2">
                <div class="min-w-[70px] text-white/40">Client:</div>
                <div class="font-medium text-white/90">
                  {{ project.client }}
                </div>
              </div>
              <!-- <div class="flex items-start gap-2"> -->
              <!--   <div class="min-w-[70px] text-white/40">Value:</div> -->
              <!--   <div class="text-brand-400 font-medium"> -->
              <!--     {{ project.value }} ETB -->
              <!--   </div> -->
              <!-- </div> -->
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>
