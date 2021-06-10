<template>
  <v-card class="mx-auto" max-width="1000" min-height="100">
    <!-- HEADER 1 -->
    <p class="display-3 mb-3 text-center">LAB 6</p>
    <p class="title font-regular text-center">IPv4 Routing</p>

    <!-- brief -->
    <v-row align="center" justify="center">
      <v-card-text>
        <p class="display-2 font-weight-bold mb-3 text--primary">Brief Lab</p>
        <p class="subtitle-1 text--primary">
          IPv4 Routing<br/>
          <v-img min-width="100" min-height="100" src="@/assets/lab/lab6/lab6-1.png"></v-img><br/>
        </p>
      </v-card-text>
    </v-row>
    <br/>
    
    <v-row align="center" justify="center">
      <v-card-title>
        <p class="headline text--primary">อธิบายแลป</p>
      </v-card-title>
      <v-card-subtitle>
        <p class="subtitle-1 text--primary">
          1.ถ้าต้องการบังคับให้ PC1 ใน Network A ติดต่อกับ PC3 ใน Network B ด้วยเส้นทางคือ<br/>
        </p>
        <p class="subtitle-1 red--text">
          Router0 -> Router2 -> Router1<br/>
        </p>
        <p class="subtitle-1 text--primary">
          2.ในทางกลับกันต้องการบังคับให้ PC3 ใน Network B ติดต่อกับ PC1 ใน Network A ด้วยเส้นทาง คือ<br/>
        </p>
        <p class="subtitle-1 red--text">
          Router1 -> Router0<br/>
        </p>
        <p class="subtitle-1 text--primary">
          3.Network B (ด้านบน) จะไม่สามารถติดต่อกับ Network C (ด้านขวา) ได้<br/><br/>
          
          4.ที่ Network A สร้างการเชื่อมต่อเครือข่ายดังภาพด้านบนโดยใช้ Router 2911 และใช้ Switch 2960<br/>
          4.1 ทำการเชื่อมต่อ PC0, PC1, Switch และ Router0 เข้าด้วยกัน (สายเส้นดำทึบ คือ สาย Copper Straight-Through)<br/>
          4.1.1 กำหนด IP address โดยทุก subnet มี subnet mask คือ /24 แบบ Classful ให้กับอุปกรณ์ดังภาพด้านบน<br/>
          4.1.2 ถ้าเป็น Router อย่าลืมเปิด interface ด้วย ( Router(config-if)# no shutdown )<br/>
          4.2 กำหนด Default Gateway ให้กับ PC0 และ PC1 เป็น IP ของ G0/2 ที่ Router0 คือ 223.1.2.6<br/>
          4.3 เมื่อพิจาณาจากเงื่อนไขการค้นหาเส้นทางข้อ a, b และ c ของทั้ง 3 เครือข่ายแล้ว เริ่มทำการกำหนดค่า Routing ให้กับ Router0 ด้วยคำสั่ง <br/>
        </p>
        <p class="subtitle-1">
          Router(config) # ip route เครือข่ายปลายทาง subnet_mask gateway<br/>
          Router(config) # ip route 223.1.1.0 255.255.255.0 223.1.8.2<br/>
          Router(config) # ip route 223.1.3.0 255.255.255.0 223.1.8.2<br/>
        </p>
        <p class="subtitle-1 text--primary">
          4.4	ตรวจสอบตาราง Routing ที่ได้เพิ่งสร้างไป พร้อมสังเกตความแตกต่างของตัวย่อ (L-Local, C-Connected, S-Static)<br/>
        </p>
        <p class="subtitle-1">
          Router0 #show ip route<br/>
        </p>
        <p class="subtitle-1 text--primary">
          4.5	ที่ Network B สร้างการเชื่อมต่อเครือข่ายดัง Figure 1<br/>
          4.6	ที่ Network C สร้างการเชื่อมต่อเครือข่ายดัง Figure 1<br/>
          4.7	เชื่อมต่อ Router0, Router1, Router2 เข้าด้วยกันด้วยสายเส้นประ คือ สาย Copper Cross-Over)<br/>
        </p>
        <p class="subtitle-1 text--primary text-center">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - <br/>
        </p>
        <p class="subtitle-1 text--primary">
          5.สิ่งที่ต้องทำและตอบคำถามได้ในแลปนี้คือ<br/>
          5.1 ทำการ tracert จาก PC1 ไปยัง PC3<br/>
          5.2 ทำการ tracert จาก PC3 ไปยัง PC1<br/>
          5.3 ทำการ ping จาก PC0 ไปยัง PC2 ว่าติดต่อได้ไหม<br/>
          5.4 อธิบายความแตกต่างของเส้นทางเมื่อ PC1 ต้องการติดต่อไป PC3 และ PC3 ต้องการติดต่อไป PC1<br/>
        </p>
        <v-radio-group v-model="lab6.no1">
          <template v-slot:label>
            <div>เลือกคำตอบที่ <strong>ถูกต้อง</strong></div>
          </template>
          <v-radio value="True">
            <template v-slot:label>
              <div>ข้อนี้ <strong class="success--text">ถูกต้อง</strong></div>
            </template>
          </v-radio>
          <v-radio value="Wrong">
            <template v-slot:label>
              <div>ข้อนี้ <strong class="primary--text">ผิด</strong></div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab6.no2">
          <template v-slot:label>
            <div>เลือกคำตอบที่ <strong>ถูกต้อง</strong></div>
          </template>
          <v-radio value="True">
            <template v-slot:label>
              <div>ข้อนี้ <strong class="success--text">ถูกต้อง</strong></div>
            </template>
          </v-radio>
          <v-radio value="Wrong">
            <template v-slot:label>
              <div>ข้อนี้ <strong class="primary--text">ผิด</strong></div>
            </template>
          </v-radio>
        </v-radio-group>
        <v-btn color="red" @click="saveResult">Check</v-btn>
        <v-btn color="primary" @click="toLab7">LAB 7</v-btn>
      </v-card-subtitle>
    </v-row>
  </v-card>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      lab6: [{
        no1: '',
        no2: '',
      }],
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
    toLab7() {
      this.$router.push("/lab7");
    },
    // saveResult() {
    //   lab6Ref.push({
    //     email: this.email
    //   }).child('lab_answer6').push({
    //     lab6_no1: this.lab6.no1,
    //     lab6_no2: this.lab6.no2,
    //   })
    // }
  }
};
</script>