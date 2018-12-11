import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';

import Introduction from './components/Introduction';
import Conversation from './components/Conversation';
import CreateProfile from './components/CreateProfile';

var LS = require("nativescript-localstorage");
var gender = LS.getItem('gender');
var birthdate = LS.getItem('birthdate');

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

if (gender && birthdate) {
  var StartComponent = Conversation;
} else{
  var StartComponent = CreateProfile;
}

new Vue({
  render: h => h('frame', [h(Introduction)])
}).$start();
