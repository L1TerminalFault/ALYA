<script setup lang="tsx">
  const animate = ref(false);

  onMounted(() => (animate.value = true));
</script>

<template>
  <div
    class="absolute top-0 z-20 flex w-full items-center justify-center font-[Inter]"
  >
    <div
      class="flex h-full w-full max-w-467.5 items-center justify-between p-3 md:p-5 md:px-8"
    >
      <NuxtLink
        to="/"
        class="flex items-center gap-2 transition-all duration-800 md:gap-3"
        :class="
          animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        "
      >
        <div
          class="flex flex-col justify-center font-[FontSpring] text-lg font-bold transition-all hover:scale-106 md:text-2xl"
        >
          <div>ALYA</div>
          <!-- <div>Construction</div> -->
        </div>
      </NuxtLink>

      <div
        :class="
          animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        "
        class="flex flex-1 items-center justify-center text-gray-900 transition-all duration-500"
      >
        <NavLinks />
      </div>

      <div class="flex h-full w-full items-center justify-end px-3 md:hidden">
        <TopSliderSheet />
      </div>

      <ActionBtn
        :class="
          animate ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        "
        class="bg-black p-2 px-2 text-xs text-nowrap text-white transition-all duration-500 hover:scale-101 md:px-4 md:text-sm"
        :call-back="() => {}"
      >
        Book A Call
      </ActionBtn>
    </div>
  </div>
</template>
