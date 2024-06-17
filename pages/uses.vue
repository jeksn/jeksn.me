<script setup lang="ts">
const title = ref('Uses');
const description = ref('List off stuff and services I use');
definePageMeta({
  title: 'Uses',
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
        <span class="text-lg">{{ description }}</span>
    </Hero>
    <PageContent>
        <div class="mt-6">
            <div>
                <br>
                <h2 class="text-2xl">Apps & Services</h2>
                <ul class="mt-4 list-disc list-inside">
                    <li>Arc</li>
                    <li>VS Code (and sometimes NeoVim)</li>
                    <li>Warp</li>
                    <li>Obsidian (for all my notes)</li>
                    <li>Proton Mail, Pass, and Drive</li>
                    <li>Feedbin (for RSS)</li>
                    <li>Airshow (for podcasts)</li>
                    <li>Raycast</li>
                    <li>Apple Music</li>
                </ul>
                <br>
                <h2 class="text-2xl">Gear</h2>
                <ul class="mt-4 list-disc list-inside">
                    <li>Macbook Air M1</li>
                    <li>Keychron K3</li>
                    <li>Logitech MX Master 2S</li>
                    <li>Samsung T3 1TB SSD</li>
                </ul>
                <br>
                <h2 class="text-2xl">Headphones</h2>
                <ul class="mt-4 list-disc list-inside">
                    <li>Sony WH-XB900N</li>
                    <li>Soundcore P2 Mini</li>
                </ul>
            </div>
        </div>
    </PageContent>
    </NuxtLayout>
</template>
