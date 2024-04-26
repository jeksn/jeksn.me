<template>
    <Header />
    <main>
        <div class="min-h-screen pt-24">
            <div class="max-w-screen-lg px-4 mx-auto">
                <NuxtLink to="/notes" class="flex py-3 mt-4 gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                    Back to notes
                </NuxtLink>
                <div class="nuxt-content">
                    <slot />
                </div> 
            </div>
        </div>
    </main>
</template>
<style>
.nuxt-content h1 {
    @apply text-4xl mt-8 mb-4;
}
.nuxt-content h2 {
    @apply text-2xl my-4;
}
.nuxt-content h4 {
    @apply text-base my-4 text-neutral-400;
}
.nuxt-content p {
    @apply w-full md:w-3/4 my-4 leading-relaxed;
}
.nuxt-content ul li {
    @apply list-disc list-inside mb-1;
}
</style>