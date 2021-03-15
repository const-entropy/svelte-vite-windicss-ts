<script lang="ts">
  import HelloWorld from "./HelloWorld.svelte"
</script>

<style>
  #main > div {
      @apply bg-gray-900;
  }

</style>

<div id="main" class="min-h-screen bg-gray-500 text-white flex items-center justify-center ">
  <HelloWorld greetings="Hello World"/>
</div>