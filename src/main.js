import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

/* eslint-disable no-new */
Vue.config.productionTip = false

/* Config Firebase */
import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDkxxJ8cd-kz0rQXBSnehN_o6w3D-jsI80",
    authDomain: "nerkwet.firebaseapp.com",
    projectId: "nerkwet",
    storageBucket: "nerkwet.appspot.com",
    messagingSenderId: "491461497654",
    appId: "1:491461497654:web:6310fa87984817d5cd5997",
    measurementId: "G-X39BZCYN3Q"
  });
  
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // Initialize Firebase
// Nerk for g.sut.ac.th
// firebase.initializeApp ({
//   apiKey: "AIzaSyBPxtTHuASdLAD9XzPnqzPYi5VT9VrhRb0",
//   authDomain: "nerk-7d1b4.firebaseapp.com",
//   projectId: "nerk-7d1b4",
//   storageBucket: "nerk-7d1b4.appspot.com",
//   messagingSenderId: "594609763757",
//   appId: "1:594609763757:web:7f5ed3cc7d2f2c642d1d24",
//   measurementId: "G-EC8GG0QTJR"
// });

export const storage = firebase.storage();

let app;
/* eslint-disable */
firebase.auth().onAuthStateChanged( user => {
  // console.log(user);
  if(!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})