<script setup lang="ts">
  import { ref } from 'vue';
  useHead({ title: "Site Gallery" });
  const images = [
    "/pal2.jpeg",
    "/test3.jpg",
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

  const selectedImage = ref<string | null>(null);
  const openModal = (img: string) => {
    selectedImage.value = img;
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    selectedImage.value = null;
    document.body.style.overflow = '';
  };
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
          @click="openModal(img)"
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

    <!-- Image Modal -->
    <div 
      v-if="selectedImage" 
      class="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/90 backdrop-blur-sm p-5 cursor-zoom-out"
      @click="closeModal"
    >
      <NuxtImg :src="selectedImage" :placeholder="1" class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" @click.stop />
      
      <button 
        @click="closeModal"
        class="absolute top-10 right-10 text-white hover:text-red-500 transition-colors p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>
