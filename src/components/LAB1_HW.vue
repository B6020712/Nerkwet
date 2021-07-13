<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br/>
          <h1 style="text-align: center">Assignment : LAB 1</h1>
          <div class="headline text--primary labexplan" style="margin-top:10px;">อธิบาย assignment</div>
          <div class="text--primary labexplan">
            1.กำหนดค่าให้ Router 4321<br/>
            2.ทำการ assign ip ใหกับ interface loopback 0 และ interface loopback 1 ด้วย ip address 192.168.0.1/24 , 192.168.1.1/24 ตามลำดับ
          </div>
          <div class="text--primary labexplan2">
            >	(config)# interface loopback 0<br/>
            >	(config-if)# ip address 192.168.0.1 255.255.255.0<br/>
            >	(config-if)# interface loopback 1<br/>
            >	(config-if)# ip address 192.168.1.1 255.255.255.0<br/>
            >	(config-if)# shut
          </div>
          <div class="text--primary labexplan">
            3.จากนั้นย้อนกลับไปที่ privileged mode แล้วทำการ ping หมายเลข IP 192.168.0.1 และ 192.168.1.1
          </div>
          <div class="text--primary labexplan2">
            >	ping 192.168.0.1<br/>
            >	ping 192.168.1.1
          </div>
          <div class="text--primary labexplan">
            4.ทำการ backup running configuration เก็บไว้ที่ flash storage ตั้งชื่อไฟล์ backup.txt
          </div>
          <div class="text--primary labexplan2">
            # copy running-config flash:
          </div>
          <div class="text--primary labexplan">
            5.ไปที่ Physical เพื่อปิดแล้วเปิดเครื่องใหม่ จากนั้นทำการ restore configuration backup.txt  พร้อมแสดงผล running configuration
          </div>
          <div class="headline text--primary labexplan" style="margin-top: 15px">สิ่งที่ต้องการ</div>
          <div class="text--primary labexplan">
            ทำตามคำอธิบายด้านบน บันทึกเป็นไฟล์ .pkt และอัพโหลดไฟล์
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
              <h1 class="text--primary" style="text-align: center">คำถามก่อนส่ง Assignment</h1><br/>
              <v-radio-group v-model="quest1.title" class="labexplan" style="margin-top: 5px">
                <div>{{quest1.headermsg}}</div>
                <v-radio class="labexplan2" v-for="citem in choice1" :key="citem.no" :value="citem.no" :label="citem.msg"></v-radio>
              </v-radio-group>
              <v-radio-group v-model="quest2.title" class="labexplan" style="margin-top: 5px">
                <div>{{quest2.headermsg}}</div>
                <v-radio class="labexplan2" v-for="citem in choice2" :key="citem.no" :value="citem.no" :label="citem.msg"></v-radio>
              </v-radio-group>

              <div v-if="checked" class="d-flex justify-space-around mb-6 outlined">
                <v-btn color="red" @click="checkResult(quest1.title, quest2.title)">Check</v-btn>
              </div>

              <div v-if="passSign">
                <p class="subtitle-1 text--primary" style="text-align: center"><strong>สำหรับส่งไฟล์ .pkt</strong></p>
                <template><v-file-input v-model="myFiles" accept="image/*" @change="handleUpload($event.target.files)" label="File input"></v-file-input></template>
                <v-progress-circular v-if="uploadingFile" :value="timevalue" :rotate="360" :width="2" color="teal">{{timevalue}}</v-progress-circular>
                <v-row>
                  <v-spacer></v-spacer>
                  <v-btn color="indigo" @click="toLab1"><v-icon>mdi-arrow-left-bold-box-outline</v-icon>LAB 1</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="uploadFile">Upload<v-icon>mdi-file-upload-outline</v-icon></v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="green" @click="toLab2">LAB 2<v-icon>mdi-arrow-right-bold-box-outline</v-icon></v-btn>
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
      downLoadURL: '',
      readyToDoQuest: false,
      name: 'LAB1',
      quest1: { title: 'lab1_no1', headermsg: '1. ข้อใดคือความแตกต่างของ enable password กับ enable secret' },
      quest2: { title: 'lab1_no2', headermsg: '2. ที่ขั้นตอนที่ 4 หากทำการ ping 192.168.1.1 จะมีการ response กลับมาหรือไม่เพราะเหตุใด' },
      choice1: [
        { no: 1, msg: 'enable password ผ่านการ encoding ส่วน enable secret ไม่ผ่านการ encoding' },
        { no: 2, msg: 'enable password ไม่ผ่านการ encoding ส่วน enable secret ผ่านการ encoding' },
        { no: 3, msg: 'enable password ผ่านการเข้ารหัสแบบ SHA256 ส่วน enable secret ผ่านการเข้ารหัสแบบ SHA512' },
        { no: 4, msg: 'enable password ผ่านการเข้ารหัสแบบ SHA512 ส่วน enable secret ผ่านการเข้ารหัสแบบ SHA256' },
      ],
      choice2: [
        { no: 1, msg: 'ไม่มีการ response เนื่องจาก interface loopback 1 ถูก shutdown' },
        { no: 2, msg: 'ไม่มีการ response เนื่องจาก interface loopback 0 ถูก shutdown' },
        { no: 3, msg: 'มีการ response เนื่องจาก interface loopback 1 ไม่ถูก shutdown' },
        { no: 4, msg: 'มีการ response เนื่องจาก interface loopback 0 ไม่ถูก shutdown' },
      ],
      dialog: false,
      lab1_no1: Number,
      lab1_no2: Number,
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
    firebase.auth().onAuthStateChanged(user => {
      this.logInSign = !!user;
      if(user) {
        this.email = user.email;
        this.refreshToken = user.refreshToken;
      }
    })
  },
  methods: {
    toLab1() { this.$router.push("/lab1") },
    toLab2() { this.$router.push("/lab2") },
    checkResult (LAB1_NO1, LAB1_NO2) {
      if (LAB1_NO1 == 2 && LAB1_NO2 == 1) { 
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
      const email = this.email.split('@')[0]; //ต้องการเซฟแค่หน้า @
      const saveName = email + "_LAB1Assignment1";
      var metadata = { contentType: this.myFiles.type };
      // const uploadTask = storage.ref().child(this.email + "/LAB4/" + this.myFiles.name).put(this.myFiles, metadata);
      const uploadTask = storage.ref().child(email + "/LAB1/" + saveName).put(this.myFiles, metadata);
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
        storage.ref().child(email + "/LAB1/" + saveName).getDownloadURL().then(function(url) { console.log(url); });
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
    margin-top: 2px;
    margin-left: 40px;
    margin-right: 40px;
  }
  .labexplan2 {
    margin-top: 2px;
    margin-left: 50px;
    margin-right: 40px;
  }
  .labexplan3 {
    margin-top: 2px;
    margin-left: 60px;
    margin-right: 40px;
  }
  .labexplan4command {
    background-color: cornsilk;
    margin-top: 2px;
    margin-left: 65px;
    margin-right: 40px;
  }
</style>