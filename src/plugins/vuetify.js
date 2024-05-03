// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import 'vuetify/styles';  
// Import any Vuetify components you use here
import { VApp, VBtn, VToolbar, VIcon, VAppBar, VAppBarNavIcon, VAppBarTitle } from 'vuetify/components';

export default createVuetify({
  components: {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VAppBarTitle,
    VBtn,
    VIcon,
    VToolbar
  }
  // Any additional options go here
});
