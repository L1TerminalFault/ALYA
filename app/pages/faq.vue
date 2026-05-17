<script setup lang="ts">
useHead({ title: "FAQ" });
</script>
<template>
  <div class="w-full bg-white text-black flex flex-col items-center min-h-screen">
    <PageHeader title="FAQ" subtitle="Common questions regarding our services and operations." bgImage="https://images.unsplash.com/photo-1541888081622-44df0e104ae5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" />
    <div class="w-full max-w-7xl px-5 py-30">
      <HomeFaq />
    </div>
    <HomeFooter />
  </div>
</template>
