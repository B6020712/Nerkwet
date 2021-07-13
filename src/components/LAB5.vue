<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br />
          <div class="display-3 mb-3 text-center">LAB 5</div>
          <div class="title font-regular text-center">Static Routing (1)</div>
          <div align="center" justify="center">
            <v-img width="1000" src="@/assets/lab/lab5/lab5Learning1.png"></v-img><br/>
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto">
          <br/>
          <div class="headline text--primary labexplan">อธิบายวิธีการทำ</div>
          <div class="text--primary labexplan">
            a.ถ้าต้องการบังคับให้ PC1 ใน Network Aติดต่อกับ PC3 ใน Network Bด้วยเส้นทาง คือ <br/><span class="red--text">Router0 -> Router2 -> Router1</span><br/>
            b.ในทางกลับกันต้องการบังคับให้ PC3 ใน Network Bติดต่อกับ PC1 ใน Network A ด้วยเส้นทาง คือ <br/><span class="red--text">Router1 -> Router0</span><br/>
            c.แต่ Network B จะ<span class="red--text">ไม่</span>สามารถติดต่อกับ Network C ได้<br/>
            d.ที่ Network A สร้างการเชื่อมต่อเครือข่ายดังภาพ โดย Router ใช้ 2911 และ Switch ใช้ 2960
          </div>
          <div class="text--primary labexplan2">
            1) ทำการเชื่อมต่อ PC0, PC1, Switch และ Router0 เข้าด้วยกัน (สายเส้นดำทึบคือ สาย Copper Straight-Through)
          </div>
          <div class="text--primary labexplan3">
            > กำหนด IP address โดยทุก subnet มี subnet mask คือ /24 แบบ Classful ให้กับอุปกรณ์ดังภาพ<br/>
            > ถ้าเป็น Router อย่าลืมเปิด interface ด้วย (no shutdown)
          </div>
          <div class="text--primary labexplan2">
            2) กำหนด Default Gateway ให้กับ PC0 และ PC1 เป็น IP ของ G0/2 ที่ Router0 คือ 223.1.2.6<br/>
            3) เมื่อพิจาณาจาก<span class="red--text">เงื่อนไขการค้นหาเส้นทางข้อ a, b และ c</span> ของทั้ง 3 เครือข่ายแล้ว เริ่มทำการกำหนดค่า Routing ให้กับ Router0 ด้วยคำสั่ง<br/>
            4) ตรวจสอบตาราง Routing ที่ได้พึ่งสร้างไป พร้อมสังเกตความแตกต่างของตัวย่อ (L-Local, C-Connected, S-Static)
          </div>
          <div class="text--primary labexplan">
            e. ที่ Network B สร้างการเชื่อมต่อเครือข่ายดังภาพ
          </div>
          <div class="text--primary labexplan2">
            1) กำหนดค่าโดยดูจากการกำหนดค่าของ Network A เป็น Guideline
          </div>
          <div class="text--primary labexplan">
            f. ที่ Network C สร้างการเชื่อมต่อเครือข่ายดังภาพ
          </div>
          <div class="text--primary labexplan2">
            1) กำหนดค่าโดยดูจากการกำหนดค่าของ Network A เป็น Guideline
          </div>
          <div class="text--primary labexplan">
            g. เชื่อมต่อ Router0, Router1, Router2 เข้าด้วยกันด้วยสายเส้นประ (สาย Copper Cross-Over)
          </div>
          <div class="headline text--primary labexplan" style="margin-top: 15px">หากทำสำเร็จ</div>
          <div class="text--primary labexplan">
            a. สามารถทำการ ping จาก PC1 ไปยัง PC3 ได้<br/>
            b. สามารถทำการ ping จาก PC3 ไปยัง PC1 ได้
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
              d.3
            </div>
            <div class="labexplan2 font-italic">
              > Router0(config) #ip route เครือข่ายปลายทาง subnet_mask gateway<br/>
              > Router0(config) #ip route 223.1.1.0 255.255.255.0 223.1.8.2<br/>
              > Router0(config) #ip route 223.1.3.0 255.255.255.0 223.1.8.2
            </div>
            <div class="labexplan">
              d.4 
            </div>
            <div class="labexplan2 font-italic">
              > Router0 #show ip route
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
    gotoHomework() { this.$router.push('/lab5_hw'); },
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