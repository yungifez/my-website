<script setup lang="ts">
  import AboutMe from './components/AboutMe.vue'
  import BackgroundDesign from './components/BackgroundDesign.vue'
</script>

<template>
  <header class="h-screen">
    <div class="flex flex-col justify-center items-center text-center h-5/6">
      <div class="flex flex-col gap-y-3 bg-black w-11/12 py-10 md:w-auto md:p-10 rounded">
        <h1 class="text-3xl md:text-6xl lg:text-7xl text-green-600 ">Marvellous Ifezue</h1>
        <div class="w-fit m-auto">
        <h2 class="md:text-2xl typing typing-center">Decent enough programmer</h2>
        </div>
      </div>
    </div>
    <div class="bg-black p-3 md:p-6 w-fit m-auto gap-6 rounded text-3xl flex justify-center items-center">
      <a href="http://github.com/yungifez" class="bi-github"></a>
      <a href="https://www.linkedin.com/in/marvellous-ifezue-1712361b0/" class="bi-linkedin"></a>
      <a href="https://twitter.com/yungifez/" class="bi-twitter-x"></a>
    </div>
  </header>  
  <main>
  <div class="p-3">
    <AboutMe />  
  </div>
  </main>
  <BackgroundDesign />
</template>

<style scoped>
</style>
