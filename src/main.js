import { createApp } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from './App.vue'
import router from "./router/router"
import './assets/main.css'
import store from "@/vuex/store"
import i18n from "@/language/i18n"

import {registerGlobalComponents} from "./utils/import"

library.add(fas, far, fab)
const app = createApp(App)

registerGlobalComponents(app)

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app')
