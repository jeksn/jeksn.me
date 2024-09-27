<script setup lang="ts">

const title = ref('Blog');
definePageMeta({
    title: 'Blog',
    layout: 'page'
})

</script>

<template>
    <NuxtLayout>
        <Hero>
            <h1 class="mb-4 text-4xl">{{ title }}</h1>
        </Hero>
        <div class="flex flex-col md:flex-row">
            <BlogList />
            <RssButton />
        </div>
    </NuxtLayout>
</template>