import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App) //create Vue Application object
console.log('[main.js], before app.mount("#app")')
app.mount('#app')
console.log('[main.js], after app.mount("#app")')
// app.createApp(App).mount('#app')basic-comp-project/src/main.js