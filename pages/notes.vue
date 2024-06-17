<script setup lang="ts">

const title = ref('Notes');
definePageMeta({
    title: 'Notes',
    layout: 'page'
})

</script>

<template>
    <NuxtLayout>
        <Hero>
            <h1 class="mb-4 text-4xl">{{ title }}</h1>
        </Hero>
        <NoteList />
    </NuxtLayout>
</template>