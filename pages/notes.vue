<script setup>
definePageMeta({
    title: 'Notes',
    layout: 'page'
})
</script>

<template>
    <h1 class="text-4xl">Notes</h1>
    <div class="mt-6">
        <h2 class="mt-12 text-lg">My latest notes:</h2>
        <ContentList path="/notes" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <NuxtLink :to="article._path" class="underline">{{ article.title }}</NuxtLink>
            </div>
        </ContentList>
    </div>
</template>