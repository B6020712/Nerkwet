<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br/>
          <h1 style="text-align: center">Assignment : LAB 8</h1>
          <div class="text--primary" style="text-align: center"><strong>ไฟล์การบ้าน:</strong> <a :href='downLoadURL'>คลิกเพื่อดาว์นโหลดไฟล์การบ้าน</a></div>
          <div style="margin-top: 20px;" align="center" justify="center">
            <v-img src="@/assets/lab/lab8/lab8Assignment1.png"></v-img><br/>
          </div>
          <div class="headline text--primary labexplan" style="margin-top:10px;">อธิบาย assignment</div>
          <div class="text--primary labexplan" style="margin-top: 2px">
            1.Server cpe.sut.acth, www.sut.ac.th, DNS server ไม่จำเป็นต้องกำหนดค่า แต่สามารถตรวจสอบความถูกต้องได้<br/>
            2.กำหนดค่า IP Addresses ตาม Figure 2 (ระวังเรื่อง Network Address และ NetMask ด้วย)<br/>
            3.กำหนดค่าการทำงานของ NAT ที่ Router3 เป็น Static NAT
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px">
            > กำหนด Static NAT ให้กับ cpe.sut.ac.th โดยจับคู่ PrivateIP 172.16.1.2 กับ PublicIP 200.200.10.3 <br/>
            > กำหนด Static NAT ให้กับ www.sut.ac.th โดยจับคู่ PrivateIP 172.16.1.6 กับ PublicIP 200.200.10.4<br/>
            > ทำการระบุฝั่ง inside และ outside สำหรับ NAT ให้แต่ละ Interface
          </div>
          <div class="text--primary labexplan" style="margin-top: 2px">
            4.กำหนดค่า Routing เป็น EIGRP AS Number 100 ทั้ง Router3 G0/1, Router1 G0/0 และ Se0/0/0, Router0 Se0/0/0, Se0/0/1 และ G0/1, Router2 Se0/0/1<br/>
            5.ตรวจสอบค่า DNS Server ว่าถูกต้องไหม (พร้อมตรวจสอบ IP address และ Default Gateway)<br/>
            6.กำหนดค่า NAT Overload (PAT) และ Static Route ที่ Router2
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px">
            > กำหนด Access-List สำหรับการทำ NAT สำหรับ Vlan 10 และ Vlan 20 ที่ Router2<br/>
            > กำหนดค่า Pool สำหรับ NAT และนำไปทำงานร่วมกับ Access-List ที่ได้สร้างไว้แบบประเภท NAT Overload (Keyword Overload จะหมายถึงมีการนำค่า Port มาร่วมในการแปลง)<br/>
            > จากรูปเห็นได้ว่าฝั่ง G0/0 จำเป็นต้องกำหนด Static Route ไปยัง Network Vlan 10 (192.168.10.0/24) และ Vlan 20 (192.168.20.0/24) ด้วย<br/>
            > ทำการระบฝั่ง inside และ outside สำหรับ NAT ให้แต่ละ Interface
          </div>
          <div class="text--primary labexplan" style="margin-top: 2px">
            7.กำหนด Multilayer Switch ในส่วน Vlan 10 และ Vlan 20 และเพิ่มการทำงานในส่วน Network Layer (Layer3) คล้าย Router
          </div>
          <div class="text--primary labexplan2" style="margin-top: 2px">
            > กำหนด Vlan 10 และ Vlan 20 เป็น mode access<br/>
            > กำหนด Switch Virtual Interface (SVI) ซึ่งเป็น Logical Interface เพื่อให้ L3 Switch สามารถกำหนด IP address ที่ Logical Interface ไว้เป็น Default Gateway ให้กับ Vlan10 และ Vlan 20<br/>
            > กำหนด IP address ให้กับ g1/0/24 เพื่อทำงานแบบ Layer 3 FastEthernet port (ไม่ต้องมี Vlan)<br/>
            > กำหนดค่าในเรื่อง Routing โดยถ้าเป็น Multilayer Switch จำเป็นต้องเปิดการทำงาน Routing ก่อน<br/>
            > กำหนดค่าในส่วน DHCP ให้กับ Network ข้างหลังคือ Vlan 10 และ Vlan 20 เพราะ PC0 และ PC1 ในนี้จะไม่มีการกำหนดค่า IP address, Default Gateway และ DNS Server
          </div>
          <div class="headline text--primary labexplan" style="margin-top: 15px">สิ่งที่ต้องการ</div>
          <div class="text--primary labexplan" style="margin-top: 2px">
            สามารถ Ping จาก PC0 และ PC1 ไปยัง www.sut.ac.th และ cpe.sut.ac.th ได้<br/>
            <span class="red--text">(ในการ Ping ครั้งแรกอาจใช้เวลาสักเล็กน้อย)</span>
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
                  <v-btn color="indigo" @click="toLab8"><v-icon>mdi-arrow-left-bold-box-outline</v-icon>LAB 8</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="uploadFile">Upload<v-icon>mdi-file-upload-outline</v-icon></v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="green" @click="toLab9">LAB 9<v-icon>mdi-arrow-right-bold-box-outline</v-icon></v-btn>
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
      var starsRef = storage.ref().child('labAssignment/Lab8_Std.pkt');
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
    toLab8() { 
      this.$router.push("/lab8"); 
    },
    toLab9() { 
      this.$router.push("/lab9"); 
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