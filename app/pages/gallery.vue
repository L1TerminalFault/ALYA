<script setup lang="ts">
  import { ref } from "vue";
  useHead({ title: "Site Gallery" });
  const images = [
    "/pal1.jpg", // 1
    "/test3.jpg", // 2
    "/pal39.jpeg", // 3
    "/pal2.jpeg", // 4
    "/pal18.jpeg", // 32
    "/pal17.jpg", // 5
    "/pal40.jpg", // 6
    "/pal35.jpeg", // 7
    "/pal44.jpg", // 10
    "/pal46.jpg", // 11
    "/pal32.jpeg", // 13
    "/pal47.jpg", // 14
    "/pal50.jpg", // 15
    "/pal52.jpg", // 16
    "/pal48.jpg", // 17
    "/pal5.jpeg", // 18
    "/pal41.jpg", // 19
    "/pal10.jpeg", // 20
    "/pal19.jpg", // 21
    "/pal33.jpeg", // 22
    "/pal4.jpeg", // 23
    "/pal30.jpeg", // 8
    "/pal49.jpg", // 9
    "/pal42.jpg", // 12
    "/pal37.jpeg", // 24
    "/pal53.jpg", // 25
    "/pal51.jpg", // 26
    "/pal6.jpeg", // 27
    "/pal7.jpeg", // 28
    "/pal31.jpeg", // 29
    "/work14.jpg", // 30
    "/pal12.jpeg", // 31
    "/pal43.jpg", // 33
    "/pal34.jpeg", // 34
    "/pal36.jpeg", // 35
    "/pal39.jpg", // 36
    "/pal45.jpg", // 37
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
      <div class="grid grid-cols-1 grid-flow-row gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="group relative block h-125 w-full cursor-pointer overflow-hidden rounded-2xl"
          @click="openModal(img)"
        >
          <NuxtImg
            :src="img"
            :placeholder="1"
            class="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div
            class="bg-brand-900/40 absolute inset-0 text-4xl opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
	    >{{ i }}</div>
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
        class="inset-0 max-h-[80vh] max-w-[80vw] min-h-[60svh] min-w-[60svw] w-full h-full overflow-hidden rounded-lg object-contain shadow-2xl"
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
