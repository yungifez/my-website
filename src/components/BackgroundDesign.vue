<script setup lang="ts">
  import {ref} from 'vue'

  const matrixStrings = ref([]) 
  function populateMatrix() {
      let numberOfItems = 80;
      for (let i = 0; i <= numberOfItems; i++) {
        matrixStrings.value.push("");
      }
  }

  function keepPopulatingMatrix() {
    matrixStrings.value.forEach((element, index) => {
      matrixStrings.value[index] = Math.random() > 0.5 
          ? element+(Math.random() > 0.5 ? "01" : "10") 
            : element;
    });
  }
  
  populateMatrix();

  let matrixInterval = setInterval(() => {
    keepPopulatingMatrix();
  }, 100);

  setTimeout(() => {
    clearInterval(matrixInterval)
  }, 2000);
</script>

<template>
  <div class="-z-10 opacity-80 text-green-600 fixed top-0 overflow-clip leading-2 flex" style="letter-spacing: 0.15rem;">
    <template v-for="matrixString in matrixStrings">
    <p>
      {{matrixString}}
    </p> 
    </template> 
  </div>
</template>

<style scoped>
  p {
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
  p:after{
    color: white;
    content: "01";
  }
</style>
