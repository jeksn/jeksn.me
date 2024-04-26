<script setup lang="ts">
useHead({
  title: 'jeksn.me',
  meta: [
    { name: 'description', content: 'My personal site.' }
  ],
  bodyAttrs: {
    class: 'bg-black text-white'
  },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
