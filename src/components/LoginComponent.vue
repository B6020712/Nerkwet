<template>
  <div>
    <v-app-bar v-if="logInSign" class="appbar" color="#1976D2" app>
      <v-toolbar-title class="display-1 font-weight-medium flex text-center"><span style="color: white">Nerkwet</span></v-toolbar-title>
        <div v-if="logInSign" class="subtitle-1">
          <v-btn v-if="isTa" outlined style="margin-right:10px" color="secondary" @click="toTAPage"><span style="color: white">Teacher Assistant</span></v-btn>
          <v-icon v-on:click="$router.push('/home')" dark style="padding-right: 10px">mdi-home</v-icon>
          <v-menu bottom min-width="200px" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon x-large v-on="on">
                <v-avatar size="48">
                  <img :src="photo" class="photoo">
                </v-avatar>
              </v-btn>
            </template>
            <v-card height="200" width="250">
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar><img :src="photo" class="photoo"></v-avatar>
                  <h3>{{name}}</h3>
                  <p class="caption mt-1">{{email}}</p>
                  <v-btn @click="signOut">Sign Out</v-btn>
                  <!-- <v-btn @click="connectToClassroom">Show Classroom</v-btn> -->
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </div>
    </v-app-bar>
    <div v-if="!logInSign">
      <div class="signning">Welcome to Nerkwet! Please sign in first.<v-btn class="signinbutton" color="#4CAF50" @click="signIn">Sign In</v-btn></div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { firestore } from  '../main'
// const gaxios = require('gaxios');

export default {
  data() {
    return {
      isTa : false,
      logInSign : false,
      info : null,
      infostatus : false,
      creds: {},
      storeToken: {
        access_Token : '',
        refresh_Token : '',
        id_Token : ''
      },
      user : {
        uid: '',
        name : '',
        email : '',
        photo : '',
        refreshToken : '',
      },
    }
  },
  
  created() {
    firebase.auth().onAuthStateChanged(user => {
      firestore.collection("TA_Users").get().then((querySnapshot) => {
        querySnapshot.forEach((document) => {
          if (document.data().gmail == this.email) {this.isTa = true}
          // console.log(this.isTa);
        });
      });
      this.logInSign = !!user;
      if(user) {
        this.uid = user.uid;
        this.name = user.displayName;
        this.email = user.email;
        this.photo = user.photoURL;
        this.refreshToken = user.refreshToken;
        this.refresh_Token = user.refreshToken;
      }
    })
  },
  /* eslint-disable */
  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      // provider.addScope('https://www.googleapis.com/auth/userinfo.email');
      // provider.addScope('https://www.googleapis.com/auth/classroom.rosters.readonly');
      // provider.addScope('https://www.googleapis.com/auth/classroom.courses.readonly');
      // provider.addScope('https://www.googleapis.com/auth/classroom.coursework.me');
      firebase.auth().signInWithPopup(provider).then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        this.creds = result.credential;
        this.access_Token = credential.accessToken;
        this.id_Token = credential.idToken;

        /* console.log("access_Token = " + credential.accessToken);
        console.log("id_Token = " + credential.idToken); */
        
        /* gaxios.instance.defaults = {
          baseURL: 'https://classroom.googleapis.com/v1/',
          headers: {
            Authorization: `Bearer ${credential.accessToken}`
          }
        } */

        // console.log(result);
        this.$router.push("/home");
        this.logInSign = true;
      }).catch((err) => {
        // alert('Oops. ' + err.message)
        console.log('Oops1. ' + err)
        console.log('Oops2. ' + err.message)
      });
    },
    signOut() {
      try {
        const data = firebase.auth().signOut();
        this.isTa = false;
        this.$router.push("/");
        console.log(data);
        this.logInSign = false;
        location.reload();
      } catch(err){
        console.log(err);
      }
    },
    toTAPage() { this.$router.push("/ta") }
    // connectToClassroom () {
    //   const url = 'userProfiles/' + this.email;
    //   async function quickstart() {
    //     console.log("This is URL = " + url);
    //     const res = await gaxios.request({url});
    //     console.log(`status: ${res.status}`);
    //     console.log('data:');
    //     console.log(res.data);
    //   }
    //   quickstart().catch(error => console.log("error occured in Lab2 ClassroomConnect(), " + error));
      
      /* eslint-disable */
      
      /* Course ID = 318132411632 */
      /* var CLIENT_ID = '491461497654-ocne74p9m0tikbicjo4j8o57bsdbp15u.apps.googleusercontent.com';
      var CLIENT_SECRET = 'fW60Do3mtRWTi2JL8Hrqg6FW';
      const Client = require('google-classroom');
      const client = new Client({
        clientId: CLIENT_ID,
        clientSecret:  CLIENT_SECRET,
        refreshToken: this.access_Token
      })
      client.on( 'ready', async classr => {
        client.getCourses().then(res => {console.log(res)});
      }) */
    // },
  }
}
</script>

<style scoped>
  /* .appbar {
    height: 100%;
    widows: 100%;
  } */
  .photoo {
    width: 70%;
    height: 70%;
  }
  .signinbutton {
    margin-left: 2%;
  }
  .signning {
    margin-top: 5%;
    text-align: center;
  }
</style>