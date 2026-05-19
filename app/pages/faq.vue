<script setup lang="ts">
useHead({ title: "FAQ" });
</script>
<template>
  <div class="w-full bg-white text-black flex flex-col items-center min-h-screen">
    <PageHeader title="FAQ" subtitle="Common questions regarding our services and operations." bgImage="https://images.unsplash.com/photo-1541888081622-44df0e104ae5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" />
    <div class="w-full max-w-7xl px-5 py-30 flex flex-col gap-10">
      <!-- Added verbose component via palette-like block -->
      <div class="flex flex-col gap-6 p-10 bg-gray-50 rounded-3xl border border-gray-200 shadow-sm max-w-4xl mx-auto text-center">
        <div class="text-3xl font-[Haas] font-bold">Trust & Legal Standing</div>
        <div class="text-gray-600 font-[Switzer] text-lg leading-relaxed">
          Through years of intensive civil engineering, enterprise building construction and continuous operational expansion, we have maintained a pristine track record. <strong>Since its establishment, ALIYA Construction PLC has not been involved in any kind of legal disputes or litigation</strong>. We build on rigorous quality, total transparent communication, and absolute safety to ensure long-term harmony with clients, governments, and sub-contractors.
        </div>
      </div>
      
      <HomeFaq />
    </div>
    <HomeFooter />
  </div>
</template>
