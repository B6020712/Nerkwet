<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br/>
          <h1 style="text-align: center">Assignment : LAB 7</h1>
          <div class="text--primary" style="text-align: center"><strong>ไฟล์การบ้าน:</strong> <a :href='downLoadURL'>คลิกเพื่อดาว์นโหลดไฟล์การบ้าน</a></div>
          <div style="margin-top: 20px;" align="center" justify="center">
            <v-img src="@/assets/lab/lab7/lab7Assignment1.png"></v-img><br/>
          </div>
          <div class="headline text--primary labexplan" style="margin-top:10px;">อธิบาย assignment</div>
          <div class="text--primary labexplan" style="margin-top: 2px">
            กำหนดค่าการเชื่อมต่อดังรูปด้านบน<br/>
            จากภาพด้านบนเป็นการเชื่อมต่อกันของ IPv6 Network ผ่านเครื่องข่าย IPv4
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px">
            Router10 (Dual Stack)
          </div>
          <div class="text--primary labexplan3" style="margin-top: 2px">
            a. G0/2 มีแค่ IPv6 address<br/>
            b. G0/0 มี IPv4 address<br/>
            c. Tunnel interface มี IPv6 address
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px">
            Router0
          </div>
          <div class="text--primary labexplan3" style="margin-top: 2px">
            a. G0/0 และ G0/1 มีแค่ IPv4 address
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px">
            Router20 (Dual Stack)
          </div>
          <div class="text--primary labexplan3" style="margin-top: 2px">
            a. G0/2 มีแค่ IPv6 address<br/>
            b. G0/0 มี IPv4 address<br/>
            c. Tunnel interface มี IPv6 address
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px">
            Router30
          </div>
          <div class="text--primary labexplan3" style="margin-top: 2px">
            a. G0/0 และ G0/2 มีแค่ IPv6 address
          </div>
          <div class="text--primary labexplan" style="margin-top: 2px">
            IPv6 Network จะใช้ Routing Protocol แบบ OSPFv3
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px">
            : Router10 G0/2 ใช้ Area10<br/>
            : Router20 G0/2 ใช้ Area20<br/>
            : Router30 G0/0 ใช้ Area20 และ G0/2 ใช้ Area30
          </div>
          <div class="text--primary labexplan" style="margin-top: 2px">
            <span class="red--text">IPv4 Network</span> จะใช้ Routing Protocol แบบ EIGRP AS_Number คือ 100<br/>
            การเชื่อมต่อดังรูป<span class="red--text">ไม่จำเป็น</span>ต้องทำ Redistribute Routing<br/>
            การที่จะทำให้ IPv6 Network สามารถติดต่อข้ามเครือข่าย IPv4 ได้นั้นจำเป็นต้องใช้ Transition เช่น การทำ IPv6 Tunneling
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px">
            ต้องสร้าง Tunnel Interface ที่ Router10 (เป็นต้นทาง) และ Router20 (เป็นปลายทาง) <strong>**ไม่มี</strong>การสร้าง Tunnel Interface ที่ Router0 โดยตัวอย่างคำสั่งการสร้าง Tunnel ที่ Router10 ดังนี้
          </div>
          <div class="text--primary labexplan3" style="margin-top: 2px">
            > Router10(Config)# interface tunnel0<br/>
            > Router10(Config-if)# ipv6 address 2001:1212::1/64<br/>
            > Router10(Config-if)# ipv6 ospf {{message1}} area 0<br/>
            > Router10(Config-if)# tunnel source {{message2}}<br/>
            > Router10(Config-if)# tunnel destination {{message3}}<br/>
            > Router10(Config-if)# tunnel mode ipv6ip
          </div>
          <div class="headline text--primary labexplan" style="margin-top: 15px">สิ่งที่ต้องการ</div>
          <div class="text--primary labexplan" style="margin-top: 2px">
            PC10, PC20 และ PC30 ต้องสามารถติดต่อหากันได้
          </div>
          <br/>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto">
          <br/>
          <v-card-text>
            <div class="text--primary" v-if="!readyToDoQuest">
              <h2 style="text-align: center">คำถามก่อนส่ง Assignment</h2>
              <div style="text-align: center">คำถามมีทั้งหมด 2 ข้อ เป็นแบบ choice</div>
              <div style="text-align: center">หากตอบคำถามถูกทุกข้อจะสามารถส่งไฟล์ได้</div><br />
              <div class="d-flex justify-space-around mb-6 outlined">
                <v-spacer></v-spacer><v-btn color="indigo" @click="requestQuest">Question</v-btn><v-spacer></v-spacer>
              </div>
            </div>

            <div v-if="readyToDoQuest">
              <h1 class="text--primary" style="text-align: center">คำถามก่อนส่ง Assignment</h1>
              <v-radio-group v-model="quest1.title" style="margin-left: 10px">
                <div>{{quest1.headermsg}}</div>
                <v-radio v-for="citem in choice1" :key="citem.no" :value="citem.no" :label="citem.msg"></v-radio>
              </v-radio-group>
              <v-radio-group v-model="quest2.title" style="margin-left: 10px">
                <div>{{quest2.headermsg}}</div>
                <v-radio v-for="citem in choice2" :key="citem.no" :value="citem.no" :label="citem.msg"></v-radio>
              </v-radio-group>

              <div v-if="checked" class="d-flex justify-space-around mb-6 outlined">
                <v-btn color="red" @click="checkResult(quest1.title, quest2.title)">Check</v-btn>
              </div>

              <div v-if="passSign">
                <p class="subtitle-1 text--primary" style="text-align: center"><strong>สำหรับส่งไฟล์ .pkt ไปที่ Classroom</strong></p>
                <template><v-file-input v-model="myFiles" accept="image/*" @change="handleUpload($event.target.files)" label="File input"></v-file-input></template>
                <v-progress-circular v-if="uploadingFile" :value="timevalue" :rotate="360" :width="2" color="teal">{{timevalue}}</v-progress-circular>
                <v-row>
                  <v-spacer></v-spacer>
                  <v-btn color="indigo" @click="toLab3"><v-icon>mdi-arrow-left-bold-box-outline</v-icon>LAB 3</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="uploadFile">Upload<v-icon>mdi-file-upload-outline</v-icon></v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="green" @click="toLab4">LAB 4<v-icon>mdi-arrow-right-bold-box-outline</v-icon></v-btn>
                  <v-spacer></v-spacer>
                </v-row>
              </div>
              <br/>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { storage } from '../main';
