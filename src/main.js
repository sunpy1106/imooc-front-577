import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import './styles/index.scss'

import { useREM } from './utils/flexable'
import router  from './router'

useREM()
createApp(App).use(router).mount('#app')
