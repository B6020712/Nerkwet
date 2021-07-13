<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br />
          <div class="display-3 mb-3 text-center">LAB 7</div>
          <div class="title font-regular text-center">IPv6</div>
          <div align="center" justify="center">
            <v-img width="1100" src="@/assets/lab/lab7/lab7Learning1.png"></v-img><br/>
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto" min-width="500">
          <br/>
          <div class="headline text--primary labexplan">อธิบายวิธีการทำ</div>
          <div class="text--primary labexplan">
            1.กำหนดค่า IPv6 Addresses ตาม Figure 1
          </div>
          <div class="text--primary labexplan2">
            a. กำหนด IPv6 address และ Prefix length (/48 หรือ /64) ตาม Figure 1<br/>
            b. Default Gateway ของ Network A ใช้ 2001:bed:12:a::1/64<br/>
            c. Default Gateway ของ Network B และ C เป็นแบบ Modified EUI-64
          </div>
          <div class="text--primary labexplan">
            2.กำหนดค่า Route Table ของ Router0, Router1, Router2 เพื่อให้ PC ในเครือข่ายหลัง Router แต่ละเครือข่ายสามารถติดต่อกันได้
          </div>
          <div class="text--primary labexplan2">
            a. ต้องเปิดการทำงานของ IPv6 แบบ unicast ก่อนดังนี้<br/>
            b. ตัวอย่างการกำหนดค่า IPv6 address และ Routing Table ที่ Router0<br/>
            c. ตัวอย่างการกำหนดค่า IPv6 address แบบ EUI-64 ที่ Router2<br/>
            d. สามารถตรวจสอบค่าที่กำหนดด้วยคำสั่ง
          </div>
          <div class="headline text--primary labexplan" style="margin-top: 15px">หากทำสำเร็จ</div>
          <div class="text--primary labexplan">
            a. สามารถ ping จาก PC0 ไป PC2<br/>
            b. สามารถ ping จาก PC4 ไป PC3
          </div>
          
          <br/>
          <div class="d-flex justify-space-around mb-6 outlined">
            <v-spacer></v-spacer>
            <v-btn @click="labresult" color="red">Result</v-btn>
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
            <!-- <div class="labexplan2">> ping จาก A1 ไปยัง A2 (Vlan10)</div><br/> -->
            <div align="center" justify="center">
              <v-img width="550" src="@/assets/lab/lab7/lab7Result1.png"></v-img><br/>
            </div>
            <!-- <div class="labexplan2">> ping จาก B2 ไปยัง B1 (Vlan20)</div><br/> -->
            <div align="center" justify="center">
              <v-img width="550" src="@/assets/lab/lab7/lab7Result2.png"></v-img><br/>
            </div>
            <br/>
          </div>
            
          <div v-if="command" class="text--primary">
            <v-divider></v-divider><br/>
            <div class="headline text--primary labexplan">คำสั่งที่ใช้ในการทำ</div>
            <div class="labexplan">
              2.a
            </div>
            <div class="labexplan2 font-italic">
              > Router0(config) # ipv6 unicast-routing
            </div>
            <div class="labexplan">
              2.b
            </div>
            <div class="labexplan2 font-italic">
              > Router0(config-if) #ipv6 address 2001:bed:1::1/48<br/>
              > Router0(config) # ipv6 route 2001:bed:23:a::/64 2001:bed:2::2
            </div>
            <div class="labexplan">
              2.c
            </div>
            <div class="labexplan2 font-italic">
              > Router0(config-if) #ipv6 address 2001:BED:13:A::/64 eui-64
            </div>
            <div class="labexplan">
              2.d
            </div>
            <div class="labexplan2 font-italic">
              > # show ipv6 route<br/>
              > # show ipv6 interface brief<br/>
              > # show ipv6 interface {{msg1}}
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

export default {
  data() {
    return {
      msg1: "<int_number>",
      command: false,
      result : false,
      user : {email : ''},
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.logInSign = !!user;
      if(user) {
        this.email = user.email;
      }
    })
  },
  methods: {
    gotoHomework() { this.$router.push('/lab7_hw'); },
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