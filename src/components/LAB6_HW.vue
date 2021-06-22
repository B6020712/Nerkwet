<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br/>
          <h1 style="text-align: center">Assignment : LAB 6</h1>
          <div class="text--primary" style="text-align: center"><strong>ไฟล์การบ้าน:</strong> <a :href='downLoadURL'>คลิกเพื่อดาว์นโหลดไฟล์การบ้าน</a></div>
          <div style="margin-top: 20px;" align="center" justify="center">
            <v-img src="@/assets/lab/lab6/lab6Assignment1.png"></v-img><br/>
          </div>
          <div class="headline text--primary labexplan" style="margin-top:10px;">อธิบาย assignment</div>
          <div class="text--primary labexplan" style="margin-top: 2px">
            กำหนดค่าการเชื่อมต่อดังรูปด้านบนโดย : <br/>
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px">
            1.กำหนดค่าพื้นฐาน 
          </div>
          <div class="text--primary labexplan3" style="margin-top: 2px">
            - กำหนด IP address โดยทุก Subnet มี subnet mask คือ /24 แบบ Classful ให้กับอุปกรณ์ดังภาพด้านบน<br/>
            - กำหนด Default Gateway ให้กับ PC ทุกเครื่อง ไปยัง G0/2 ของ Router ที่ทำการเชื่อมต่อ<br/>
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px;">
            2.กำหนดค่า Cost ให้กับ Interface ดัง Figure 1 เพราะ OSPF มีการพิจารณา Cost ในการสร้าง
            Shortest-Path ด้วย Link-state Algorithm โดยมีค่า Cost เริ่มต้นอ้างอิง (Default OSPF Cost)
            จากประเภทของ Interface (แต่ละประเภทมี Bandwidth แตกต่างกัน) ดังตารางด้านล่าง
          </div>
          <div style="margin-top: 20px;" align="center" justify="center">
            <v-img width="500" src="@/assets/lab/lab6/InterfaceCost.png"></v-img><br/>
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px">
            3.หลังจากกำหนดค่า Cost แล้วทำการสร้าง OSPF Process ID เป็น 10 (ซึ่งเป็นค่าระหว่าง 1-65535) ที่ Router แต่ละตัว เช่น Router0 กำหนดดังข้างล่าง โดยสามารถกำหนด OSPF Process ID เท่ากันได้ใน Router ตัวอื่น<br/>
            4.ทำการกำหนดค่า Network Address และ Wildcard mask ที่เป็น interface ของ Router รวมถึงกำหนด Area ที่ต้องการให้กับ OSPF เช่น Router0 กำหนดดังด้านล่าง
          </div>
          <div class="text--primary labexampleexplan1" style="margin-top: 2px">
            - การกำหนด Network Address และ Wildcard Masks
          </div>
          <div class="text--primary labexampleexplan2" style="margin-top: 2px">
            > Example 1: 172.16.10.0/24
          </div>
          <div class="text--primary labexampleexplan3" style="margin-top: 2px">
            172.16.10.0   = <span class="primary--text">10101100.00010000.00001010</span>.00000000<br/>
            255.255.255.0 = 11111111.11111111.11111111.00000000<br/>
            0.0.0.255     = 00000000.00000000.00000000.<span class="red--text">11111111</span>
          </div>
          <div class="text--primary labexampleexplan2" style="margin-top: 2px">
            > Example 2: 172.16.8.0/21
          </div>
          <div class="text--primary labexampleexplan3" style="margin-top: 2px">
            172.168.8.0   = <span class="primary--text">10101100.00010000.00001</span>000.00000000<br/>
            255.255.248.0 = 11111111.11111111.11111000.00000000<br/>
            0.0.0.7.255   = 00000000.00000000.00000<span class="red--text">111.11111111</span>
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px">
            5.ตรวจสอบและสังเกตการกำหนดค่าของ OSPF ได้ด้วยหลาย command (ลองสังเกตค่า Cost สำหรับแต่ละ Network ปลายทาง)<br/>
            6.กำหนดค่า OSPF ตามภาพด้านบนให้กับ Router ตัวอื่นๆ
          </div>
          <div class="headline text--primary labexplan" style="margin-top: 15px">สิ่งที่ต้องการ</div>
          <div class="text--primary labexplan" style="margin-top: 2px">
            PC0, PC1 และ PC2 ต้องสามารถติดต่อหากันได้
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
                  <v-btn color="indigo" @click="toLab6"><v-icon>mdi-arrow-left-bold-box-outline</v-icon>LAB 6</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="uploadFile">Upload<v-icon>mdi-file-upload-outline</v-icon></v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="green" @click="toLab7">LAB 7<v-icon>mdi-arrow-right-bold-box-outline</v-icon></v-btn>
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
    firebase.auth().onAuthStateChanged(user => {
      var starsRef = storage.ref().child('labAssignment/Lab6_Std.pkt');
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
    toLab6() { 
      this.$router.push("/lab6"); 
    },
    toLab7() { 
      this.$router.push("/lab7"); 
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
      const saveName = email + "_LAB6Assignment1";
      var metadata = { contentType: this.myFiles.type };
      // const uploadTask = storage.ref().child(this.email + "/LAB4/" + this.myFiles.name).put(this.myFiles, metadata);
      const uploadTask = storage.ref().child(this.email + "/LAB6/" + saveName).put(this.myFiles, metadata);
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
        storage.ref().child(this.email + "/LAB6/" + saveName).getDownloadURL().then(function(url) { console.log(url); });
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
  .labexampleexplan1 {
    margin-left: 70px;
    margin-right: 40px;
  }
  .labexampleexplan2 {
    margin-left: 80px;
    margin-right: 40px;
  }
  .labexampleexplan3 {
    margin-left: 90px;
    margin-right: 40px;
  }
</style>