<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br />
          <div class="display-3 mb-3 text-center">LAB 4</div>
          <div class="title font-regular text-center">VLANs Trunking and EtherChannel (2)</div>
          <div align="center" justify="center">
            <v-img src="@/assets/lab/lab4/lab4Learning1.png"></v-img><br/>
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto">
          <br/>
          <div class="headline text--primary labexplan">อธิบายวิธีการทำ</div>
          <div class="text--primary labexplan">
            1.นำ PC และ Router (Router รุ่น 2960) มาวางและเชื่อมต่อกันดังภาพ<br/>
            2.กำหนด IP Address ให้กับ PC ทั้ง 4 เครื่องดังนี้
          </div>
          <div class="text--primary labexplan2">
            A1 : 191.10.1.2/28<br/>
            A2 : 191.10.1.3/28<br/>
            B1 : 191.20.1.2/28<br/>
            B2 : 191.20.1.3/28<br/>
          </div>
          <div class="text--primary labexplan">
            3.กำหนด Vlan ดังตารางด้านล่าง
          </div>
          <table class="labexplan2" style="width:70%; margin-top:10px;">
            <tr>
              <td><div class="tabletext"></div></td>
              <td><div class="tabletext">Vlan 10</div></td>
              <td><div class="tabletext">Vlan 20</div></td>
              <td><div class="tabletext">Trunk</div></td>
              <td><div class="tabletext">Native</div></td>
            </tr>
            <tr>
              <td><div class="tabletext">Switch0</div></td>
              <td><div class="tabletext">Fa0/1</div></td>
              <td><div class="tabletext">Fa0/2</div></td>
              <td><div class="tabletext">Gig0/1</div></td>
              <td><div class="tabletext">99</div></td>
            </tr>
            <tr>
              <td><div class="tabletext">Switch1</div></td>
              <td><div class="tabletext">Fa0/1</div></td>
              <td><div class="tabletext">Fa0/2</div></td>
              <td><div class="tabletext">Gig0/1</div></td>
              <td><div class="tabletext">99</div></td>
            </tr>
          </table>
          <div class="headline text--primary labexplan" style="margin-top: 15px">หากทำสำเร็จ</div>
          <div class="text--primary labexplan">
            PC ที่อยู่ใน Vlan เดียวกันสามารถ ping หากันได้
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
            <div class="labexplan2">> ping จาก A1 ไปยัง A2 (Vlan10)</div><br/>
            <div align="center" justify="center">
              <v-img width="550" src="@/assets/lab/lab4/lab4Result1.png"></v-img><br/>
            </div>
            <div class="labexplan2">> ping จาก B2 ไปยัง B1 (Vlan20)</div><br/>
            <div align="center" justify="center">
              <v-img width="550" src="@/assets/lab/lab4/lab4Result2.png"></v-img><br/>
            </div>
            <br/>
          </div>
            
          <div v-if="command" class="text--primary">
            <v-divider></v-divider><br/>
            <div class="headline text--primary labexplan">คำสั่งที่ใช้ในการทำ</div>
            <div class="labexplan">
              1.คำสั่งในการตั้งชื่อ Vlan 
            </div>
            <div class="labexplan2 font-italic">
              Switch(config)# vlan 10<br/>
              Switch(config-vlan)# name {{msg1}}
            </div>
            <div class="labexplan">
              2.คำสั่งในการกำหนด Vlan 
            </div>
            <div class="labexplan2 font-italic">
              Switch(config)# interface fa0/1<br/>
              Switch(config-if)# switchport mode access<br/>
              Switch(config-if)# switchport access vlan 10
            </div>
            <div class="labexplan">
              3.คำสั่งในการกำหนด Trunk 
            </div>
            <div class="labexplan2 font-italic">
              Switch(config)# interface Gig0/1<br/>
              Switch(config-if)# switchport trunk allowed vlan 10,20<br/>
              Switch(config-if)# switchport mode trunk
            </div>
            <div class="labexplan">
              4.คำสั่งในการกำหนด Native Vlan 
            </div>
            <div class="labexplan2 font-italic">
              Switch(config-if)# switchport trunk native vlan 99
            </div>
            <div class="labexplan">
              5.คำสั่งในการตรวจสอบ Vlan ที่ได้ตั้งค่าไป 
            </div>
            <div class="labexplan2 font-italic">
              Switch# show vlan brief<br/>
              Switch# show interface trunk
            </div>
            <br/>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      msg1: "<ชื่อ>",
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
    gotoHomework() { this.$router.push('/lab4_hw'); },
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