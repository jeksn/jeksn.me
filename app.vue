<script setup lang="ts">
const title = ref('jeksn.me');
const description = ref('My small home on the web');
</script>

<template>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Body class="text-white bg-black" />
    </Head>
    <NuxtPage />
</template>