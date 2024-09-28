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
