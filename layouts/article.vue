<template>
    <Header />
    <main>
        <div class="min-h-screen pt-24">
            <div class="max-w-screen-lg px-4 mx-auto">
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
    @apply text-2xl mt-8 mb-4;
}
.nuxt-content h4 {
    @apply text-base mt-8 mb-4;
}
.nuxt-content p {
    @apply w-full md:w-3/4 my-4 leading-relaxed;
}
.nuxt-content ul li {
    @apply list-disc list-inside mb-1;
}
</style>