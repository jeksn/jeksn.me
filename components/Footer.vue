<template>
    <div class="w-full mt-12">
        <div class="max-w-screen-lg py-6 mx-auto">
            <div class="flex justify-center">
                <span class="text-sm text-white/80">Copyright © {{ currentYear }} Johan Eriksson / jeksn</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>