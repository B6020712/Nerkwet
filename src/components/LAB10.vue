<template>
  <v-card class="mx-auto" max-width="1200" min-height="100">
    <!-- HEADER 1 -->
    <p class="display-3 mb-3 text-center">LAB 10</p>
    <p class="title font-regular text-center">Static Nat and Dynamic NAT</p>

    <!-- brief -->
    <v-row align="center" justify="center">
      <v-card-text>
        <p class="display-2 font-weight-bold mb-3 text--primary">Brief Lab</p>
        <p class="subtitle-1 text--primary">
          แลปนี้จะเกี่ยวกับ Static NAT and Dynamic NAT<br/>
        </p>
        <p class="subtitle-1" align="center">
          <v-img min-width="100" min-height="100" src="@/assets/lab/lab10/lab10-1.png"></v-img><br/>
          figure 1 - lab 10
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
          1. สร้างเครือข่ายคอมพิวเตอร์และกำหนดค่า IP Addresses ตาม Figure 1<br/>
          1.1 Public IP address ของ Serial Link ระหว่าง Router0 และ Router1 มี Network Address คือ 1.1.1.0/27<br/>
          1.2 Router0 Se0/0/0 มี IP address คือ 1.1.1.1/27, Router1 Se0/0/1 มี IP address คือ 1.1.1.2/27 เป็นต้น<br/>
          1.3 Server0 เชื่อมต่อกับ Router1 G0/0 และมีกำหนดค่า Private IP address เป็น 172.16.1.2/24<br/>
          1.4 Server1 เชื่อมต่อกับ Router1 G0/1 และมีกำหนดค่า Private IP address เป็น 172.16.2.2/24<br/>
          1.5 กำหนดค่า IP address ให้กับ PC ทั้งสามและขาในของ Router0 และ Router1 ให้เรียบร้อย<br/><br/>
          2. กำหนดค่าการทำงานของ NAT ที่ Router0 เป็น Dynamic NAT<br/>
          2.1 กำหนด Access-List ที่ 10 (ไว้ระบุแต่ละ Access-List) เพื่อเป็นการระบุว่าให้กลุ่ม IP addresses นี้สามารถใช้ NAT ได้ (Private IP addresses ที่จะถูกแปลงเป็น Public IP address ด้วย NAT)<br/>
          ***Access-List ในกรณีนี้ไม่ได้มีไว้เพื่อเหตุผลด้าน Security แต่เพื่อบอกว่ากลุ่ม IP addresses นี้เป็นกลุ่มที่สนใจและส่งไปให้ NAT process ทำการแปลง)***<br/>
        </p>
        <p class="subtitle-1">
          Router0(Config)# access-list 10 permit 192.168.1.0 0.0.0.255<br/>
          Router0(Config)# access-list 10 permit 192.168.2.0 0.0.0.255<br/>
          Router0(Config)# access-list 10 permit 192.168.3.0 0.0.0.255<br/>
        </p>
        <p class="subtitle-1 text--primary">
          2.2	สร้าง NAT Pool สำหรับกรณี Dynamic NAT ให้ 1.1.1.0/27 โดยใช้จาก IP address: 1.1.1.5 ถึง 1.1.1.8 และนำไปทำงานร่วมกับ Access-List ที่ได้สร้างไว้<br/>
        </p>
        <p class="subtitle-1">
          Router0(config)# ip nat pool NAT (IP_ที่ใช้ได้ตัวแรก) (IP_ที่ใช้ได้ตัวสุดท้าย) netmask (net_mask)<br/>
          Router0(config)# ip nat inside source list 10 pool NAT<br/>
        </p>
        <p class="subtitle-1 text--primary">
          2.3	ทำการรับฝั่ง inside และ outside สำหรับ NAT ให้แต่ละ Interface ด้วยคำสั่ง<br/>
        </p>
        <p class="subtitle-1">
          ใช้คำสั่ง Router(Config-if)# ip nat inside ให้กับ Interface G0/0, G0/1, G0/2<br/>
          ใช้คำสั่ง Router(Config-if)# ip nat outside ให้กับ Interface Se0/0/0<br/>
        </p>
        <p class="subtitle-1 text--primary">
          3. กำหนดค่าการทำงานของ NAT ที่ Router1 เป็น Static NAT<br/>
          3.1 กำหนด Static NAT ให้กับ Server0 โดยจับคู่ PrivateIP 172.16.1.2 กับ PublicIP 1.1.1.10 และ Server1 โดยจับคู่ PrivateIP 172.16.2.2 กับ PublicIP 1.1.1.11<br/>
        </p>
        <p class="subtitle-1">
          Router0(Config)# ip nat inside source static 172.16.1.2 1.1.1.10 <br/>
          Router0(Config)# ip nat inside source static 172.16.2.2 1.1.1.11<br/>
        </p>
        <p class="subtitle-1 text--primary">
          3.2	ทำการระบฝั่ง inside และ outside สำหรับ NAT ให้แต่ละ Interface<br/>
        </p>
        <p class="subtitle-1">
          ใช้คำสั่ง Router(Config-if)# ip nat inside ให้กับ Interface G0/0, G0/1<br/>
          ใช้คำสั่ง Router(Config-if)# ip nat outside ให้กับ Interface Se0/0/1<br/>
        </p>
        <p class="subtitle-1 text--primary">
          4. ทดสอบด้วยการ Ping จาก PC ไปยัง Server0 และ Server1 แล้วสามารถตรวจสอบค่า NAT ที่กำหนดไปด้วยคำสั่ง<br/>
        </p>
        <p class="subtitle-1">
          Router# show access-list<br/>
          Router# show ip nat translations<br/>
          Router# show ip nat statistics<br/>
          Router# debug ip nat<br/>
        </p>
        <p class="subtitle-1 text--primary" align="center">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<br/>
        </p>
        <p class="subtitle-1 text--primary">
          5. สิ่งที่ต้องทำให้ได้ในแลปนี้คือ<br/>
          5.1 สามารถ Ping จาก PC0, PC1, PC2 ไปยัง Public IP address ของ Server0 และ Server1 ได้<br/>
        </p>
        <v-radio-group v-model="lab10.no1">
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

        <v-radio-group v-model="lab10.no2">
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
      lab10: [{
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
    // saveResult() {
    //   lab10Ref.push({
    //     email: this.email
    //   }).child('lab_answer10').push({
    //     lab10_no1: this.lab10.no1,
    //     lab10_no2: this.lab10.no2,
    //   })
    // }
  }
};
</script>