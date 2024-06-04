<script setup>
const title = ref('Now');
const description = ref('This is my /now page');
definePageMeta({
  title: 'Now',
  layout: 'page',
})
</script>
<template>
    <Head>
      <Title>{{ title + ' | ' + 'jeksn.me' }}</Title>
      <Meta name="description" :content="description" />
    </Head>
    <NuxtLayout>
    <h1 class="text-4xl">{{ title }}</h1>
    <div class="mt-6">
        <p>
            This is my <a href="https://sive.rs/now2" class="underline">/now </a>page.
            These are some of the things I'm focusing on right now.
        </p>
        <div>
            <ul class="mt-4 list-disc list-inside">
                <li>Learning Laravel</li>
                <li>Trying to write a daily journal</li>
                <li>Reading <a href="/reading-list" class="underline">books </a></li>
            </ul>
        </div>
    </div>
    </NuxtLayout>

</template>
