<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br />
          <div class="display-3 mb-3 text-center">LAB 9</div>
          <div class="title font-regular text-center">PORT SECURITY AND ACL</div>
          <div align="center" justify="center">
            <v-img width="1100" src="@/assets/lab/lab9/lab9Learning1.png"></v-img><br/>
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto" min-width="500">
          <br/>
          <div class="headline text--primary labexplan">อธิบายวิธีการทำ</div>
          <div class="text--primary labexplan">
            1.สร้างเครือข่ายคอมพิวเตอร์และกำหนดค่า IP Addresses ตาม Figure 1
          </div>
          <div class="text--primary labexplan2">
            > ทุกเครื่อง มี Network Address คือ 192.168.10.0/24<br/>
            > กำหนด Vlan เป็น Vlan10 ทั้งหมด คือ<br/>
          </div>
          <div class="text--primary labexplan3">
            a.SW0 ทั้ง F0/1 และ F0/2 เป็น Vlan10<br/>
            b.SW1 ทั้ง F0/1 และ F0/2 เป็น Vlan10
          </div>
          <div class="text--primary labexplan2">
            > ระหว่าง SW0 G0/1 และ SW1 G0/1 เป็น Trunk port และทำการ allowed vlan 10 ด้วย
          </div>
          <div class="text--primary labexplan">
            2.กำหนดค่า Port Switch ที่ SW0
          </div>
          <div class="text--primary labexplan2">
            a.กำหนดให้ F0/1 และ F0/2 เป็นการเรียนรู้ mac address แบบ Sticky
          </div>
          <div class="text--primary labexplan2">
            b.กำหนดให้ G0/1 เป็นการเรียนรู้ mac address แบบ Sticky สูงสุดจ านวน 2 mac addresses และมี Violation mode แบบ restrict
          </div>
          <div class="text--primary labexplan">
            3.กำหนดค่า Port Switch ที่ SW1
          </div>
          <div class="text--primary labexplan2">
            a.กำหนดให้ F0/1 และ F0/2 เป็นการเรียนรู้ mac address แบบ Sticky
          </div>
          <div class="text--primary labexplan">
            b.กำหนดให้ G0/1 เป็นการเรียนรู้ mac address แบบ Sticky สูงสุดจ านวน 3 mac addresses และมี Violation mode แบบ restrict
          </div>
          <div class="text--primary labexplan">
            4) สามารถตรวจสอบค่าและลบค่าใน Sticky สำหรับ Port Security ที่ก าหนดไปด้วยคำสั่ง
          </div>
          <div class="headline text--primary labexplan" style="margin-top: 15px">หากทำสำเร็จ</div>
          <div class="text--primary labexplan">
            a.สามารถ ping จาก PC0 ไป PC2 ได้<br/>
            b.สามารถ ping จาก PC1 ไป PC2 ได้<br/>
            c.สามารถ ping จาก PC2 ไป PC0 ได้<br/>
            d.<span class="red--text">ไม่สามารถ</span> ping จาก PC3 ไป PC0 ได้
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
              <v-img width="550" src="@/assets/lab/lab9/lab9Result1.png"></v-img><br/>
            </div>
            <!-- <div class="labexplan2">> ping จาก B2 ไปยัง B1 (Vlan20)</div><br/> -->
            <div align="center" justify="center">
              <v-img width="550" src="@/assets/lab/lab9/lab9Result2.png"></v-img><br/>
            </div>
            <!-- <div class="labexplan2">> ping จาก B2 ไปยัง B1 (Vlan20)</div><br/> -->
            <div align="center" justify="center">
              <v-img width="550" src="@/assets/lab/lab9/lab9Result3.png"></v-img><br/>
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
              > Switch0(Config-if)# switchport port-security<br/>
              > Switch0(Config-if)# switchport port-security mac-address sticky
            </div>
            <div class="labexplan">
              2.b
            </div>
            <div class="labexplan2 font-italic">
              > Switch0 (Config-if)# switchport port-security<br/>
              > Switch0 (Config-if)# switchport port-security maximum 2<br/>
              > Switch0 (Config-if)# switchport port-security mac-address sticky<br/>
              > Switch0 (Config-if)# switchport port-security violation restrict
            </div>
            <div class="labexplan">
              3.a
            </div>
            <div class="labexplan2 font-italic">
              > Switch0(Config-if)# switchport port-security<br/>
              > Switch0 (Config-if)# switchport port-security mac-address sticky
            </div>
            <div class="labexplan">
              3.b
            </div>
            <div class="labexplan2 font-italic">
              > Switch0 (Config-if)# switchport port-security<br/>
              > Switch0 (Config-if)# switchport port-security maximum 3<br/>
              > Switch0 (Config-if)# switchport port-security mac-address sticky<br/>
              > Switch0 (Config-if)# switchport port-security violation restrict
            </div>
            <div class="labexplan">
              4.
            </div>
            <div class="labexplan2 font-italic">
              > Switch# show port-security<br/>
              > Switch# show port-security interface fastethernet 0/1<br/>
              > Switch# show port-security address<br/>
              > Switch# clear port-security sticky
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
    gotoHomework() { this.$router.push('/lab9_hw'); },
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