<template>
    <h2 class="mt-4 text-2xl">{{ title }}</h2>
    <ul class="list-disc list-inside">
        <li v-for="item in items" :key="item.name">{{ item.name }} {{ item.description }}</li>
    </ul>
</template>
<script lang="ts">

interface Item {
    name: string;
    description: string;
}

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array as () => Item[],
            required: true
        }
    }
}
</script>