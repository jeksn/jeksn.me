<script setup lang="ts">

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = { path: '/blog', limit: 5, sort: [{ pubDate: -1 }] }

</script>
<template>
    <div class="max-w-screen-lg mx-auto mt-6">
            <h2 class="mt-12 mb-2 text-2xl">Latest posts:</h2>
            <ContentList :query="query" v-slot="{ list }">
                <div v-for="article in list" :key="article._path">
                    <NuxtLink :to="article._path" class="flex flex-col gap-2 px-3 pb-2 my-2 transition-all duration-300 border-l-4 border-white hover:px-4">{{ article.title }}
                        <span class="text-sm opacity-80">{{ article.pubDate }}</span>
                    </NuxtLink>
                </div>
            </ContentList>
        </div>
</template>