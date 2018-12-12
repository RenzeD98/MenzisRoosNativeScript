import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';

import Introduction from './components/Introduction';
import Conversation from './components/Conversation';
import CreateProfile from './components/CreateProfile';

var LS = require("nativescript-localstorage");
var gender = LS.getItem('gender');
var startedBefore = LS.getItem('startedBefore');

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

if (gender) {
  var StartComponent = Conversation;
} else{
  var StartComponent = CreateProfile;
}

if (!startedBefore) {
  var StartComponent = Introduction;
  localStorage.setItem('startedBefore', true);
}

new Vue({
  render: h => h('frame', [h(StartComponent)])
}).$start();
