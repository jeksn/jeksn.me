<template>
    <div class="pt-24">
        <div class="max-w-screen-lg mx-auto px-4">
            <div class="nuxt-content">
                <slot />
            </div> 
        </div>
    </div>
</template>
<style>
.nuxt-content h1 {
    @apply text-4xl mt-8 mb-4;
}
.nuxt-content h2 {
    @apply text-2xl mt-8 mb-4;
}
.nuxt-content ul li {
    @apply list-disc list-inside mb-1;
}
</style>