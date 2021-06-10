<template>
  <v-card class="mx-auto" max-width="1200" min-height="100">
    <p class="display-3 mb-3 text-center">LAB 3</p>
    <p class="title font-regular text-center">VLAN Part1</p>

    <v-row align="center" justify="center">
      <v-img max-width="1000" min-height="100" src="@/assets/lab/labpic/3.png"></v-img>
    </v-row>
    
    <v-row align="center" justify="center">
      <v-card-subtitle>
        <p class="headline text-center text--primary">อธิบายแลป</p>
        <p class="subtitle-1 text--primary">
          1.นำ Switch และ PC มาเชื่อมต่อให้เหมือนกับ Topology ด้านบนและใช้สาย Copper Staright-Through ในการเชื่อมต่อกัน<br/>
          ส่วนการเชื่อมต่อระหว่าง Switch ให้ใช้สาย Copper Cross-Over ในการเชื่อมต่อกัน
        </p>
        <p class="subtitle-1 text--primary">
          2.กำหนด IP Address ให้กับ PC แต่ละตัวและ Topology นี้กำหนดให้ใช้ <strong> Prefix Size = /29 </strong>
        </p>
        <p class="subtitle-1 text--primary">
          3.กำหนด VLAN ดังตารางด้านล่าง
          <table style="width:100%">
            <tr>
              <th></th>
              <th>LEFT SW</th>
              <th>Right SW</th>
            </tr>
            <tr>
              <th>VLAN Name</th>
              <td>VLAN10: VLLEFT<br/>
                  VLAN15: VLRIGHT
              </td>
              <td>VLAN10: VLLEFT<br/>
                  VLAN15: VLRIGHT
              </td>
            </tr>
            <tr>
              <th>Interface</th>
              <td>Fa0/1: vlan10<br/>
                  Fa0/2: vlan10<br/>
                  Fa0/14: vlan15
              </td>
              <td>Fa0/1: vlan15<br/>
                  Fa0/2: vlan15<br/>
                  Fa0/14: vlan10
              </td>
            </tr>
            <tr>
              <th>Trunk Port</th>
              <td>Gig0/1</td>
              <td>Gig0/1</td>
            </tr>
          </table>
        </p>
        <p class="subtitle-1 text--primary">
          4. 1) เปิด Access Mode ให้กับ Interface ที่ใช้งาน Vlan<br/>
             <strong>Switch(config-if)# switchport mode access</strong><br/>
             2) สร้าง VLAN และกำหนดชื่อให้กับ VLAN<br/>
             <strong>Switch(config)# vlan 10<br/>
             Switch(config-vlan)# name VLLEFT</strong><br/>
             3) กำหนด VLAN ให้กับแต่ละ Interface<br/>
             <strong>Switch(config-if)# switchport access vlan 10</strong><br/>
             4) สร้าง Trunk ระหว่าง LEFT SW และ RIGHT SW<br/>
             <strong>Switch(config-if)# switchport trunk allowed vlan 10,15</strong><br/>
             <strong>Switch(config-if)# switchport mode trunk</strong><br/>
        </p>
        <p class="subtitle-1 text--primary">
          5.หาก config ได้ถูกต้อง PC-LEFT3 ที่เชื่อมต่อกับ RIGHT SW จะสามารถ ping มาหา PC-LEFT1 กับ PC-LEFT2 ได้และ<br/>
          PC-RIGHT3 ที่เชื่อมต่อกับ LEFT SW จะสามารถ ping มาหา PC-RIGHT1 กับ PC-RIGHT2 ได้<br/>
        </p>

        <!-- <v-radio-group v-model="lab3config_no1">
          <p class="subtitle-1 text--primary"><strong>คำถามเกี่ยวกับการ config</strong></p>
          <div>1. Access Mode ต้องเปิดให้ Port ใดบ้าง</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>ไม่ต้องเปิดให้ port ใดเลย</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>ทุก port ที่ไม่ได้ shutdown</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>เปิดให้เฉพาะกับ port ที่มีการใช้งาน Vlan เท่านั้น</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab3config_no2">
          <div>2. หากเราไม่สร้าง Trunk ระหว่าง LEFT SW กับ RIGHT SW , PC-LEFT3 จะสามารถ ping มาหา PC-LEFT1 กับ PC-LEFT2 ได้หรือไม่เพราะเหตุใด</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>ไม่ได้</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>ได้</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab3config_no3">
          <div>3. การสร้างและกำหนดชื่อให้กับ Vlan นั้น เราต้องทำที่อุปกรณ์ใดบ้างสำหรับแลปนี้</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>PC และ Switch</div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>Switch อย่างเดียว</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>PC อย่างเดียว</div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab3config_no4">
          <div>4.คำสั่งใดคือคำสั่งที่ใช้กำหนด Vlan ให้กับ Interface Fa0/1 ของ LEFT SW</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>LEFT SW(config)#interface fa0/1<br/>
                   LEFT SW(config-if)#switchport access vlan 10
              </div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>LEFT SW(config)#interface fa0/1<br/>
                   LEFT SW(config-if)#switchport assign vlan 10
              </div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>LEFT SW(config)#switchport assign vlan 10 to fa0/1
              </div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab3config_no5">
          <div>5.คำสั่งใดคือคำสั่งในการสร้าง Trunk ให้กับ Interface G0/1 ของ LEFT SW</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>LEFT SW(config)#interface G0/1<br/>
                   LEFT SW(config-if)#switchport create trunk
              </div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>LEFT SW(config)#interface G0/1<br/>
                   LEFT SW(config-if)#switchport access trunk
              </div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>LEFT SW(config)#interface G0/1<br/>
                   LEFT SW(config-if)#switchport mode trunk
              </div>
            </template>
          </v-radio>
        </v-radio-group>

        <v-radio-group v-model="lab3config_no6">
          <div>6.หากเปลี่ยน Vlan ID จาก 15 เป็น 10 ของ Interface fa0/14 ของ LEFT SW , PC-RIGHT3 จะสามารถ ping ไป PC-RIGHT1 และ PC-RIGHT2 ได้หรือไม่เพราะเหตุใด</div>
          <template v-slot:label>
          </template>
          <v-radio value=1>
            <template v-slot:label>
              <div>ได้ เพราะการเปลี่ยน vlan id ไม่มีผลกับการ ping </div>
            </template>
          </v-radio>
          <v-radio value=2>
            <template v-slot:label>
              <div>ได้ เพราะอยู่ใน network เดียวกัน</div>
            </template>
          </v-radio>
          <v-radio value=3>
            <template v-slot:label>
              <div>ไม่ได้ เพราะอยู่คนละ vlan กัน</div>
            </template>
          </v-radio>
        </v-radio-group> -->
        <!-- for test -->
        <v-divider></v-divider>
        <p class="subtitle-1 text--primary"><strong>คำถามเกี่ยวกับการ config</strong></p>
        <!-- <v-radio-group v-for="item in items" :key="item.title" link>
          <v-radio-group v-model="item.model"> -->
          <v-radio-group v-for="item in items" :key="item.title" v-model="item.model" link>
            <div>{{ item.title }}</div>
            <v-radio :label="item.choice1" value=1></v-radio>
            <v-radio :label="item.choice2" value=2></v-radio>
            <v-radio :label="item.choice3" value=3></v-radio>
          </v-radio-group>
          <!-- </v-radio-group>
        </v-radio-group> -->

        <div class="d-flex justify-space-around mb-6 outlined">
          <div class="pa-2 outlined">
            <v-btn color="red" @click="saveResult(lab3config_no1, lab3config_no2, lab3config_no3, lab3config_no4, lab3config_no5, lab3config_no6)">Check</v-btn>
          </div>
          <div class="pa-2 outlined">
            <v-btn color="primary" @click="toLab4">LAB 4</v-btn>
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
      lab3config_no1: Number,
      lab3config_no2: Number,
      lab3config_no3: Number,
      lab3config_no4: Number,
      lab3config_no5: Number,
      lab3config_no6: Number,
      user : {email : ''},
      items: [
        { title: '1.Access Mode ต้องเปิดให้ Port ใดบ้าง', model: "lab3config_no1" , choice1: 'ไม่ต้องเปิดให้ port ใดเลย' , choice2: 'ทุก port ที่ไม่ได้ shutdown', choice3: 'เปิดให้เฉพาะกับ port ที่มีการใช้งาน Vlan เท่านั้น' },
        { title: '2.หากเราไม่สร้าง Trunk ระหว่าง LEFT SW กับ RIGHT SW , PC-LEFT3 จะสามารถ ping มาหา PC-LEFT1 กับ PC-LEFT2 ได้หรือไม่', model: 'lab3config_no2' , choice1: 'ไม่ได้' , choice2: 'ได้', choice3: 'ไม่ทราบ' },
        { title: '3.การสร้างและกำหนดชื่อให้กับ Vlan นั้น เราต้องทำที่อุปกรณ์ใดบ้างสำหรับแลปนี้', model: 'lab3config_no3' , choice1: 'PC และ Switch' , choice2: 'Switch อย่างเดียว', choice3: 'PC อย่างเดียว' },
        { title: '4.คำสั่งใดคือคำสั่งที่ใช้กำหนด Vlan ให้กับ Interface Fa0/1 ของ LEFT SW', model: 'lab3config_no4' , choice1: 'LEFT SW(config-if)#switchport access vlan 10' , choice2: 'LEFT SW(config-if)#switchport assign vlan 10', choice3: 'LEFT SW(config)#switchport assign vlan 10 to fa0/1' },
        { title: '5.คำสั่งใดคือคำสั่งในการสร้าง Trunk ให้กับ Interface G0/1 ของ LEFT SW', model: 'lab3config_no5' , choice1: 'LEFT SW(config-if)#switchport create trunk' , choice2: 'LEFT SW(config-if)#switchport access trunk', choice3: 'LEFT SW(config-if)#switchport mode trunk' },
        { title: '6.หากเปลี่ยน Vlan ID จาก 15 เป็น 10 ของ Interface fa0/14 ของ LEFT SW , PC-RIGHT3 จะสามารถ ping ไป PC-RIGHT1 และ PC-RIGHT2 ได้หรือไม่เพราะเหตุใด', model: 'lab3config_no6' , choice1: 'ได้ เพราะการเปลี่ยน vlan id ไม่มีผลกับการ ping' , choice2: 'ได้ เพราะอยู่ใน network เดียวกัน', choice3: 'ไม่ได้ เพราะอยู่คนละ vlan กัน' },
      ],
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
    toLab4() {
      this.$router.push("/lab4");
    },
    saveResult (LAB3CONFIG_NO1, LAB3CONFIG_NO2, LAB3CONFIG_NO3, LAB3CONFIG_NO4, LAB3CONFIG_NO5, LAB3CONFIG_NO6) {
      const createdAt = new Date()
      db.collection("user").doc(this.email).collection("lab3")
      .add({ LAB3CONFIG_NO1, LAB3CONFIG_NO2, LAB3CONFIG_NO3, LAB3CONFIG_NO4, LAB3CONFIG_NO5, LAB3CONFIG_NO6, createdAt })
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