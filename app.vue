<script setup lang="ts">
const title = ref('jeksn.me');
const description = ref('My small home on the web');
</script>

<template>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <!-- <Style type="text/css" children="body { background-color: black; color: white; }" ></Style> -->
      <Body class="text-white bg-black" />
    </Head>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>