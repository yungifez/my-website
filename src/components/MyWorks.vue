<script setup lang="ts">
  
</script>

<template>
  <section
    class="mt-5 p-5 leading-7 animate-on-scroll opacity-0"
    data-animate-scroll-class="animate-in-pulse"
  >
    <div class="w-fit m-auto">
      <h2
        class="animate-on-scroll text-center text-3xl md:text-4xl lg:text-5xl"
        data-animate-scroll-class="animate-in-pulse"
      >
        My Works
      </h2>
    </div>

    <div class="mt-5 p-3 bg-white bg-opacity-10 backdrop-blur">
      <p class="flex flex-col md:flex-row items-start">
        <span>
          <span class="text-green-300">marvellous@arch.btw</span>
          <span class="text-white">:</span>
          <span class="text-blue-300">~</span>
          <span class="text-white">$</span>
        </span>
        <span class="animate-on-scroll md:mx-2 max-w-fit" data-animate-scroll-class="typing">
          sudo get_projects.sh
        </span>
      </p>
      <p class="flex flex-col" id="shell-output">
        <span class="animate-on-scroll" data-animate-scroll-class="animate-in-pulse">
          Fetching data.......
        </span>
        <span class="animate-on-scroll" data-animate-scroll-class="animate-in-pulse">
          Compiling data................
        </span>
      </p>
      <div class="animate-on-scroll" data-animate-scroll-class="animate-pulse" style="animation-delay: 2s ">

      </div>
    </div>
  </section>
</template>

<style scoped>
  #shell-output span {
    animation-delay: 3.7s;
  }
  #shell-output :first-child{
   animation-delay: 3.5s;
  }
  
  @media (min-width: 750px){
    #shell-output span {
      animation-delay: 1.5s;
    }
    #shell-output :first-child{
     animation-delay: 1.3s;
    }

  }
</style>
