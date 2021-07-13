<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <br />
          <div class="display-3 mb-3 text-center">LAB 8</div>
          <div class="title font-regular text-center">NAT and Network Services</div>
          <div align="center" justify="center">
            <v-img width="1100" src="@/assets/lab/lab8/lab8Learning1.png"></v-img><br/>
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto" min-width="500">
          <br/>
          <div class="headline text--primary labexplan">อธิบายวิธีการทำ</div>
          <div class="text--primary labexplan">
            1.สร้างเครือข่ายคอมพิวเตอร์และกําหนดค่า IP Addresses ตาม Figure 1
          </div>
          <div class="text--primary labexplan2">
            a.Public IP address ของ Serial Link ระหว่าง Router0 และ Router1 มี Network Address คือ 1.1.1.0/27<br/>
            b.Router0 Se0/0/0 มี IP address คือ 1.1.1.1/27, Router1 Se0/0/1 มี IP address คือ 1.1.1.2/27 เป็นต้น<br/>
            c.Server0 เชื่อมต่อกับ Router1 G0/0 และมีกําหนดค่า Private IP address เป็น 172.16.1.2/24<br/>
            d.Server1 เชื่อมต่อกับ Router1 G0/1 และมีกําหนดค่า Private IP address เป็น 172.16.2.2/24<br/>
            e.กําหนดค่า IP address ให้กับ PC ทั้งสามและขาในของ Router0 และ Router1 ให้เรียบร้อย
          </div>
          <div class="text--primary labexplan">
            2.กําหนดค่าการทํางานของ NAT ที่ Router0 เป็น <span class="red--text">Dynamic NAT</span>
          </div>
          <div class="text--primary labexplan2">
            a.กําหนด Access-List ที่ 10 (ไว้ระบุแต่ละ Access-List) เพื่อเป็นการระบุว่าให้กลุ่ม IP addresses นี้สามารถใช้ NAT ได้ (Private IP addresses ที่จะถูกแปลงเป็น Public IP address ด้วย NAT)
          </div>
          <div class="text--primary labexplan3">
            <span class="red--text">***Access-List ในกรณีนี้ไม่ได้มีไว้เพื่อเหตุผลด้าน Security แต่เพื่อบอกว่ากลุ่ม IP addresses นี้เป็นกลุ่มที่สนใจและส่งไปให้ NAT process ทําการแปลง)***<br/></span>
          </div>
          <div class="text--primary labexplan2">
            b.สร้าง NAT Pool สําหรับกรณี Dynamic NAT ให้ 1.1.1.0/27 โดยใช้จาก IP address: 1.1.1.5 ถึง 1.1.1.8 และนําไปทํางานร่วมกับ Access-List ที่ได้สร้างไว้<br/>
            c.ทําการระบฝั่ง inside และ outside สําหรับ NAT ให้แต่ละ Interface ด้วยคําสั่ง
          </div>
          <div class="text--primary labexplan">
            3.กําหนดค่าการทํางานของ NAT ที่ Router1 เป็น <span class="red--text">Static NAT</span>
          </div>
          <div class="text--primary labexplan2">
            a.กําหนด Static NAT ให้กับ <span class="primary--text">Server0 โดยจับคู่ PrivateIP 172.16.1.2 กับ PublicIP 1.1.1.10</span> และ <span class="green--text">Server1 โดยจับคู่ PrivateIP 172.16.2.2 กับ PublicIP 1.1.1.11</span><br/>
            b.ทําการระบฝั่ง inside และ outside สําหรับ NAT ให้แต่ละ Interface
          </div>
          <div class="text--primary labexplan">
            4.ทดสอบด้วยการ Ping จาก PC ไปยัง Server0 และ Server1 แล้วสามารถตรวจสอบค่า NAT ที่กําหนดไปด้วยคําสั่ง
          </div>
          <div class="headline text--primary labexplan" style="margin-top: 15px">หากทำสำเร็จ</div>
          <div class="text--primary labexplan">
            สามารถ Ping จาก PC0, PC1, PC2 ไปยัง Public IP address ของ Server0 และ Server1 ได้
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
              <v-img width="550" src="@/assets/lab/lab8/lab8Result1.png"></v-img><br/>
            </div>
            <!-- <div class="labexplan2">> ping จาก B2 ไปยัง B1 (Vlan20)</div><br/> -->
            <div align="center" justify="center">
              <v-img width="550" src="@/assets/lab/lab8/lab8Result2.png"></v-img><br/>
            </div>
            <!-- <div class="labexplan2">> ping จาก B2 ไปยัง B1 (Vlan20)</div><br/> -->
            <div align="center" justify="center">
              <v-img width="550" src="@/assets/lab/lab8/lab8Result3.png"></v-img><br/>
            </div>
            <br/>
          </div>
            
          <div v-if="command" class="text--primary">
            <v-divider></v-divider><br/>
            <div class="headline text--primary labexplan">คำสั่งที่ใช้ในการทำ (ตามหัวข้อ)</div>
            <div class="labexplan">
              2.a
            </div>
            <div class="labexplan2 font-italic">
              <span class="red--text">***Access-List ในกรณีนี้ไม่ได้มีไว้เพื่อเหตุผลด้าน Security แต่เพื่อบอกว่ากลุ่ม IP addresses นี้เป็นกลุ่มที่สนใจและส่งไปให้ NAT process ทําการแปลง)***<br/></span>
              > Router0(Config)# access-list 10 permit 192.168.1.0 0.0.0.255<br/>
              > Router0(Config)# access-list 10 permit 192.168.2.0 0.0.0.255<br/>
              > Router0(Config)# access-list 10 permit 192.168.3.0 0.0.0.255
            </div>
            <div class="labexplan">
              2.b
            </div>
            <div class="labexplan2 font-italic">
              > Router0(config)# ip nat pool NAT {{msg1}} {{msg2}} netmask {{msg3}}<br/>
              > Router0(config)# ip nat inside source list 10 pool NAT
            </div>
            <div class="labexplan">
              2.c
            </div>
            <div class="labexplan2 font-italic">
              > ใช้คําสั่ง Router(Config-if)# ip nat inside ให้กับ Interface G0/0, G0/1, G0/2<br/>
              > ใช้คําสั่ง Router(Config-if)# ip nat outside ให้กับ Interface Se0/0/0
            </div>
            <div class="labexplan">
              3.a
            </div>
            <div class="labexplan2 font-italic">
              > Router0(Config)# ip nat inside source static 172.16.1.2 1.1.1.10<br/>
              > Router0(Config)# ip nat inside source static 172.16.2.2 1.1.1.11
            </div>
            <div class="labexplan">
              3.b
            </div>
            <div class="labexplan2 font-italic">
              > ใช้คําสั่ง Router(Config-if)# ip nat inside ให้กับ Interface G0/0, G0/1<br/>
              > ใช้คําสั่ง Router(Config-if)# ip nat outside ให้กับ Interface Se0/0/1
            </div>
            <div class="labexplan">
              4.
            </div>
            <div class="labexplan2 font-italic">
              > Router# show access-list<br/>
              > Router# show ip nat translations<br/>
              > Router# show ip nat statistics<br/>
              > Router# debug ip nat
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
      msg1: "<IP_ที่ใช้ได้ตัวแรก>",
      msg2: "<IP_ที่ใช้ได้ตัวสุดท้าย>",
      msg3: "<net_mask>",
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
    gotoHomework() { this.$router.push('/lab8_hw'); },
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