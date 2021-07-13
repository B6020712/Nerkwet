<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br />
          <div class="display-3 mb-3 text-center">LAB 6</div>
          <div class="title font-regular text-center">Static Routing (2)</div>
          <div align="center" justify="center">
            <v-img width="1100" src="@/assets/lab/lab6/lab6Learning1.png"></v-img><br/>
          </div>
          <div class="title font-regular text-center">ไฟล์แลป: <a :href='downLoadURL'>คลิกเพื่อดาว์นโหลดไฟล์แลป</a></div><br/>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto">
          <br/>
          <div class="headline text--primary labexplan">อธิบายวิธีการทำ</div>
          <div class="text--primary labexplan">
            1.ดาวน์โหลดและเปิดไฟล์ LAB6.pkt<br/>
            2.IP address ทุก subnet มี subnet mask คือ /24 แบบ Classful<br/>
            3.ให้นักศึกษาวางแผนและกำหนดเส้นทาง (Route Planning) เพื่อให้ Packet Forwarding โดยใช้เส้นทางที่มีจำนวน hop น้อยที่สุด (the shortest routes)<br/>
            4.ไม่จำเป็นต้องกำหนดค่าทุก Interfaces หรือทุกเส้นทาง (ให้กำหนดค่าเฉพาะที่ต้องการในการหาเส้นทางที่สั้นที่สุดก็พอ)<br/>
            5.ไม่ต้องกำหนดค่าเพิ่มเติมที่ IXP
          </div>
          <div class="headline text--primary labexplan" style="margin-top: 15px">หากทำสำเร็จ</div>
          <div class="text--primary labexplan">
            a.สามารถ ping จาก PC2 ไปยัง PC1<br/>
            b.สามารถ ping จาก PC1 ไปยัง PC0
          </div>
          
          <br/>
          <div class="d-flex justify-space-around mb-6 outlined">
            <!-- <v-spacer></v-spacer>
            <v-btn @click="labresult" color="red">Result</v-btn> -->
            <v-spacer></v-spacer>
            <v-btn @click="labcommand" color="primary">Command</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="gotoHomework" color="green">Homework</v-btn>
            <v-spacer></v-spacer>
          </div>
          <br/>

          <div v-if="result" class="text--primary">
            <v-divider></v-divider><br/>
            <div class="headline text--primary labexplan">ผลลัพธ์ของการทำแลป</div>
            <div class="labexplan2">> ping จาก A1 ไปยัง A2 (Vlan10)</div><br/>
            <div align="center" justify="center">
              <!-- <v-img width="550" src="@/assets/lab/lab4/lab4Result1.png"></v-img><br/> -->
            </div>
            <div class="labexplan2">> ping จาก B2 ไปยัง B1 (Vlan20)</div><br/>
            <div align="center" justify="center">
              <!-- <v-img width="550" src="@/assets/lab/lab4/lab4Result2.png"></v-img><br/> -->
            </div>
            <br/>
          </div>
            
          <div v-if="command" class="text--primary">
            <v-divider></v-divider><br/>
            <div class="headline text--primary labexplan">คำสั่งที่ใช้ในการทำ</div>
            <div class="labexplan">
              1.กำหนด ip address และ subnet mask
            </div>
            <div class="labexplan2 font-italic">
              > Router(config-if)# ip address 172.16.x.x 255.255.x.x<br/>
              > Router(config-if)# no shutdown
            </div>
            <div class="labexplan">
              2.กำหนดเส้นทาง 
            </div>
            <div class="labexplan2 font-italic">
              > Router0(config) #ip route เครือข่ายปลายทาง subnet_mask gateway<br/>
              > Router0(config) #ip route 223.1.1.0 255.255.255.0 223.1.8.2<br/>
              > Router0(config) #ip route 223.1.3.0 255.255.255.0 223.1.8.2 
            </div>
            <div class="labexplan">
              3.ตรวจสอบเส้นทาง Routing 
            </div>
            <div class="labexplan2 font-italic">
              > Router0(config) #ip route เครือข่ายปลายทาง subnet_mask gateway<br/>
              > Router0(config) #ip route 223.1.1.0 255.255.255.0 223.1.8.2<br/>
              > Router0(config) #ip route 223.1.3.0 255.255.255.0 223.1.8.2 
            </div>
            <br/>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { storage } from '../main';

export default {
  data() {
    return {
      downLoadURL: '',
      command: false,
      result : false,
      user : {email : ''},
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      storage.ref().child('lab/Lab6_Std.pkt').getDownloadURL()
      .then((url) => {
        console.log(url)
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
      }
    })
  },
  methods: {
    gotoHomework() { this.$router.push('/lab6_hw'); },
    labresult() { 
      this.result = true; 
      if (this.command == true) {
        this.command = false;
      }
    },
    labcommand() { 
      this.command = true;
      if (this.result == true) {
        this.result = false;
      }
    },
  }
};
</script>

<style scoped>
  .labexplan {
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 2px;
  }
  .labexplan2 {
    margin-left: 50px;
    margin-right: 40px;
    margin-top: 2px;
  }
  .labexplan3 {
    margin-left: 60px;
    margin-right: 40px;
    margin-top: 2px;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  .tabletext {
    margin-left: 5px;
  }
</style>