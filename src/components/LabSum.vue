<template>
  <v-container>
    <v-row width="90%">
        <v-col v-for="(item, index) in items1" :key="item.title" link width="25%">
          <v-card class="card" :color="colorCheck[item.id]">
            <div class="div1">{{item.title}} <span v-if="labCheckArry[item.id] == true" class="div3 red--text">: Finished</span></div>
            <div class="div2">{{item.head}}</div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn v-on:click="goto(item.action)" class="ma-2" outlined color="indigo">LAB</v-btn>
              <v-btn v-if="index != 0" v-on:click="goto(item.action2)" class="ma-2" outlined color="red">Assignment</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
    <v-row width="90%">
        <v-col v-for="item in items2" :key="item.title" link width="25%">
          <v-card class="card" :color="colorCheck[item.id]">
            <div class="div1">{{item.title}} <span v-if="labCheckArry[item.id] == true" class="div3 red--text">: Finished</span></div>
            <div class="div2">{{item.head}}</div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn v-on:click="goto(item.action)" class="ma-2" outlined color="indigo">LAB</v-btn>
              <v-btn v-on:click="goto(item.action2)" class="ma-2" outlined color="red">Assignment</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
    <v-row width="90%">
        <v-col v-for="item in items3" :key="item.title" link width="25%">
          <v-card class="card" :color="colorCheck[item.id]">
            <div class="div1">{{item.title}} <span v-if="labCheckArry[item.id] == true" class="div3 red--text">: Finished</span></div>
            <div class="div2">{{item.head}}</div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn v-on:click="goto(item.action)" class="ma-2" outlined color="indigo">LAB</v-btn>
              <v-btn v-on:click="goto(item.action2)" class="ma-2" outlined color="red">Assignment</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
    <v-row width="90%">
      <v-col width="25%">
        <v-card class="cardProgress" width="300" color="green lighten-5">
          <div class="div1">Total Progress (LAB1 - LAB9) : {{percentFinish}}%</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { storage } from '../main'
export default {
  name: 'LabSum',
  data() {
    return {
      percentFinish: 0,
      colorCheck: [],
      labCheckArry: [],
      items1: [
        { id: 0 ,  title: 'BEFORE LAB', head: 'Downloading Cisco Packet Tracer' , action: "/beforelab" },
        { id: 1 ,  title: 'LAB 1', head: 'Basic Configuration' , action: "/lab1" , action2: "/lab1_hw" },
        { id: 2 ,  title: 'LAB 2', head: 'IP Addressing' , action: "/lab2" , action2: "/lab2_hw" },
      ],
      items2: [
        { id: 3 ,  title: 'LAB 3', head: 'VLANs (1)' , action: "/lab3" , action2: "/lab3_hw" },
        { id: 4 ,  title: 'LAB 4', head: 'VLANs Trunking and EtherChannel (2)' , action: "/lab4" , action2: "/lab4_hw" },
        { id: 5 ,  title: 'LAB 5', head: 'Static Routing (1)' , action: "/lab5" , action2: "/lab5_hw" },
      ],
      items3: [
        { id: 6 ,  title: 'LAB 6', head: 'Static Routing (2)' , action: "/lab6" , action2: "/lab6_hw" },
        { id: 7 ,  title: 'LAB 7', head: 'IPv6' , action: "/lab7" , action2: "/lab7_hw" },
        { id: 8 ,  title: 'LAB 8', head: 'NAT and Network Services' , action: "/lab8" , action2: "/lab8_hw" },
        { id: 9 ,  title: 'LAB 9', head: 'Port Security and ACL' , action: "/lab9" , action2: "/lab9_hw" },
      ],
    }
  },
  /* eslint-disable */
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.colorCheck[0] = "blue lighten-5"
      const email = user.email.split('@')[0]; //ต้องการเซฟแค่หน้า @
      for (let i = 1; i <= 9; i++) {
        this.percentFinish = 0
        let saveName = email + "_LAB" + i + "Assignment1";
        storage.ref().child(email + "/LAB" + i + "/" + saveName).getDownloadURL().then(url => {
          if ( i == 3 ) {
            let saveName2 = email + "_LAB" + i + "Assignment2";
            storage.ref().child(email + "/LAB" + i + "/" + saveName2).getDownloadURL().then(url => {
              this.labCheckArry[i] = true 
              this.colorCheck[i] = "green lighten-5"
              // this.percentFinish += 10
              this.percentFinish += 10
            }).catch(err => {
              this.labCheckArry[i] = false 
              this.colorCheck[i] = "blue lighten-5"
            })
          }
          // if ( i == 3 ) {
          //   this.percentFinish += 5
          // } else {
            // this.percentFinish += 10
          // }
          this.percentFinish += 10
          this.labCheckArry[i] = true 
          this.colorCheck[i] = "green lighten-5"
        }).catch(err => { 
          this.labCheckArry[i] = false 
          this.colorCheck[i] = "blue lighten-5"
        })
      }
    })
  },
  methods: {
    goto: function (to) {
      this.$router.push(to);
    },
  }
}

</script>

<style>
  .card {
    height: 150px;
    width: 100%;
    text-align: center;
  }
  .cardProgress {
    height: 50px;
    width: 100%;
    text-align: center;
  }
  .div1 {
    padding-top: 10px;
  }
  .div2 {
    font-weight: bold;
    padding-top: 10px;
  }
  .div3 {
    padding-top: 10px;
    text-align: center;
  }
</style>