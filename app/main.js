import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';

import Conversation from './components/Conversation';
import CreateProfile from './components/CreateProfile';


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

new Vue({
  render: h => h('frame', [h(CreateProfile)])
}).$start();
