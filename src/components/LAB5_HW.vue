<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br/>
          <h1 style="text-align: center">Assignment : LAB 5</h1>
          <div class="text--primary" style="text-align: center"><strong>ไฟล์การบ้าน:</strong> <a :href='downLoadURL'>คลิกเพื่อดาว์นโหลดไฟล์การบ้าน</a></div>
          <div style="margin-top: 20px;" align="center" justify="center">
            <v-img src="@/assets/lab/lab5/lab5Assignment1.png"></v-img><br/>
          </div>
          <div class="headline text--primary labexplan" style="margin-top:10px;">อธิบาย assignment</div>
          <div class="text--primary labexplan" style="margin-top: 2px">
            1.กำหนดค่าการเชื่อมต่อดังรูปด้านบน<br/>
            2.IP address ทุก subnet มี subnet mask คือ /24 แบบ Classful<br/>
          </div>
          <div class="headline text--primary labexplan" style="margin-top: 15px">สิ่งที่ต้องการ</div>
          <div class="text--primary labexplan" style="margin-top: 2px">
            1.วางแผนและกำหนดเส้นทาง (Route Planning) เพื่อให้ Packet Forwarding โดยใช้เส้นทางที่มี<span class="red--text">จำนวน hop น้อยที่สุด (the shortest routes)</span>
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
                <p class="subtitle-1 text--primary" style="text-align: center"><strong>สำหรับส่งไฟล์ .pkt</strong></p>
                <template><v-file-input v-model="myFiles" accept="image/*" @change="handleUpload($event.target.files)" label="File input"></v-file-input></template>
                <v-progress-circular v-if="uploadingFile" :value="timevalue" :rotate="360" :width="2" color="teal">{{timevalue}}</v-progress-circular>
                <v-row>
                  <v-spacer></v-spacer>
                  <v-btn color="indigo" @click="toLab5"><v-icon>mdi-arrow-left-bold-box-outline</v-icon>LAB 5</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="uploadFile">Upload<v-icon>mdi-file-upload-outline</v-icon></v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="green" @click="toLab6">LAB 6<v-icon>mdi-arrow-right-bold-box-outline</v-icon></v-btn>
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
      name: 'LAB5',
      quest1: { title: 'lab5_no1', headermsg: '1. คำสั่งใดคือการกำหนด ip address และ subnet mask ให้กับ Gig0/2 ของ Router3' },
      quest2: { title: 'lab5_no2', headermsg: '2. จำนวน Hop มีผลต่อการส่ง Packet จากต้นทางไปยังปลายทางอย่างไร' },
      choice1: [
        { no: 1, msg: 'Router(config-if)# ip address 203.1.1.1 255.255.255.0' },
        { no: 2, msg: 'Router(config)# ip address 203.1.1.1 255.255.255.0' },
        { no: 3, msg: 'Router(config-if)# ip address 203.1.1.1 11111111.11111111.11111111.00000000' },
        { no: 4, msg: 'Router(config)# ip address 203.1.1.1 00000000.00000000.00000000.11111111' },
      ],
      choice2: [
        { no: 1, msg: 'เมื่อจำนวน hop เยอะขึ้นจะทำให้ latency time ในการส่งเพิ่มขึ้นด้วย' },
        { no: 2, msg: 'เมื่อจำนวน hop เยอะขึ้นจะทำให้ latency time ในการส่งลดลง' },
        { no: 3, msg: 'เมื่อจำนวน hop เยอะขึ้นจะทำให้ latency time ในการส่งเท่าเดิม' },
        { no: 4, msg: 'ไม่ส่งผลอะไรเลย เนื่องจากจำนวน hop ไม่เกี่ยวข้องกับ latency time ในการส่ง Packet อยู่แล้ว' },
      ],
      dialog: false,
      lab5_no1: Number,
      lab5_no2: Number,
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
      var starsRef = storage.ref().child('labAssignment/Lab5_Std.pkt');
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
    toLab5() { 
      this.$router.push("/lab5"); 
    },
    toLab6() { 
      this.$router.push("/lab6"); 
    },
    checkResult (LAB5_NO1, LAB5_NO2) {
      if (LAB5_NO1 == 1 && LAB5_NO2 == 1) { 
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
      const saveName = email + "_LAB5Assignment1";
      var metadata = { contentType: this.myFiles.type };
      // const uploadTask = storage.ref().child(this.email + "/LAB4/" + this.myFiles.name).put(this.myFiles, metadata);
      // const uploadTask = storage.ref().child(this.email + "/LAB5/" + saveName).put(this.myFiles, metadata);
      const uploadTask = storage.ref().child(email + "/LAB5/" + saveName).put(this.myFiles, metadata);
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
        storage.ref().child(email + "/LAB5/" + saveName).getDownloadURL().then(function(url) { console.log(url); });
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
</style>