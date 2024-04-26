
<template>
    <header class="fixed w-full">
      <div class="flex items-center justify-between max-w-screen-lg px-4 py-4 mx-auto">
        <div>
          <a href="/" class="px-4 py-2 text-sm text-black bg-white rounded-sm">
            jeksn.me
          </a>
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
              <a 
              href="/notes"
              class="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
              Notes
              </a>
            </li>
            <li class="py-2">
              <a 
              href="/uses" 
              class="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
              Uses
              </a>
            </li>
            <li class="py-2">
              <a 
              href="/reading-list" 
              class="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
              Reading list
              </a>
            </li>
            <li class="py-2">
              <a 
              href="/small-projects" 
              class="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
                Small projects
              </a>
            </li>
            <li class="py-2">
              <a 
              href="https://github.com/jeksn/jeksn.me" 
              class="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
                Repo
              </a>
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

