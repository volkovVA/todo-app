import Vue from 'vue'
import App from './App.vue'
import SimpleVueValidation from 'simple-vue-validator';

Vue.use(SimpleVueValidation);

new Vue({
  render: h => h(App),
}).$mount('#app')
