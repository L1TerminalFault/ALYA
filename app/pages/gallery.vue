<script setup lang="ts">
  import { ref } from "vue";
  useHead({ title: "Site Gallery" });
  const images = [
    "/pal2.jpeg",
    "/pal1.jpg",
    "/test3.jpg",
    "/pal4.jpeg",
    "/pal5.jpeg",
    "/pal6.jpeg",
    "/pal7.jpeg",
    // "/pal8.jpeg",
    // "/pal9.jpeg",
    "/pal10.jpeg",
    "/pal39.jpeg",
    // "/pal11.jpeg",
    "/pal12.jpeg",
    // "/pal13.jpeg",
    // "/pal14.jpg",
    // "/pal15.jpeg",
    // "/pal16.jpg",
    "/pal17.jpg",
    "/pal18.jpeg",
    "/pal19.jpg",
    // "/pal20.jpeg",
    // "/pal21.jpeg",
    // "/pal22.jpeg",
    // "/pal23.jpeg",
    // "/pal24.jpeg",
    // "/pal26.jpeg",
    // "/pal27.jpeg",
    // "/pal28.jpeg",
    // "/pal28.jpeg",
    "/pal30.jpeg",
    "/pal31.jpeg",
    "/pal32.jpeg",
    "/pal33.jpeg",
    "/pal34.jpeg",
    "/pal35.jpeg",
    "/pal36.jpeg",
    "/pal37.jpeg",
    // "/pal38.jpeg",
    "/pal39.jpg",
    "/pal40.jpg",
    "/pal41.jpg",
    "/pal42.jpg",
    "/pal43.jpg",
    "/pal44.jpg",
    "/pal45.jpg",
    "/pal46.jpg",
  ];

  const selectedImage = ref<string | null>(null);
  const openModal = (img: string) => {
    selectedImage.value = img;
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    selectedImage.value = null;
    document.body.style.overflow = "";
  };
</script>
<template>
  <div
    class="flex min-h-screen w-full flex-col items-center bg-gray-950 text-white"
  >
    <PageHeader
      title="Site Gallery"
      subtitle="A visual journey through our active and completed enterprise builds."
      bg-image="https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about2.png"
    />

    <div class="w-full max-w-350 px-5 py-30">
      <div class="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="group relative cursor-zoom-in break-inside-avoid overflow-hidden rounded-2xl border border-white/5"
          @click="openModal(img)"
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
      class="fixed inset-0 z-100 flex cursor-zoom-out items-center justify-center bg-gray-950/90 p-5 backdrop-blur-sm"
      @click="closeModal"
    >
      <NuxtImg
        :src="selectedImage"
        :placeholder="1"
        class="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
        @click.stop
      />

      <button
        class="absolute top-10 right-10 p-2 text-white transition-colors hover:text-red-500"
        @click="closeModal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
