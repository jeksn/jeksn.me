<script setup lang="ts">

import DataListItem from '~/components/DataListItem.vue';

const title = ref('Uses');

const description = ref('List off stuff and services I use');
definePageMeta({
  title: 'Uses',
  layout: 'page',
})

interface Item {
    name: string;
    description: string;
}

const { data: appsServices } = await useFetch<Item[]>('/data/apps-services.json')
const { data: gear } = await useFetch<Item[]>('/data/gear.json')
const { data: headphones } = await useFetch<Item[]>('/data/headphones.json')

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
            <div class="flex flex-col gap-4">
                <DataListItem title="Apps & Services" :items="appsServices ?? []"/>
                <DataListItem title="Gear" :items="gear ?? []"/>
                <DataListItem title="Headphones" :items="headphones ?? []"/>
            </div>
        </div>
    </PageContent>
    </NuxtLayout>
</template>
