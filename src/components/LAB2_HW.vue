<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br/>
          <h1 style="text-align: center">Assignment : LAB 2</h1>
          <div class="headline text--primary labexplan" style="margin-top:10px;">อธิบาย assignment</div>
          <div class="text--primary labexplan">
            1.ใช้การกำหนดค่าของบริษัท A ตาม LAB 2 (แต่ Router ของบริษัท A เปลี่ยนรุ่น) และให้เพิ่มบริษัท B ซึ่งได้ร้องขอ block of address จากบริษัท A โดยทางบริษัท A ได้จัดสรร IP ให้กับ
            บริษัท B จำนวน 512 IP Addresses ด้วย block of addresses เริ่มที่ 172.16.100.0/23 บริษัท B มีทั้งหมด 2 สาขาย่อย
          </div>
          <div class="text--primary labexplan3">
            <b>สาขาที่ 3 มีจำนวน Host ทั้งหมด 220 เครื่อง</b><br/>
            <b>สาขาที่ 4 มีจำนวน Host ทั้งหมด 100 เครื่อง</b>
          </div>
          <div class="text--primary labexplan">
            2.ที่บริษัท B ให้ทำการจัดสรร IP ให้กับ สาขาที่ 3 และ สาขาที่ 4 โดยให้ <br/>
          </div>
          <div class="text--primary labexplan2">
            a. จัดสรร IP address ให้กับ interface ของ router แต่ละสาขาเป็น IP address แรกที่ใช้ได้<br/>
            b. ถัดมาจึงจัดสรร IP address ให้กับ PC ทั้งสองของสาขานั้นๆ โดยให้ PC เครื่องใดก็ได้มี IP address ที่เป็นเลขสุดท้ายที่ใช้ได้(ไม่นับ Broadcast address)<br/>
            c. หลังจากจัดสรร IP address ให้ PC แล้วให้กำหนด Default gateway ที่ PC แต่ละตัวเป็น IP address จาก Interface ของ Router ที่สาขานั้นๆ เชื่อมต่ออยู่ (g0/0 ของสาขา1 และ g0/1 ของสาขา2)<br/>
            d. IP address ของบริษัท B เริ่มตั้งแต่ 172.16.100.1 เป็นต้นไป<br/>
            e. โดย PC ของบริษัท B ทั้งสาขาที่ 3 และ 4 จะต้องสามารถ ping ไปยัง Router ของบริษัท A ได้<br/>
            Note: เริ่ม ping ครั้งแรกอาจจะไม่สำเร็จ ให้ลอง ping ซ้ำอีกครั้ง (อุปกรณ์กำลังเรียนรู้)
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
                  <v-btn color="indigo" @click="toLab2"><v-icon>mdi-arrow-left-bold-box-outline</v-icon>LAB 2</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="uploadFile">Upload<v-icon>mdi-file-upload-outline</v-icon></v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="green" @click="toLab3">LAB 3<v-icon>mdi-arrow-right-bold-box-outline</v-icon></v-btn>
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
      quest1: { title: 'lab2_no1', headermsg: '1. ข้อใดคือความแตกต่างของ enable password กับ enable secret' },
      quest2: { title: 'lab2_no2', headermsg: '2. หากต้องการตั้งค่า gateway ให้กับ PC ต้องทำอย่างไร' },
      choice1: [
        { no: 1, msg: 'enable password ผ่านการ encoding ส่วน enable secret ไม่ผ่านการ encoding' },
        { no: 2, msg: 'enable password ผ่านการเข้ารหัสแบบ SHA256 ส่วน enable secret ผ่านการเข้ารหัสแบบ SHA512' },
        { no: 3, msg: 'enable password ไม่ผ่านการ encoding ส่วน enable secret ผ่านการ encoding' },
        { no: 4, msg: 'enable password ผ่านการเข้ารหัสแบบ SHA512 ส่วน enable secret ผ่านการเข้ารหัสแบบ SHA256' },
      ],
      choice2: [
        { no: 1, msg: 'คลิกที่รูป PC ที่ต้องการ => หน้าต่าง Config => FastEthernet0 => Gateway' },
        { no: 2, msg: 'คลิกที่รูป PC ที่ต้องการ => หน้าต่าง Config => Bluetooth => Gateway' },
        { no: 3, msg: 'คลิกที่รูป PC ที่ต้องการ => หน้าต่าง Config => Setting => Gateway' },
        { no: 4, msg: 'คลิกที่รูป PC ที่ต้องการ => หน้าต่าง Config => Algorithm Settings => Gateway' },
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
      this.logInSign = !!user;
      if(user) {
        this.email = user.email;
        this.refreshToken = user.refreshToken;
      }
    })
  },
  methods: {
    toLab2() { this.$router.push("/lab2") },
    toLab3() { this.$router.push("/lab3") },
    checkResult (LAB2_NO1, LAB2_NO2) {
      if (LAB2_NO1 == 3 && LAB2_NO2 == 3) { 
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
      const saveName = email + "_LAB2Assignment1";
      var metadata = { contentType: this.myFiles.type };
      // const uploadTask = storage.ref().child(this.email + "/LAB4/" + this.myFiles.name).put(this.myFiles, metadata);
      const uploadTask = storage.ref().child(email + "/LAB2/" + saveName).put(this.myFiles, metadata);
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
        storage.ref().child(email + "/LAB2/" + saveName).getDownloadURL().then(function(url) { console.log(url); });
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