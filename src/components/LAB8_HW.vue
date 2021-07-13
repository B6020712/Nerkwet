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
          <div class="text--primary labexplan">
            1.Server cpe.sut.acth, www.sut.ac.th, DNS server ไม่จำเป็นต้องกำหนดค่า แต่สามารถตรวจสอบความถูกต้องได้<br/>
            2.กำหนดค่า IP Addresses ตาม Figure 2 (ระวังเรื่อง Network Address และ NetMask ด้วย)
          </div>
          <div class="text--primary labexplan2">
            a) ที่ Router3 Interface ขาใน G0/2 (Network Address เป็น 172.16.1.4/30 จะมี Netmask คือ 255.255.255.252)<br/>
            b) ที่ Router3 Interface ขานอก G0/1 (Network Address เป็น 200.200.10.0/29 จะมี Netmask คือ 255.255.255.248)
          </div>
          <div class="labexplan3">
            <v-btn class="outlined" color="primary" @click="showCommand2Med">Command</v-btn>
          </div>
          <div v-if="showCommand2">
            <div class="text--primary labexplan3">
              a) ที่ Router3 Interface ขาใน G0/2 (Network Address เป็น 172.16.1.4/30 จะมี Netmask คือ 255.255.255.252)
            </div>
            <div class="text--primary labexplan4command">
              > Router3(Config-if)# ip address 172.16.1.5 255.255.255.252
            </div>
            <div class="text--primary labexplan3">
              b) ที่ Router3 Interface ขานอก G0/1 (Network Address เป็น 200.200.10.0/29 จะมี Netmask คือ 255.255.255.248)
            </div>
            <div class="text--primary labexplan4command">
              > Router3(Config-if)# ip address 200.200.10.2 255.255.255.248
            </div>
          </div>
          <div class="text--primary labexplan2">
            3.กำหนดค่าการทำงานของ NAT ที่ Router3 เป็น Static NAT
          </div>
          <div class="text--primary labexplan3">
            a) กำหนด Static NAT ให้กับ cpe.sut.ac.th โดยจับคู่ PrivateIP 172.16.1.2 กับ PublicIP 200.200.10.3 <br/>
            b) กำหนด Static NAT ให้กับ www.sut.ac.th โดยจับคู่ PrivateIP 172.16.1.6 กับ PublicIP 200.200.10.4<br/>
            c) ทำการระบุฝั่ง inside และ outside สำหรับ NAT ให้แต่ละ Interface
          </div>
          <div class="text--primary labexplan2">
            4.กำหนดค่า Routing เป็น EIGRP AS Number 100 ทั้ง Router3 G0/1, Router1 G0/0 และ Se0/0/0, Router0 Se0/0/0, Se0/0/1 และ G0/1, Router2 Se0/0/1
          </div>
          <div class="labexplan3">
            <v-btn class="outlined" color="primary" @click="showCommand4Med">Command</v-btn>
          </div>
          <div v-if="showCommand4">
            <div class="text--primary labexplan3">
              ยกตัวอย่างการกำหนดค่า EGRP AS 100 ให้ Router1 คือ
            </div>
            <div class="text--primary labexplan4command">
              >	Router1(Config)# router eigrp 100<br/>
              >	Router1(Config-router)# network 200.100.10.0 0.0.0.3<br/>
              >	Router1(Config-router)# network 200.200.10.0 0.0.0.7
            </div>
          </div>
          <div class="text--primary labexplan">
            5.ตรวจสอบค่า DNS Server ว่าถูกต้องไหม (พร้อมตรวจสอบ IP address และ Default Gateway)
          </div>
          <div style="margin-top: 10px;" align="center" justify="center">
            <v-img width="500" src="@/assets/lab/lab8/lab8Stuff1.png"></v-img><br/>
          </div>
          <div class="text--primary labexplan">
            6.กำหนดค่า NAT Overload (PAT) และ Static Route ที่ Router2
          </div>
          <div class="text--primary labexplan2">
            a) กำหนด Access-List สำหรับการทำ NAT สำหรับ Vlan 10 และ Vlan 20 ที่ Router2<br/>
            b) กำหนดค่า Pool สำหรับ NAT และนำไปทำงานร่วมกับ Access-List ที่ได้สร้างไว้แบบประเภท NAT Overload (Keyword Overload จะหมายถึงมีการนำค่า Port มาร่วมในการแปลง)<br/>
            c) จากรูปเห็นได้ว่าฝั่ง G0/0 จำเป็นต้องกำหนด Static Route ไปยัง Network Vlan 10 (192.168.10.0/24) และ Vlan 20 (192.168.20.0/24) ด้วย<br/>
            d) ทำการระบุฝั่ง inside และ outside สำหรับ NAT ให้แต่ละ Interface
          </div>
          <div class="labexplan3">
            <v-btn class="outlined" color="primary" @click="showCommand6Med">Command</v-btn>
          </div>
          <div v-if="showCommand6">
            <div class="text--primary labexplan3">
              a) กำหนด Access-List สำหรับการทำ NAT สำหรับ Vlan 10 และ Vlan 20 ที่ Router2<br/>
            </div>
            <div class="text--primary labexplan4command">
              >	Router2(Config)# ip access-list standard NAT_ACL<br/>
              >	Router2(config-std-nacl)# permit {{msg1}}
            </div>
            <div class="text--primary labexplan3">
              b) กำหนดค่า Pool สำหรับ NAT และนำไปทำงานร่วมกับ Access-List ที่ได้สร้างไว้แบบประเภท NAT Overload (Keyword Overload จะหมายถึงมีการนำค่า Port มาร่วมในการแปลง)<br/>
            </div>
            <div class="text--primary labexplan4command">
              >	Router2(config)# ip nat pool NAT 200.100.10.11 200.100.10.12 netmask 255.255.255.248<br/>
              >	Router2(config)# ip nat inside source list {{msg2}} pool {{msg3}} overload
            </div>
            <div class="text--primary labexplan3">
              d) ทำการระบุฝั่ง inside และ outside สำหรับ NAT ให้แต่ละ Interface
            </div>
            <div class="text--primary labexplan4command">
              >	ใช้คำสั่ง Router2(Config-if)# ip nat inside ให้กับ Interface G0/0<br/>
              >	ใช้คำสั่ง Router2(Config-if)# ip nat outside ให้กับ Interface Se0/0/1
            </div>
          </div>
          <div class="text--primary labexplan">
            7.กำหนด Multilayer Switch ในส่วน Vlan 10 และ Vlan 20 และเพิ่มการทำงานในส่วน Network Layer (Layer3) คล้าย Router
          </div>
          <div class="text--primary labexplan2">
            a) กำหนด Vlan 10 และ Vlan 20 เป็น mode access<br/>
            b) กำหนด Switch Virtual Interface (SVI) ซึ่งเป็น Logical Interface เพื่อให้ L3 Switch สามารถกำหนด IP address ที่ Logical Interface ไว้เป็น Default Gateway ให้กับ Vlan10 และ Vlan 20<br/>
            c) กำหนด IP address ให้กับ g1/0/24 เพื่อทำงานแบบ Layer 3 FastEthernet port (ไม่ต้องมี Vlan)<br/>
            d) กำหนดค่าในเรื่อง Routing โดยถ้าเป็น Multilayer Switch จำเป็นต้องเปิดการทำงาน Routing ก่อน<br/>
            e) กำหนดค่าในส่วน DHCP ให้กับ Network ข้างหลังคือ Vlan 10 และ Vlan 20 เพราะ PC0 และ PC1 ในนี้จะไม่มีการกำหนดค่า IP address, Default Gateway และ DNS Server
          </div>
          <div class="labexplan3">
            <v-btn class="outlined" color="primary" @click="showCommand7Med">Command</v-btn>
          </div>
          <div v-if="showCommand7">
            <div class="text--primary labexplan3">
              a) กำหนด Vlan 10 และ Vlan 20 เป็น mode access เช่น
            </div>
            <div class="text--primary labexplan4command">
              >	Switch0(Config)# vlan 10<br/>
              >	Switch0(Config)# interface g1/0/1<br/>
              >	Switch0(Config-if)# switchport mode access<br/>
              >	Switch0(Config-if)# switchport access vlan 10<br/>
              >	ลองกำหนดเองให้ Vlan 20
            </div>
            <div class="text--primary labexplan3">
              b) กำหนด Switch Virtual Interface (SVI) ซึ่งเป็น Logical Interface เพื่อให้ L3 Switch สามารถกำหนด IP address ที่ Logical Interface ไว้เป็น Default Gateway ให้กับ Vlan10 และ Vlan 20
            </div>
            <div class="text--primary labexplan4command">
              >	Switch0(Config)# interface vlan 10<br/>
              >	Switch0(Config-if)# ip address 192.168.10.1 255.255.255.0<br/>
              >	ลองกำหนดเองให้ Vlan 20
            </div>
            <div class="text--primary labexplan3">
              c) กำหนด IP address ให้กับ g1/0/24 เพื่อทำงานแบบ Layer 3 FastEthernet port (ไม่ต้องมี Vlan)
            </div>
            <div class="text--primary labexplan4command">
              >	Switch0(Config)# interface g1/0/24<br/>
              >	Switch0(Config-if)# no switchport<br/>
              >	Switch0(Config-if)# ip address 172.16.1.2 255.255.255.252
            </div>
            <div class="text--primary labexplan3">
              d) กำหนดค่าในเรื่อง Routing โดยถ้าเป็น Multilayer Switch จำเป็นต้องเปิดการทำงาน Routing ก่อน
            </div>
            <div class="text--primary labexplan4command">
              >	Switch0(Config)# ip routing
              >	กำหนดค่า static route สามารถติดต่อกับข้างนอกได้ (เช่น การกำหนดเป็น Default Route ออกไป)
            </div>
            <div class="text--primary labexplan3">
              e) กำหนดค่าในส่วน DHCP ให้กับ Network ข้างหลังคือ Vlan 10 และ Vlan 20 เพราะ PC0 และ PC1 ในนี้จะไม่มีการกำหนดค่า IP address, Default Gateway และ DNS Server
            </div>
            <div class="text--primary labexplan4command">
              >	Switch0(Config)# ip dhcp excluded-address 192.168.20.1<br/>
              >	Switch0(Config)# ip dhcp excluded-address 192.168.10.1 192.168.10.20<br/>
              >	Switch0(Config)# ip dhcp pool VLAN10<br/>
              >	Switch0(dhcp-config)# network 192.168.10.0 255.255.255.0<br/>
              >	Switch0(dhcp-config)# default-router {{msg4}}<br/>
              >	Switch0(dhcp-config)# dns-server {{msg5}}<br/>
              >	ลองกำหนดค่า DHCP ให้ VLAN20
            </div>
          </div>
          <div class="headline text--primary labexplan" style="margin-top: 15px">สิ่งที่ต้องการ</div>
          <div class="text--primary labexplan">
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
                <p class="subtitle-1 text--primary" style="text-align: center"><strong>สำหรับส่งไฟล์ .pkt</strong></p>
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
      msg1: "<Network Address> <Wildcard Address>",
      msg2: "<ACL-name>",
      msg3: "<Pool-name>",
      msg4: "<ip_address_ที่ต้องการให้เป็นDefaultGateway>",
      msg5: "<ip_address_DNS_Server>",
      showCommand2: false,
      showCommand4: false,
      showCommand6: false,
      showCommand7: false,
      downLoadURL: '',
      readyToDoQuest: false,
      name: 'LAB8',
      quest1: { title: 'lab8_no1', headermsg: '1. Port Security และ ACL แตกต่างกันอย่างไร' },
      quest2: { title: 'lab8_no2', headermsg: '2. สามารถเปิด wwww.sut.ac.th จาก PC1 และ PC0 ได้หรือไม่' },
      choice1: [
        { no: 1, msg: 'Port Security จะสนใจที่ระดับ Layer 1 , ACL สนใจที่ระดับ 2' },
        { no: 2, msg: 'Port Security จะสนใจที่ระดับ Layer 2 , ACL สนใจที่ระดับ Layer 2 และ 4' },
        { no: 3, msg: 'Port Security จะสนใจที่ระดับ Layer 3 และ 4 , ACL สนใจที่ระดับ Layer 2' },
        { no: 4, msg: 'Port Security จะสนใจที่ระดับ Layer 2 , ACL สนใจที่ระดับ Layer 3 และ 4' },
      ],
      choice2: [
        { no: 1, msg: 'ได้' },
        { no: 2, msg: 'ไม่ได้' },
      ],
      dialog: false,
      lab8_no1: Number,
      lab8_no2: Number,
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
    toLab8() { this.$router.push("/lab8") },
    toLab9() { this.$router.push("/lab9") },
    showCommand2Med() { this.showCommand2 = (this.showCommand2 == true) ? false : true },
    showCommand4Med() { this.showCommand4 = (this.showCommand4 == true) ? false : true },
    showCommand6Med() { this.showCommand6 = (this.showCommand6 == true) ? false : true },
    showCommand7Med() { this.showCommand7 = (this.showCommand7 == true) ? false : true },
    checkResult (LAB8_NO1, LAB8_NO2) {
      if (LAB8_NO1 == 4 && LAB8_NO2 == 1) { 
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
      const saveName = email + "_LAB8Assignment1";
      var metadata = { contentType: this.myFiles.type };
      // const uploadTask = storage.ref().child(this.email + "/LAB4/" + this.myFiles.name).put(this.myFiles, metadata);
      const uploadTask = storage.ref().child(email + "/LAB8/" + saveName).put(this.myFiles, metadata);
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
        storage.ref().child(email + "/LAB8/" + saveName).getDownloadURL().then(function(url) { console.log(url); });
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