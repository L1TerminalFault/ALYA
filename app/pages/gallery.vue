<script setup lang="ts">
  useHead({ title: "Site Gallery" });
  const images = [
    // "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg",
    // "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/building-new-concrete-house_1398-2995.jpg",
    // "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg",
    // "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.04-AM-1024x576.jpeg",
    // "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/unnamed-4-1.jpg",
    // "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg",
    // "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.04-AM-1024x576.jpeg",
    // "https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about1.png"
    "/pal2.jpeg",
    "/pal3.jpeg",
    "/pal4.jpeg",
    "/pal5.jpeg",
    "/pal6.jpeg",
    "/pal7.jpeg",
    "/pal8.jpeg",
    "/pal9.jpeg",
    "/pal10.jpeg",
    "/pal11.jpeg",
    "/pal12.jpeg",
    "/pal13.jpeg",
    "/pal14.jpeg",
    "/pal15.jpeg",
    "/pal16.jpeg",
    "/pal17.jpeg",
    "/pal18.jpeg",
    "/pal19.jpeg",
    "/pal20.jpeg",
    "/pal21.jpeg",
    "/pal22.jpeg",
    "/pal23.jpeg",
    "/pal24.jpeg",
    "/pal26.jpeg",
    "/pal27.jpeg",
    "/pal28.jpeg",
    "/pal29.jpeg",
    "/pal30.jpeg",
    "/pal31.jpeg",
    "/pal32.jpeg",
    "/pal33.jpeg",
    "/pal34.jpeg",
    "/pal35.jpeg",
    "/pal36.jpeg",
    "/pal37.jpeg",
    "/pal38.jpeg",
    "/pal39.jpeg",
  ];
</script>
<template>
  <div
    class="flex min-h-screen w-full flex-col items-center bg-gray-950 text-white"
  >
    <PageHeader
      title="Site Gallery"
      subtitle="A visual journey through our active and completed enterprise builds."
      bgImage="https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about2.png"
    />

    <div class="w-full max-w-[1400px] px-5 py-30">
      <div class="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="group relative cursor-zoom-in break-inside-avoid overflow-hidden rounded-2xl border border-white/5"
        >
          <img
            :src="img"
            class="h-auto w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div
            class="bg-brand-900/40 absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
          ></div>
        </div>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>
