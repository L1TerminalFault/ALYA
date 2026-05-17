<script setup lang="tsx">
useHead({
  title: "Home",
});
</script>

<template>
  <div class="flex h-max w-full flex-col items-center justify-center overflow-x-clip bg-gray-950 text-gray-50">
    <HomeHero />
    <div class="/bg-black/5 /p-140 aspect-8/7 h-auto w-full pointer-events-none"></div>
    <div class="z-10 flex h-max w-full flex-col items-center justify-center relative shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      
      <!-- Alternating sections tightly stacked -->
      <div class="w-full bg-gray-950"><HomeCommitment /></div>
      <div class="w-full bg-white"><HomeProcessTimeline /></div>
      <div class="w-full bg-gray-950"><HomeStats /></div>
      <div class="w-full bg-[#f8f8f8]"><HomeServices /></div>
      <div class="w-full bg-gray-950"><HomeInnovation /></div>
      <div class="w-full bg-white"><HomeFaq /></div>
      <div class="w-full bg-gray-950 py-20"><HomeTestimonials /></div>
      <div class="w-full bg-gray-950"><HomeSafetyCertifications /></div>
      <div class="w-full bg-gray-950"><HomePartners /></div>
      <div class="w-full bg-gray-950"><HomeFeaturedProjects /></div>
      <div class="w-full bg-white"><HomeFooter /></div>

    </div>
  </div>
</template>
