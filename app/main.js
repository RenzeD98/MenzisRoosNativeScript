import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';

import App from './components/App';
import Conversation from './components/Conversation';
import Introduction from './components/Introduction';


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');


new Vue({
  render: h => h('frame', [h(Introduction)])
}).$start();
