<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <div>
            <br/>
            <h1 style="text-align: center">Assignment : LAB 3</h1>
            <div class="text--primary" style="text-align: center; margin-top: 10px;">
              <strong>Lab31_Std.pkt:</strong> <a :href='downLoadURL1'>คลิกเพื่อดาว์นโหลดไฟล์การบ้าน</a><br/>
              <strong>Lab32_Std.pkt:</strong> <a :href='downLoadURL2'>คลิกเพื่อดาว์นโหลดไฟล์การบ้าน</a>
            </div>
            <v-stepper class="mt-12" non-linear value="2">
              <v-stepper-header>
                <v-stepper-step editable step="1">
                  Lab31_Std
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step editable step="2">
                  Lab32_Std
                </v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <!-- LAB31_Std.pkt -->
                <v-stepper-content step="1">
                  <div align="center" justify="center">
                    <v-img width="600" src="@/assets/lab/lab3/lab3Assignment1.png"></v-img><br/>
                  </div>
                  <div class="headline text--primary labexplan">อธิบาย assignment</div>
                  <div class="text--primary labexplan" style="margin-top: 2px">
                    1.ทำการเชื่อมต่อสาย UTP ระหว่าง Multilayer Switch เข้ากับ Laptop หรือ PC ดังภาพด้านบน<br/>
                    2.ทำการตั้งค่า IP Address โดยกำหนดการจัดสรร IP แบบ Classful โดย IP ที่ใช้ในการจัดสรรค์มีดังนี้<br/>
                  </div>
                  <table class="labexplan2" style="width:70%; margin-top:10px;">
                    <tr>
                      <td><div class="tabletext">VLAN10</div></td>
                      <td><div class="tabletext">VLAN20</div></td>
                      <td><div class="tabletext">VLAN30</div></td>
                    </tr>
                    <tr>
                      <td><div class="tabletext">10.1.1.0/24</div></td>
                      <td><div class="tabletext">10.1.2.0/24</div></td>
                      <td><div class="tabletext">10.1.3.0/24</div></td>
                    </tr>
                  </table>
                  <!-- <table class="labexplan2" style="width:70%; margin-top:10px;">
                    <tr>
                      <td></td>
                      <td><div class="tabletext">VLAN10</div></td>
                      <td><div class="tabletext">VLAN20</div></td>
                      <td><div class="tabletext">VLAN30</div></td>
                    </tr>
                    <tr>
                      <td><div class="tabletext">A1-A2</div></td>
                      <td><div class="tabletext">10.1.1.0/24</div></td>
                      <td><div class="tabletext">10.1.2.0/24</div></td>
                      <td><div class="tabletext">10.1.3.0/24</div></td>
                    </tr>
                    <tr>
                      <td><div class="tabletext">B1-B2</div></td>
                      <td><div class="tabletext">10.2.1.0/24</div></td>
                      <td><div class="tabletext">10.2.2.0/24</div></td>
                      <td><div class="tabletext">10.2.3.0/24</div></td>
                    </tr>
                    <tr>
                      <td><div class="tabletext">C1-C2</div></td>
                      <td><div class="tabletext">10.3.1.0/24</div></td>
                      <td><div class="tabletext">10.3.2.0/24</div></td>
                      <td><div class="tabletext">10.3.3.0/24</div></td>
                    </tr>
                    <tr>
                      <td><div class="tabletext">D1-D2</div></td>
                      <td><div class="tabletext">10.4.1.0/24</div></td>
                      <td><div class="tabletext">10.4.2.0/24</div></td>
                      <td><div class="tabletext">10.4.3.0/24</div></td>
                    </tr>
                    <tr>
                      <td><div class="tabletext">E1-E2</div></td>
                      <td><div class="tabletext">10.5.1.0/24</div></td>
                      <td><div class="tabletext">10.5.2.0/24</div></td>
                      <td><div class="tabletext">10.5.3.0/24</div></td>
                    </tr>
                    <tr>
                      <td><div class="tabletext">F1-F2</div></td>
                      <td><div class="tabletext">10.6.1.0/24</div></td>
                      <td><div class="tabletext">10.6.2.0/24</div></td>
                      <td><div class="tabletext">10.6.3.0/24</div></td>
                    </tr>
                  </table> -->
                  <div class="headline text--primary labexplan" style="margin-top: 15px">สิ่งที่ต้องการ</div>
                  <div class="text--primary labexplan" style="margin-top: 2px">
                    1. PC สามารถ Ping ไปยังทุก PC ได้ทั้ง Vlan เดียวกันและข้าม Vlan<br/>
                  </div>
                </v-stepper-content>

                <!-- LAB32_Std.pkt -->
                <v-stepper-content step="2">
                  <div align="center" justify="center">
                    <v-img width="900" src="@/assets/lab/lab3/lab3Assignment2.png"></v-img><br/>
                  </div>
                  <div class="headline text--primary labexplan">อธิบาย assignment</div>
                  <div class="text--primary labexplan" style="margin-top: 2px">
                    ให้ทำการตั้งค่า VLAN และ Trunk ตามตารางด้านล่าง<br/>
                  </div>
                  <table class="labexplan2" style="width:70%; margin-top:10px;">
                    <tr>
                      <td><div class="tabletext">Description</div></td>
                      <td><div class="tabletext">SW0</div></td>
                      <td><div class="tabletext">SW1</div></td>
                    </tr>
                    <tr>
                      <td><div class="tabletext">VLAN Name</div></td>
                      <td><div class="tabletext">VLAN10: CPE<br/>VLAN20: TCE</div></td>
                      <td><div class="tabletext">VLAN10: CPE<br/>VLAN20: TCE</div></td>
                    </tr>
                    <tr>
                      <td><div class="tabletext">VLAN</div></td>
                      <td><div class="tabletext">Fa0/1: VLAN10<br/>Fa0/2: VLAN10<br/>Fa0/14: VLAN20<br/></div></td>
                      <td><div class="tabletext">Fa0/1: VLAN20<br/>Fa0/13: VLAN20<br/>Fa0/2: VLAN10<br/></div></td>
                    </tr>
                    <tr>
                      <td><div class="tabletext">Trunk Port</div></td>
                      <td><div class="tabletext">G0/1</div></td>
                      <td><div class="tabletext">G0/2</div></td>
                    </tr>
                  </table>
                  <div class="text--primary labexplan" style="margin-top: 10px;">
                    สร้างการเชื่อมต่อเครือข่ายดังรูปด้านบน เฉพาะ Switch0 (ที่สาขา CPE) ด้านซ้ายของรูป
                  </div>
                  <div class="text--primary labexplan2">
                    a.	สร้าง VLANs และกำหนดชื่อให้ Switch0<br/>
                    b.	กำหนดค่า VLAN ให้กับแต่ละ port ตามที่เราต้องการ
                  </div>
                  <div class="text--primary labexplan" style="margin-top: 5px;">
                    สร้างการเชื่อมต่อเครือข่ายดังรูปด้านบน เฉพาะ Switch1 (ที่สาขา TCE) ด้านขวาของรูป
                  </div>
                  <div class="text--primary labexplan2">
                    a.	สร้าง VLANs และกำหนดชื่อให้ Switch0<br/>
                    b.	กำหนดค่า VLAN ให้กับแต่ละ port ตามที่เราต้องการ<br/>
                    c.	สร้าง Trunk ระหว่าง SW0 และ SW1
                  </div>
                  <div class="text--primary labexplan3" style="margin-top: 2px">
                    คำสั่งที่ใช้ในการสร้าง Trunk และตรวจสอบ
                  </div>
                  <div class="text--primary font-italic labexplan3" style="margin-top: 2px">
                    > Switch# configure terminal<br/>
                    > Switch(config)# interface g0/1<br/>
                    > Switch(config)# switchport trunk allowed vlan 10,20<br/>
                    > Switch(config-if)# switchport mode trunk<br/>
                    > Switch(config-if)# no shutdown<br/>
                    > Switch# show interface trunk<br/>
                    ทำแบบเดียวกันที่ Switch อีกเครื่อง
                  </div>
                  <div class="headline text--primary labexplan" style="margin-top: 15px">สิ่งที่ต้องการ</div>
                  <div class="text--primary labexplan" style="margin-top: 2px">
                    1. CPE0 สามารถ Ping ไปยัง CPE-Std ที่นั่งอยู่ในสาขา TCE ได้<br/>
                    2. TCE1 สามารถ Ping ไปยัง TCE-Std ที่นั่งอยู่ในสาขา CPE ได้
                  </div>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto">
          <br/>
          <v-row>
            <v-card-text>
              <div v-if="!readyToDoQuest">
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
                  <p class="subtitle-1 text--primary" style="text-align: center"><strong>สำหรับส่งไฟล์ .pkt (ส่งทีละไฟล์)</strong></p>
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
          </v-row>
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
      downLoadURL1: '',
      downLoadURL2: '',
      readyToDoQuest: false,
      name: 'LAB2',
      quest1: { title: 'lab2_no1', headermsg: '1.ข้อใดคือคำสั่งที่ใช้สร้างและกำหนดชื่อให้กับ vlan' },
      quest2: { title: 'lab2_no2', headermsg: '2.คำสั่งเพื่อสร้าง Trunk มีไว้เพื่อจุดประสงค์ใด' },
      choice1: [
        { no: 1, msg: 'Switch(config)# vlan <หมายเลข> และ Switch(config-vlan)# name <ชื่อของ vlan>' },
        { no: 2, msg: 'Switch(config)# vlan <หมายเลข> and name <ชื่อของ vlan>' },
        { no: 3, msg: 'Switch(config)# vlan and name <หมายเลข, ชื่อของ vlan>' },
        { no: 4, msg: 'Switch(config)# vlan <หมายเลข> <ชื่อของ vlan>' },
      ],
      choice2: [
        { no: 1, msg: 'เพื่อกำหนดเส้นทางให้ทุกการติดต่อต้องผ่าน port ที่เป็น trunk เท่านั้น' },
        { no: 2, msg: 'เพื่อส่ง traffic ของหลายๆ VLAN ได้ภายใน port เดียวกัน' },
        { no: 3, msg: '' },
        { no: 4, msg: '' },
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
      var starsRef1 = storage.ref().child('labAssignment/Lab31_Std.pkt');
      var starsRef2 = storage.ref().child('labAssignment/Lab32_Std.pkt');
      starsRef1.getDownloadURL()
      .then((url) => {
        this.downLoadURL1 = url;
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

      starsRef2.getDownloadURL()
      .then((url) => {
        this.downLoadURL2 = url;
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
    toLab3() { this.$router.push("/lab3"); },
    toLab4() { this.$router.push("/lab4"); },
    checkResult (LAB2_NO1, LAB2_NO2) {
      if (LAB2_NO1 == 1 && LAB2_NO2 == 2) { 
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
      const saveName = email + "_LAB3Assignment1";
      var metadata = { contentType: this.myFiles.type };
      // const uploadTask = storage.ref().child(this.email + "/LAB2/" + this.myFiles.name).put(this.myFiles, metadata);
      const uploadTask = storage.ref().child(this.email + "/LAB3/" + saveName).put(this.myFiles, metadata);
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
        storage.ref().child(this.email + "/LAB3/" + saveName).getDownloadURL().then(function(url) { console.log(url); });
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
    margin-left: 10px;
    margin-right: 10px;
  }
  .labexplan2 {
    margin-left: 20px;
    margin-right: 10px;
  }
  .labexplan3 {
    margin-left: 30px;
    margin-right: 10px;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  .tabletext {
    margin-left: 5px;
  }
</style>