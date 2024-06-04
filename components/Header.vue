
<template>
    <header class="fixed w-full">
      <div class="flex items-center justify-between max-w-screen-lg px-4 py-4 mx-auto">
        <div>
          <NuxtLink to="/" class="px-4 py-2 text-sm text-black bg-white rounded-sm">
            jeksn.me
          </NuxtLink>
        </div>
        <div>
          <button @click="open = !open">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white" :class="{ 'hidden': open, 'block': !open }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white" :class="{ 'hidden': !open, 'block': open }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div v-if="open" class="absolute px-8 w-full left-0 top-[4rem] dropdown" v-bind:class="{ 'hidden': !open, 'block': open }">
          <ul class="max-w-screen-lg px-4 pt-4 pb-8 mx-auto text-white">
            <li class="py-2">
              <NuxtLink to="/notes"
              class="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
              Notes
              </NuxtLink>
            </li>
            <li class="py-2">
              <NuxtLink to="/uses"
              class="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
              Uses
              </NuxtLink>
            </li>
            <li class="py-2">
              <NuxtLink to="/reading-list"
              class="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
              Reading list
              </NuxtLink>
            </li>
            <li class="py-2">
              <NuxtLink to="/now"
              class="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
              Now
              </NuxtLink>
            </li>
            <li class="py-2">
              <NuxtLink to="/small-projects" 
              class="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
                Small projects
              </NuxtLink>
            </li>
            <li class="py-2">
              <NuxtLink to="https://github.com/jeksn/jeksn.me" 
              class="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
                Repo
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
</template>
<style>
header, .dropdown {
    background-color: rgba(22, 22, 23, 0.95);
}
</style>
<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

