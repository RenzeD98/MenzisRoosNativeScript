import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';

import App from './components/App';
import Conversation from './components/Conversation';
import Introduction from './components/Introduction';

const connectivityModule = require("tns-core-modules/connectivity");
const myConnectionType = connectivityModule.getConnectionType();

console.log(myConnectionType);
if(myConnectionType == connectivityModule.connectionType.none) {
    console.log('geen internet');
} else {
    console.log('wel internet');
}

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');


new Vue({
  render: h => h('frame', [h(Conversation)])
}).$start();
