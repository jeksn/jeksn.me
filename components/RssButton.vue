<script setup lang="ts" disable-ts-check>
import { ref } from 'vue'

const copied = ref(false)

function copyUrl() {
    navigator.clipboard.writeText('https://jeksn.me/blog/rss.xml')
        .then(() => {
            copied.value = true
            setTimeout(() => copied.value = false, 5000)
        })
        .catch(err => console.error('Failed to copy: ', err))
}
</script>

<template>
    <div class="max-w-screen-md px-4 mx-auto mt-12">
        <button class="flex px-4 py-3 mt-4 duration-300 ease-in-out rounded gap-x-2 w-fit bg-neutral-800 hover:bg-white hover:text-black" @click.prevent="copyUrl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span v-if="!copied" class="block transition duration-300">RSS</span>
            <span v-else class="block transition duration-300">Copied!</span>
        </button>
    </div>
</template>

