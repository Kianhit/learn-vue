import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/*new Vue({
    el: '#app',
    components: { App },
    template: "<App/>"
})*/

Vue.use(BootstrapVue);

new Vue({
    render: h => h(App)
}).$mount('#app')