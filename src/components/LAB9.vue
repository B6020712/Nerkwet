<template>
  <v-card class="mx-auto" max-width="1000" min-height="100">
    <!-- HEADER 1 -->
    <p class="display-3 mb-3 text-center">LAB 9</p>
    <p class="title font-regular text-center">IPv6 Addressing and Routing Configuration</p>

    <!-- brief -->
    <v-row align="center" justify="center">
      <v-card-text>
        <p class="display-2 font-weight-bold mb-3 text--primary">Brief Lab</p>
        <p class="subtitle-1 text--primary">
          แลปนี้จะเกี่ยวกับการแจกจ่าย IPv6 Address และการ Routing IPv6<br/>
          โดยแลปนี้จะมีทั้งหมด 2 part<br/>
        </p>
        <p class="subtitle-1" align="center">
          <v-img min-width="100" min-height="100" src="@/assets/lab/lab9/lab9-1.png"></v-img><br/>
          figure 1 - lab 9.1
        </p>
        <p class="subtitle-1" align="center">
          <v-img min-width="100" min-height="100" src="@/assets/lab/lab9/lab9-2.png"></v-img><br/>
          figure 2 - lab 9.2
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
          1. กำหนดค่า IPv6 Addresses ตาม Figure 1<br/>
          1.1 กำหนด IPv6 address และ Prefix length (/48 หรือ /64) ตาม Figure 1<br/>
          1.2 Default Gateway ของ Network A ใช้ 2001:bed:12:a::1/64<br/>
          1.3 Default Gateway ของ Network B และ C เป็นแบบ Modified EUI-64<br/><br/>

          2. กำหนดค่า Route Table ของ Router0, Router1, Router2 เพื่อให้ PC ในเครือข่ายหลัง Router แต่ละเครือข่ายสามารถติดต่อกันได้<br/>
          2.1 ต้องเปิดการทำงานของ IPv6 แบบ unicast ก่อนดังนี้<br/>
        </p>
        <p class="subtitle-1">
          Router0(config) # ipv6 unicast-routing<br/>
        </p>
        <p class="subtitle-1 text--primary">
          2.2 ตัวอย่างการกำหนดค่า IPv6 address และ Routing Table ที่ Router0<br/>
        </p>
        <p class="subtitle-1">
          Router0(config-if) #ipv6 address 2001:bed:1::1/48<br/>
          Router0(config) # ipv6 route 2001:bed:23:a::/64 2001:bed:2::2<br/>
        </p>
        <p class="subtitle-1 text--primary">
          2.3 ตัวอย่างการกำหนดค่า IPv6 address แบบ EUI-64 ที่ Router2<br/>
        </p>
        <p class="subtitle-1">
          Router0(config-if) #ipv6 address 2001:BED:13:A::/64 eui-64<br/>
        </p>
        <p class="subtitle-1 text--primary">
          2.4 สามารถตรวจสอบค่าที่กำหนดด้วยคำสั่ง<br/>
        </p>
        <p class="subtitle-1">
          # show ipv6 route<br/>
          # show ipv6 interface brief<br/>
          # show ipv6 interface (int_number)<br/>
        </p>
        <p class="subtitle-1 text--primary" align="center">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<br/>
        </p>
        <p class="subtitle-1 text--primary">
          3. สิ่งที่ต้องทำให้ได้ในแลปนี้คือ<br/>
          3.1 สามารถ Traceroute จาก PC0 ไป PC2<br/>
          3.2 สามารถ Traceroute จาก PC4 ไป PC3<br/>
          3.3 ให้ทดลอง Ping จาก PC4 ไป Link-local address ของ PC5<br/>
        </p>

        <p class="subtitle-1 text--primary" align="center">
          - - - - - - - - - - - - - - - - - - - - - - - - PART 2 - - - - - - - - - - - - - - - - - - - - - - - -<br/>
        </p>
        <p class="subtitle-1 text--primary">
          4. ไฟล์ Lab7-2_Std.pkt ได้กำหนดค่าของ PC ด้วย IPv6 Auto Configuration แล้วจึงไม่จำเป็นต้องกำหนดค่า Default Gateway ด้วยตัวเอง<br/><br/>
          5. ให้กำหนดค่า IPv6 Addresses และ IPv6 Prefix length ให้กับ Router 
          ตาม Figure 2 โดยไม่จำเป็นต้องกำหนดค่า Router ของ ISP, Server www.sut.ac.th และ DNS Server เนื่องจากได้ทำการกำหนดมาให้แล้ว<br/><br/>
          6. กำหนดค่า Routing Table แบบ Static ที่ Router0 เพื่อไปยัง ISP<br/><br/>
          7. กำหนดค่า OSPFv3 Area 0 ทุก interface ของ Router0, Router1, Router2 ยกเว้น interface S0/0/0 ของ Router0<br/><br/>
        </p>
        <p class="subtitle-1">
          <strong>ตัวอย่างการกำหนดค่า OSPFv3 process ID 10 ของ Router0<br/></strong>
          Router0(config)# ipv6 router ospf (process_ID)<br/><br/>
          <strong>Router ID จะกำหนดเป็น 32 bits เหมือน OSPFv2 สื่อถึง ID ของ Router แต่ละตัว ซึ่งจะไม่เหมือนกัน (Router1 อาจเป็น 2.2.2.2 เป็นต้น)<br/></strong>
          Router0(config-rtr)# router-id 1.1.1.1<br/><br/>
          <strong>กำหนดค่า OSPFv3 ที่ interfaceg0/0 ของ Router0<br/></strong>
          Router0(config-if)# ipv6 ospf (process_ID) area (area_number)<br/>
        </p>
        <p class="subtitle-1 text--primary">
          8. ทำการ Redistribution ในส่วน Static Route ไปให้ OSPF area 0
        </p>
        <p class="subtitle-1">
          Router0(config)# ipv6 router ospf (process_ID)<br/>
          Router0(config-rtr)# redistribute static<br/>
        </p>
        <p class="subtitle-1 text--primary">
          9. สามารถตรวจสอบค่าที่กำหนดด้วยคำสั่ง
        </p>
        <p class="subtitle-1">
          # show ipv6 route<br/>
          # show ipv6 interface brief<br/>
          # show ipv6 ospf neighbor<br/>
          # show ipv6 ospf database<br/>
        </p>
        <p class="subtitle-1 text--primary">
          10. ลอง Ping จาก PC1 ไปยัง www.sut.ac.th หรือ 2002::77<br/>
          <span class="subtitle-1 grey--text">- ถ้าไม่สามารถ ping ด้วย www.sut.ac.th ให้ลองเลือกกำหนดค่าแบบ Static ที่ IPv6 DNS Server ด้วย IP address ของ DNS Server และกลับมากด Auto Config อีกครั้ง<br/></span>
        </p>
        <p class="subtitle-1 text--primary" align="center">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<br/>
        </p>
        <p class="subtitle-1 text--primary">
          11. สิ่งที่ต้องทำให้ได้ในแลปนี้คือ<br/>
          11.1	สามารถ Traceroute จาก PC1 ไป www.sut.ac.th<br/>
          11.2	สามารถ Traceroute จาก PC2 ไป PC3<br/>
          11.3	เมื่อ Show routing table ที่ Router0 และ Router2 จะต้องมีการเรียนรู้ Routing ครบทุก Network รวมถึงที่ Redistribution เข้ามาใน OSPF<br/>
        </p>
        <v-radio-group v-model="lab9.no1">
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

        <v-radio-group v-model="lab9.no2">
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
        <v-btn color="primary" @click="toLab10">LAB 10</v-btn>
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
      lab9: [{
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
    toLab10() {
      this.$router.push("/lab10");
    },
    // saveResult() {
    //   lab9Ref.push({
    //     email: this.email
    //   }).child('lab_answer9').push({
    //     lab9_no1: this.lab9.no1,
    //     lab9_no2: this.lab9.no2,
    //   })
    // }
  }
};
</script>