<template>
  <v-card class="mx-auto" max-width="1200" min-height="100">
    <p class="display-3 mb-3 text-center">LAB 5</p>
    <p class="title font-regular text-center">IPV4</p>

    <v-row align="center" justify="center">
      <v-card-text>
        <v-img min-width="100" min-height="100" src="@/assets/lab/labpic/5.png"></v-img>
      </v-card-text>
    </v-row>
    
    <v-row align="center" justify="center">
      <v-card-subtitle>
        <p class="headline text-center text--primary">อธิบายแลป</p>
        <p class="subtitle-1 text--primary">
          1.นำ Router , Switch และ PC มาเชื่อมต่อให้เหมือนกับ Topology ด้านบนและใช้สาย Copper Staright-Through ในการเชื่อมต่อกัน
        </p>
        <p class="subtitle-1 text--primary">
          2.กำหนด IP Address ให้กับ Interface แต่ละ Interface ของ Router และ กำหนดที่ PC ด้วย <br/>
          โดย Topology นี้กำหนดให้ใช้ <strong> Prefix Size = /24 </strong> ทั้ง Topology
        </p>
        <p class="subtitle-1 text--primary">
          3.การ Routing ของ Topology นี้ กำหนดให้เป็น <strong>Static Routing</strong> โดยเส้นทางการ routing คือ
          <table style="width:100%">
            <tr>
              <th>Host</th>
              <th>Destination</th>
            </tr>
            <tr>
              <td rowspan="3">PC1</td>
              <td>R1 --> R2 --> PC2</td>
            </tr>
            <tr>
              <td>R1 --> R2 --> R3 --> PC3</td>
            </tr>
            <tr>
              <td>R1 --> R2 --> R3 --> R4 --> PC4</td>
            </tr>

            <tr>
              <td rowspan="3">PC2</td>
              <td>R2 --> R3 --> --> R4 ---> R1 ---> PC1</td>
            </tr>
            <tr>
              <td>R2 --> R3 --> PC3</td>
            </tr>
            <tr>
              <td>R2 --> R3 --> R4 --> PC4</td>
            </tr>

            <tr>
              <td rowspan="3">PC3</td>
              <td>R3 --> R4 --> R1 --> PC1</td>
            </tr>
            <tr>
              <td>R3 --> R4 --> R1 --> R2 --> PC2</td>
            </tr>
            <tr>
              <td>R3 --> R4 --> PC4</td>
            </tr>

            <tr>
              <td rowspan="3">PC4</td>
              <td>R4 --> R1 --> PC1</td>
            </tr>
            <tr>
              <td>R4 --> R1 --> R2 --> PC2</td>
            </tr>
            <tr>
              <td>R4 --> R1 --> R2 --> R3 --> PC3</td>
            </tr>
          </table>
        </p>
        <p class="subtitle-1 text--primary">
          4.หากกำหนดถูกต้อง <strong>PC ทั้ง 4 เครื่องจะสามารถ ping หากันได้</strong><br/>
          ใช้คำสั่ง tracert เพื่อดูเส้นทางว่า packet ที่ส่งจากต้นทางไปยังปลายทางนั้นผ่านเส้นทางไหนบ้าง
        </p>

        <v-radio-group v-model="lab5config_no1">
          <p class="subtitle-1 text--primary"><strong>คำถามเกี่ยวกับการ config</strong></p>
          <div>1. Enable IP Routing ด้วยคำสั่งอะไร</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>Router(config)#enable ip routing</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>Router(config)#ip routing</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>Router(config)#allow ip routing</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab5config_no2">
          <div>2. คำสั่งที่ใช้ในการกำหนดเส้นทางจาก PC1 ไปยัง PC3 ตามตารางคือคำสั่งใด</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>R1(config)#ip routing 200.200.3.0 255.255.255.0 200.200.10.2 </div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>R1(config)#ip route 200.200.3.0 255.255.255.0 to 200.200.10.2 </div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>R1(config)#ip route 200.200.3.0 255.255.255.0 200.200.10.2 </div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab5config_no3">
          <div>3. คำสั่งที่ใช้ในการกำหนดเส้นทางจาก PC4 ไปยัง PC2 ตามตารางคือคำสั่งใด</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>Rou4(config)#ip routing 200.200.2.0 255.255.255.0 200.200.40.1</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>Rou4(config)#ip route 200.200.2.0 255.255.255.0 to 200.200.40.1</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>Rou4(config)#ip route 200.200.2.0 255.255.255.0 200.200.40.1</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab5config_no4">
          <div>4.ใช้คำสั่ง tracert จาก PC4 ไปยัง PC2 Packet ผ่านไปเส้นทางตามข้อใด</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>200.200.4.1 --> 200.200.10.1 --> 200.200.20.1 --> 200.200.2.2</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>200.200.4.1 --> 200.200.30.1 --> 200.200.3.2</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>200.200.4.1 --> 200.200.15.1 --> 200.200.2.2</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab5config_no5">
          <div>5.หากต้องการเปลี่ยนเส้นทางในการติดต่อจาก PC2 ไป PC1 โดยเปลี่ยนให้เป็น R2 --> R1 --> PC1 ต้องใช้คำสั่งใด</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>R1(config)#ip routing 200.200.2.0 255.255.255.0 200.200.10.2</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>R1(config)#ip route 200.200.1.0 255.255.255.0 200.200.10.1</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>R1(config)#ip routing 200.200.2.0 255.255.255.0 to 200.200.10.2</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab5config_no6">
          <div>6.หากต้องการเปลี่ยนเส้นทางในการติดต่อจาก PC4 ไป PC3 โดยเปลี่ยนให้เป็น R4 --> R3 --> PC3 ต้องใช้คำสั่งใด</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>R1(config)#ip routing 200.200.3.0 255.255.255.0 200.200.30.1</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>R1(config)#ip route 200.200.3.0 255.255.255.0 200.200.30.1</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>R1(config)#ip routing 200.200.3.0 255.255.255.0 to 200.200.30.1</div>
            </template>
          </v-radio>
        </v-radio-group>

        <div class="d-flex justify-space-around mb-6 outlined">
          <div class="pa-2 outlined">
            <v-btn color="red" @click="saveResult(lab5config_no1, lab5config_no2, lab5config_no3, lab5config_no4, lab5config_no5, lab5config_no6)">Check</v-btn>
          </div>
          <div class="pa-2 outlined">
            <v-btn color="primary" @click="toLab6">LAB 6</v-btn>
          </div>
        </div>
      </v-card-subtitle>
    </v-row>
  </v-card>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { db } from '../main'

export default {
  data() {
    return {
      // dialog: false,
      lab5config_no1: Number,
      lab5config_no2: Number,
      lab5config_no3: Number,
      lab5config_no4: Number,
      lab5config_no5: Number,
      lab5config_no6: Number,
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
    toLab6() {
      this.$router.push("/lab6");
    },
    saveResult (LAB5CONFIG_NO1, LAB5CONFIG_NO2, LAB5CONFIG_NO3, LAB5CONFIG_NO4, LAB5CONFIG_NO5, LAB5CONFIG_NO6) {
      const createdAt = new Date()
      db.collection("user").doc(this.email).collection("lab5")
      .add({ LAB5CONFIG_NO1, LAB5CONFIG_NO2, LAB5CONFIG_NO3, LAB5CONFIG_NO4, LAB5CONFIG_NO5, LAB5CONFIG_NO6, createdAt })
    }
  }
};
</script>

<style>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th, td {
    padding: 5px;
    text-align: left;    
  }
</style>