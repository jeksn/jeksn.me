<script setup lang="ts">
const title = ref('Small projects');
const description = ref('My small projects');
definePageMeta({
  title: 'Small projects',
  layout: 'page',
})
</script>

<template>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
    </Head>
    <NuxtLayout>
    <Hero>
      <h1 class="mb-4 text-4xl">{{ title }}</h1>
    </Hero>
    <PageContent>
      <div class="flex flex-col gap-6">
        <div class="flex justify-between w-full mx-auto text-white rounded md:w-5/6 bg-neutral-950 hover:bg-neutral-900 border-[rgb(50,50,50)] border transition duration-150 ease-in-out">
          <div class="w-1/2">
            <a href="https://alpinist.jeksn.me" target="_blank">
              <img src="/alpinist-screenshot.png" alt="" class="w-full h-[300px] object-cover object-top filter brightness-[20%] hover:brightness-100 transition duration-300 ease-in-out">
            </a>
          </div>
          <div class="flex flex-col justify-between w-1/2 px-8 py-6">
            <div class="space-y-3">
              <h2 class="text-2xl">
                Alpinist
              </h2>
              <p>A small collection of simple Alpine.js components and utilities.</p>
            </div>
              <div class="flex gap-x-4">
                <a href="https://alpinist.jeksn.me" target="_blank" class="px-4 py-2 transition-all duration-100 ease-in-out border border-white rounded hover:bg-white hover:text-black">
                    Go to site
                  </a>
                  <a href="#" target="_blank" class="px-4 py-2 transition-all duration-100 ease-in-out border border-white rounded hover:bg-white hover:text-black">
                    Repo

                  </a>
                </div>
          </div>
        </div>
        <div class="flex justify-between w-full mx-auto text-white rounded md:w-5/6 bg-neutral-950 hover:bg-neutral-900 border-[rgb(50,50,50)] border transition duration-150 ease-in-out">
          <div class="w-1/2">
            <a href="https://alpinist.jeksn.me" target="_blank">
              <img src="/weeek-screenshot.png" alt="" class="w-full h-[300px] object-cover object-top filter brightness-[20%] hover:brightness-100 transition duration-300 ease-in-out">
            </a>
          </div>
          <div class="flex flex-col justify-between w-1/2 px-8 py-6">
            <div class="space-y-3">
              <h2 class="text-2xl">
                weeek.xyz
              </h2>
              <p>A small Nuxt site that shows the number of the week.</p>
            </div>
              <div class="flex gap-x-4">
                <a href="https://weeek.xyz" target="_blank" class="px-4 py-2 transition-all duration-100 ease-in-out border border-white rounded hover:bg-white hover:text-black">
                    Go to site
                  </a>
                  <a href="https://github.com/jeksn/weeknumber-nuxt" target="_blank" class="px-4 py-2 transition-all duration-100 ease-in-out border border-white rounded hover:bg-white hover:text-black">
                    Repo

                  </a>
                </div>
          </div>
        </div>
    </div>
    </PageContent>
  </NuxtLayout>
</template>