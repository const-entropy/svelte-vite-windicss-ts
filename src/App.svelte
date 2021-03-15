<script lang="ts">
  let helloWorld: string = "Hello World"
</script>

<style>
  #main > div {
      @apply bg-gray-900;
  }

</style>

<template>
<div id="main" class="min-h-screen bg-gray-500 text-white flex items-center justify-center ">
  <div class="w-64 h-64 flex items-center justify-center ">{helloWorld}</div>
</div>
</template>