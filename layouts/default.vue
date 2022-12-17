<template>
  <div class="bg-bgc flex w-screen h-screen">
    <OrganismSidebar />
    <div class="w-[1000px] mx-auto">
      <OrganismHeader />
      <NuxtPage />
      <OrganismFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
const best = ref('asd')
</script>
