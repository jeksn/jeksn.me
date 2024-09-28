<template>
    <Header />
    <main>
        <div class="min-h-screen">
            <div class="nuxt-content">
                <slot />
            </div>
            <BackToBlog />
        </div>
    </main>
    <Footer />
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
    @apply my-4 leading-relaxed;
}
.nuxt-content a {
    @apply underline transition-all underline-offset-2 hover:underline-offset-4;
}
.nuxt-content ul li {
    @apply list-disc list-inside mb-1;
}
pre {
    @apply rounded-md p-6 bg-neutral-900;
}
code {
    @apply rounded-md px-2 py-1 bg-neutral-900;
}
</style>