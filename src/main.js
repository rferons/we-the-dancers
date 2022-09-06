import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AmplifyVue from '@aws-amplify/ui-vue';
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)


const app = createApp(App)

app.use(router)
app.use(store)
app.use(AmplifyVue)

app.mount('#app')
