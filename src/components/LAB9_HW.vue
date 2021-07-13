<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br/>
          <h1 style="text-align: center">Assignment : LAB 9</h1>
          <div class="text--primary" style="text-align: center"><strong>ไฟล์การบ้าน:</strong> <a :href='downLoadURL'>คลิกเพื่อดาว์นโหลดไฟล์การบ้าน</a></div>
          <div style="margin-top: 20px;" align="center" justify="center">
            <v-img src="@/assets/lab/lab9/lab9Assignment1.png"></v-img><br/>
          </div>
          <div class="headline text--primary labexplan" style="margin-top:10px;">อธิบาย assignment</div>
          <div class="text--primary labexplan">
            1.cpe.sut.ac.th (เป็นทั้ง FTP และ Web server), DNS server ไม่จำเป็นต้องกำหนดค่า แต่สามารถตรวจสอบความถูกต้องได้<br/>
            2.ใช้แต่ Static Routing ไม่มีการใช้ Dynamic Routing<br/>
            3.กำหนดค่าที่ Router3 ตาม Figure 1 (ระวังเรื่อง Network Address และ NetMask ด้วย)
          </div>
          <div class="text--primary labexplan2">
            a. กำหนดค่า NAT แบบ Overload โดย G0/1 เป็น nat inside และ Se0/0/0 เป็น nat outside
          </div>
          <div class="text--primary labexplan3">
            > NAT pool มี 2 public addresses คือ 100.100.100.4 และ 100.100.100.5 netmask 255.255.255.248 (คือ /29) 
          </div>
          <div class="text--primary labexplan2">
            b. กำหนด Static Routing ให้ติดต่อกับ Server ทั้งสองได้ และทางกลับกัน Server ทั้งสองจะติดต่อกับ Vlan10 และ Vlan20 ได้เช่นกัน
          </div>
          <div class="text--primary labexplan">
            4.กำหนดค่าที่ Router4 ตาม Figure 1 (ระวังเรื่อง Network Address และ NetMask ด้วย)
          </div>
          <div class="text--primary labexplan2">
            a. กำหนด Static Route ให้ถูกต้อง
          </div>
          <div class="text--primary labexplan">
            5.กำหนดค่าที่ Multilayer Switch ตาม Figure 1 (ระวังเรื่อง Network Address และ NetMask ด้วย)
          </div>
          <div class="text--primary labexplan2">
            a. กำหนด Vlan 10 ให้ G1/0/1 และ G1/0/2<br/>
            b. กำหนด Vlan 20 ให้ G1/0/3 และ G1/0/4<br/>
            c. กำหนด Switch Virtual Interface (SVI) ซึ่งเป็น Logical Interface เพื่อให้ L3 Switch สามารถกำหนด IP address ที่ Logical Interface ไว้เป็น Default Gateway ให้กับ Vlan10 และ Vlan 20<br/>
            d. กำหนด IP address ให้กับ g1/0/24 เพื่อทำงานแบบ Layer 3 FastEthernet port (ไม่ต้องมี Vlan)<br/>
            e. กำหนด Static Route (อย่าลืมเปิด ip routing)<br/>
            f. กำหนดค่าในส่วน DHCP ให้เฉพาะ <span class="red--text">Vlan10</span> สำหรับค่า IP address, Default Gateway และ DNS Server
          </div>
          <div class="labexplan3">
            <v-btn class="outlined" color="primary" @click="showCommand5Med">Command</v-btn>
          </div>
          <div v-if="showCommand5">
            <div class="text--primary labexplan3">
              c. กำหนด Switch Virtual Interface (SVI) ซึ่งเป็น Logical Interface เพื่อให้ L3 Switch สามารถกำหนด IP address ที่ Logical Interface ไว้เป็น Default Gateway ให้กับ Vlan10 และ Vlan 20<br/>
            </div>
            <div class="text--primary labexplan4command">
              > Switch0(Config)# interface vlan 10<br/>
              > Switch0(Config-if)# ip address 192.168.10.1 255.255.255.0<br/>
              > กำหนดให้ Vlan 20
            </div>
            <div class="text--primary labexplan3">
              d. กำหนด IP address ให้กับ g1/0/24 เพื่อทำงานแบบ Layer 3 FastEthernet port (ไม่ต้องมี Vlan)<br/>
            </div>
            <div class="text--primary labexplan4command">
              > Switch0(Config)# interface g1/0/24<br/>
              > Switch0(Config-if)# no switchport<br/>
              > Switch0(Config-if)# ip address 172.16.1.2 255.255.255.252
            </div>
            <div class="text--primary labexplan3">
              f. กำหนดค่าในส่วน DHCP ให้เฉพาะ <span class="red--text">Vlan10</span> สำหรับค่า IP address, Default Gateway และ DNS Server
            </div>
            <div class="text--primary labexplan4command">
              >	Switch0(Config)# ip dhcp excluded-address 192.168.10.1<br/>
              >	Switch0(Config)# ip dhcp pool VLAN10<br/>
              >	Switch0(dhcp-config)# network 192.168.10.0 255.255.255.0<br/>
              >	Switch0(dhcp-config)# default-router {{msg1}}<br/>
              >	Switch0(dhcp-config)# dns-server {{msg2}}<br/>
            </div>
          </div>
          <div class="text--primary labexplan">
            6.กำหนดค่า Access Control Lists แบบ Extended Numbered 110 ที่ Router3 โดยมีเงื่อนไขดังนี้
          </div>
          <div style="margin-top: 20px;" align="center" justify="center">
            <v-img width="500" src="@/assets/lab/lab9/table1.png"></v-img><br/>
          </div>
          <div class="text--primary labexplan2">
            a. Deny ทุกการติดต่อจาก PC5<br/>
            b.	Deny เฉพาะ DNS สำหรับ Vlan20<br/>
            c. Deny ทุกการเชื่อมต่อที่เป็น ICMP<br/>
            d. Permit จากเชื่อมต่อจาก Vlan10 และ Vlan20 สำหรับกรณีอื่นนอกจากที่กำหนดข้างบน<br/>
            e. กำหนด Extended Numbered ACL ที่ G0/1 เป็น inbound
          </div>
          <div class="labexplan3">
            <v-btn class="outlined" color="primary" @click="showCommand6Med">Command</v-btn>
          </div>
          <div v-if="showCommand6">
            <div class="text--primary labexplan3">
              a. Deny ทุกการติดต่อจาก PC5
            </div>
            <div class="text--primary labexplan4command">
              >	Router3(Config)# access-list 110 deny ip host 192.168.20.12 any
            </div>
            <div class="text--primary labexplan3">
              b.	Deny เฉพาะ DNS สำหรับ Vlan20
            </div>
            <div class="text--primary labexplan4command">
              > Router3(Config)# access-list 110 deny udp 192.168.20.0 0.0.0.255 host 100.100.255.2 eq domain
            </div>
            <div class="text--primary labexplan3">
              c. Deny ทุกการเชื่อมต่อที่เป็น ICMP<br/>
              d. Permit จากเชื่อมต่อจาก Vlan10 และ Vlan20 สำหรับกรณีอื่นนอกจากที่กำหนดข้างบน
            </div>
            <div class="text--primary labexplan4command">
              >	Router3(Config)# access-list 110 permit ip 192.168.10.0 0.0.0.255 any<br/>
              >	Router3(Config)# access-list 110 permit ip 192.168.20.0 0.0.0.255 any
            </div>
            <div class="text--primary labexplan3">
              e. กำหนด Extended Numbered ACL ที่ G0/1 เป็น inbound<br/>
            </div>
            <div class="text--primary labexplan4command">
              > Router3(Config-if)# ip access-group 110 in
            </div>
          </div>
          <div class="text--primary labexplan">
            7.กำหนดค่า Access Control Lists แบบ Extended Named ACL ที่ Router4 โดยมีเงื่อนไขดังนี้
          </div>
          <div class="text--primary labexplan2">
            a. Permit เฉพาะ www จาก Public IP จาก Vlan10, Vlan20 และให้ FTP จาก DNS Server เท่านั้น<br/>
            b. Deny ทุกการเชื่อมต่อที่เป็น ICMP จาก Network ฝั่งซ้าย (รวม Router3) ทั้งหมด แต่ Permit อย่างอื่น<br/>
            c. Permit สำหรับ DNS จากทุกที่รวมถึง Network ฝั่งซ้าย (Router3, Vlan10 และ Vlan20) และจาก cpe.sut.ac.th<br/>
            d. กำหนด Named ACL FTP_WWW_SERVER ที่ G0/1 เป็น outbound<br/>
            e. กำหนด Named ACL DENY_ICMP ที่ S0/0/1 เป็น inbound<br/>
            f. กำหนด Named ACL ALLOW_DNS_SERVER ที่ G0/2 เป็น outbound
          </div>
          <div class="labexplan3">
            <v-btn class="outlined" color="primary" @click="showCommand7Med">Command</v-btn>
          </div>
          <div v-if="showCommand7">
            <div class="text--primary labexplan3">
              a. Permit เฉพาะ www จาก Public IP จาก Vlan10, Vlan20 และให้ FTP จาก DNS Server เท่านั้น
            </div>
            <div class="text--primary labexplan4command">
              >	Router4(Config)# ip access-list extended FTP_WWW_SERVER<br/>
              >	Router4(Config-ext-nacl)# permit tcp 100.100.100.0 0.0.0.7 host 100.100.200.2 eq www<br/>
              >	Router4(Config-ext-nacl)# permit tcp host 100.100.255.2 host 100.100.200.2 eq ftp
            </div>
            <div class="text--primary labexplan3">
              b. Deny ทุกการเชื่อมต่อที่เป็น ICMP จาก Network ฝั่งซ้าย (รวม Router3) ทั้งหมด แต่ Permit อย่างอื่น
            </div>
            <div class="text--primary labexplan4command">
              >	Router4(Config)# ip access-list extended DENY_ICMP<br/>
              >	ลองกำหนดเอง
            </div>
            <div class="text--primary labexplan3">
              c. Permit สำหรับ DNS จากทุกที่รวมถึง Network ฝั่งซ้าย (Router3, Vlan10 และ Vlan20) และจาก cpe.sut.ac.th
            </div>
            <div class="text--primary labexplan4command">
              > Router4(Config)# ip access-list extended ALLOW_DNS_SERVER<br/>
              >	ลองกำหนดเอง
            </div>
            <div class="text--primary labexplan3">
              d. กำหนด Named ACL FTP_WWW_SERVER ที่ G0/1 เป็น outbound
            </div>
            <div class="text--primary labexplan4command">
              >	Router3(Config-if)# ip access-group FTP_WWW_SERVER out
            </div>
          </div>
          <div class="text--primary labexplan">
            8.สามารถตรวจสอบค่า ACL ที่กำหนดไปด้วยคำสั่ง
          </div>
          <div class="text--primary labexplan3">
            > Router# show access-lists
          </div>
          <div class="headline text--primary labexplan" style="margin-top: 15px">สิ่งที่ต้องการ</div>
          <div class="text--primary labexplan">
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
                  <v-btn color="indigo" @click="toLab9"><v-icon>mdi-arrow-left-bold-box-outline</v-icon>LAB 9</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="uploadFile">Upload<v-icon>mdi-file-upload-outline</v-icon></v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="green" @click="toHome">Home<v-icon>mdi-home</v-icon></v-btn>
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
      msg1: "<ip_address_ที่ต้องการให้เป็นDefaultGateway>",
      msg2: "<ip_address_DNS_Server>",
      downLoadURL: '',
      showCommand5: false,
      showCommand6: false,
      showCommand7: false,
      readyToDoQuest: false,
      name: 'LAB9',
      quest1: { title: 'lab9_no1', headermsg: '1. ถ้าเปิด Web browser โดยใช้ PC4 ต้องกำหนด URL คืออะไรที่สามารถเปิดหน้าเว็บ cpe.sut.ac.th ได้' },
      quest2: { title: 'lab9_no2', headermsg: '2. PC2 และ DNS Server ทำการ ftp ไปยัง 100.100.200.2 สำเร็จหรือไม่' },
      choice1: [
        { no: 1, msg: '100.100.200.2' },
        { no: 2, msg: 'cpe.sut.ac.th' },
        { no: 3, msg: 'www.cpe.sut.ac.th' },
        { no: 4, msg: 'http://cpe.sut.ac.th' },
      ],
      choice2: [
        { no: 1, msg: 'ทั้ง PC2 และ DNS Server ไม่สามารถ ftp ได้สำเร็จ' },
        { no: 2, msg: 'ทั้ง PC2 และ DNS Server สามารถ ftp ได้สำเร็จ' },
        { no: 3, msg: 'PC2 ไม่สำเร็จแต่ DNS Server สำเร็จ' },
        { no: 4, msg: 'PC2 สำเร็จแต่ DNS Server ไม่สำเร็จ' },
      ],
      dialog: false,
      lab9_no1: Number,
      lab9_no2: Number,
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
      var starsRef = storage.ref().child('labAssignment/Lab9_Std.pkt');
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
    toLab8() { this.$router.push("/lab9"); },
    toHome() { this.$router.push("/home"); },
    showCommand5Med() { this.showCommand5 = (this.showCommand5 == true) ? false : true },
    showCommand6Med() { this.showCommand6 = (this.showCommand6 == true) ? false : true },
    showCommand7Med() { this.showCommand7 = (this.showCommand7 == true) ? false : true },
    checkResult (LAB9_NO1, LAB9_NO2) {
      if (LAB9_NO1 == 1 && LAB9_NO2 == 3) { 
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
      const saveName = email + "_LAB9Assignment1";
      var metadata = { contentType: this.myFiles.type };
      // const uploadTask = storage.ref().child(this.email + "/LAB4/" + this.myFiles.name).put(this.myFiles, metadata);
      const uploadTask = storage.ref().child(email + "/LAB9/" + saveName).put(this.myFiles, metadata);
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
        storage.ref().child(email + "/LAB9/" + saveName).getDownloadURL().then(function(url) { console.log(url); });
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