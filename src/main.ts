import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.dataset.animateScrollClass != undefined) {
      entry.target.classList.add(entry.target.dataset.animateScrollClass)
    }
    else{
      entry.target.classList.remove(entry.target.dataset.animateScrollClass)
    }
  })
}

let observer = new IntersectionObserver(callback);

let elements = document.querySelectorAll('.animate-on-scroll')

elements.forEach(element => {
  observer.observe(element)
});
