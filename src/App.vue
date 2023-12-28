<script setup lang="ts">
  import AboutMe from './components/AboutMe.vue'
  import BackgroundDesign from './components/BackgroundDesign.vue'
</script>

<template>
  <header class="h-screen">
    <div class="flex flex-col justify-center items-center text-center h-5/6">
      <div class="flex flex-col gap-y-3 bg-black w-11/12 py-10 px-3 md:w-auto md:p-10 rounded ">
        <div class="w-fit m-auto">
          <h1 class="text-2xl tracking-wide md:text-5xl lg:text-7xl text-green-600 typing ">Marvellous Ifezue</h1>
        </div>
        <div class="w-fit m-auto">
          <h2 class="md:text-2xl typing typing-center w-0" style="animation-delay: 3.5s ; animation-fill-mode: forwards;">Decent enough programmer</h2>
        </div>
      </div>
    </div>
    <div class="bg-black p-3 md:p-6 w-fit m-auto gap-6 rounded text-3xl flex justify-center items-center animate-on-scroll" data-animate-scroll-class="animate-in-pulse">
      <a href="http://github.com/yungifez" class="bi-github hover:border-b hover:border-green-500 hover:scale-105 hover:text-green-500 delay-50"></a>
      <a href="https://www.linkedin.com/in/marvellous-ifezue-1712361b0/" class="bi-linkedin hover:border-b hover:border-green-500 hover:scale-105 hover:text-green-500 delay-50"></a>
      <a href="https://twitter.com/yungifez/" class="bi-twitter-x hover:border-b hover:border-green-500 hover:scale-105 hover:text-green-500 delay-50"></a>
    </div>
  </header>  
  <main>
  <div class="p-3">
    <AboutMe />  
    <MyWorks/>
  </div>
  </main>
  <BackgroundDesign />
</template>

<style scoped>
</style>