import LoginComponent from './LoginComponent.vue';

/* eslint-disable */
export default {
  components: { LoginComponent },
  data() {
    return {
      message1 : "<process_id>",
      message2 : "<interface_name>",
      message3 : "<ip_address>",
      downLoadURL: '',
      readyToDoQuest: false,
      name: 'LAB2',
      quest1: { title: 'lab2_no1', headermsg: '1. Right Group เป็น Classful แบบใด' },
      quest2: { title: 'lab2_no2', headermsg: '2. Left Group เป็น Classful แบบใด' },
      choice1: [
        { no: 1, msg: 'A' },
        { no: 2, msg: 'B' },
        { no: 3, msg: 'C' },
        { no: 4, msg: 'D' },
      ],
      choice2: [
        { no: 1, msg: 'E' },
        { no: 2, msg: 'Z' },
        { no: 3, msg: 'G' },
        { no: 4, msg: 'DA' },
      ],
      dialog: false,
      lab2_no1: Number,
      lab2_no2: Number,
      passSign : false,
      checked: true,
      user : {
        email : '',
        refreshToken : ''
      },
      interval: {},
      myFiles: null,
      file: null,
      timevalue: 0,
      uploadValue: 0,
      uploadingFile: false,
    }
  },
  created() {
    console.log("access token from login comp = ")
    firebase.auth().onAuthStateChanged(user => {
      var starsRef = storage.ref().child('labAssignment/Lab7_Std.pkt');
      starsRef.getDownloadURL()
      .then((url) => {
        this.downLoadURL = url;
      })
      .catch((error) => {
        switch (error.code) {
          case 'storage/object-not-found':
            break;
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
          case 'storage/unknown':
            break;
        }
      });
      
      this.logInSign = !!user;
      if(user) {
        this.email = user.email;
        this.refreshToken = user.refreshToken;
      }
    })
  },
  methods: {
    toLab3() { 
      this.$router.push("/lab3"); 
    },
    toLab4() { 
      this.$router.push("/lab4"); 
    },
    checkResult (LAB2_NO1, LAB2_NO2) {
      if (LAB2_NO1 == 3 && LAB2_NO2 == 1) { 
        this.passSign = true;
        this.checked = false;
        return console.log("Pass. Good Job! You can sent .pkt file"); 
      }
      else {
        this.passSign = false;
        return console.log("Not pass!");
      }
    },
    handleUpload(event) { 
      this.file = "";
      this.myFiles = event.target.files[0];
    },
    uploadFile() {
      this.timevalue = 0;
      this.uploadValue = 0;
      // const email = this.email.split('@')[0]; //ต้องการเซฟแค่หน้า @
      var metadata = { contentType: this.myFiles.type };
      const uploadTask = storage.ref().child(this.email + "/LAB2/" + this.myFiles.name).put(this.myFiles, metadata);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
        console.log( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
        this.uploadingFile = true;
        this.uploadValue = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
        this.interval = setInterval(() => {
          if (this.timevalue == this.uploadValue) {
            this.timevalue = 0
          } 
          this.timevalue += 1
        })
      }, error => { console.log(error.message) },
      () => { 
        this.uploadingFile = false; 
        storage.ref().child(this.email + "/LAB2/" + this.myFiles.name).getDownloadURL().then(function(url) { console.log(url); });
      });
    },
    requestQuest() { this.readyToDoQuest = true; },
  }
};
</script>

<style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
  .labexplan {
    margin-left: 40px;
    margin-right: 40px;
  }
  .labexplan2 {
    margin-left: 50px;
    margin-right: 40px;
  }
  .labexplan3 {
    margin-left: 60px;
    margin-right: 40px;
  }
</style>