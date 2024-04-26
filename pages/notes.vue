
<template>
    <div class="min-h-screen pt-24">
        <div class="max-w-screen-lg px-4 mx-auto">
            <div class="mt-8 mb-4">
                <h1 class="text-4xl">Notes</h1>
                <div class="mt-6">
                    <h2 class="mt-12 text-lg">My latest notes:</h2>
                    <ContentList path="/notes" v-slot="{ list }">
                        <div v-for="article in list" :key="article._path">
                            <NuxtLink :to="article._path" class="underline">{{ article.title }}</NuxtLink>
                        </div>
                    </ContentList>
                </div>
            </div>
        </div>
    </div>
</template>