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
        <Hero>
            <h1 class="mb-4 text-4xl">{{ title }}</h1>
            <span class="text-lg">
                This is my <a href="https://sive.rs/now2" class="underline">/now </a>page.
                These are some of the things I'm focusing on right now.
            </span>
        </Hero>
        <PageContent>
            <div class="mt-6">
                <div>
                    <ul class="mt-4 list-disc list-inside">
                        <li>Learning Laravel</li>
                        <li>Getting better at writing and keeping a journal</li>
                        <li>Reading <a href="/reading-list" class="underline">books </a></li>
                    </ul>
                </div>
            </div>
        </PageContent>
    </NuxtLayout>

</template>
