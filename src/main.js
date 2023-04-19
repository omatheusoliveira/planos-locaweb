import { store } from '@/store/store';
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import Vuex from "vuex";
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
