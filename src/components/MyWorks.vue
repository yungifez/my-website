<script setup lang="ts">

</script>

<template>
  <section
    class="mt-5 leading-7 animate-on-scroll opacity-0"
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

    <div class="mt-5 p-6 bg-white bg-opacity-10 backdrop-blur-sm">
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
      <div class="animate-on-scroll mt-3" data-animate-scroll-class="animate-in-pulse" id="works">
        <div>
          <h3 class="text-3xl my-2"><a class="text-green-500 underline" href="http://github.com/yungifez/skuul">Skuul</a></h3>
          <p>
            Skuul is a multi school management system open source project with the aim to streamline the daily activities of schools. It has a lot of features such as student record management, timetable management, syllabus management, notices, exam management, multi school management, etc. 
          </p>
        </div> 
        <div>
          <h3 class="text-3xl my-2"><a class="text-green-500 underline" href="http://gentletouchschool.com">Gentle Touch Schools</a></h3>
          <p>
            I built the website of Gentle Touch Schools, and set up an instance of skuul for the school. This site is built using modern Wordpress toolings by roots.io such as Bedrock and their theme builder called sage.
          </p>
        </div> 
        <div>
          <h3 class="text-3xl my-2 underline">Jollof Cuisine v2</h3>
          <p>
            Jollof Cuisine is a food delivery platform, with features such as location based restaurant suggestions, flexible role management for both in-house and restaurant management, real-time order tracking, flexible menu management system, etc. 
          </p>
        </div> 
        <div>
          <h3 class="text-3xl my-2 underline">Open Source Contributions</h3>
          <p>
          I have contributed to various open sourcve projects such as <a href="http://github.com/4jean/lavsms">LavSMS</a>, <a href="https://github.com/jeroennoten/Laravel-AdminLTE">Laravel AdminLTE</a>, <a href="http://github.com/changeweb/unified-transform"> Unified Transform</a> through code contributions and issue management, did I mention the time I fixed some issues in ``the jetstream and spatieroles and permission docs hehe :). 
          </p>
        </div> 
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
  #works {
    animation-delay: 3.8s;
  }
  @media (min-width: 750px){
    #shell-output span {
      animation-delay: 1.5s;
    }
    #shell-output :first-child{
     animation-delay: 1.3s;
    }
    #works {
      animation-delay: 1.7s;
    }

  }
</style>
