<template>
  <v-card class="mx-auto" max-width="1000" min-height="100">
    <br/>
    <p class="display-3 mb-3 text-center">LAB 1</p>
    <p class="title font-regular text-center">Basic Configuration Commands</p>
    <v-row justify="center">
      <v-img max-width="400" min-height="100" src="@/assets/lab/labpic/1.png"></v-img>
    </v-row>

    <v-stepper class="mt-12" v-model="e1" non-linear value="1" :alt-labels="altLabels">
      <v-stepper-header>
        <v-stepper-step complete editable step="1">brief</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="2">intro</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="3">1</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="4">2</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="5">3</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="6">4</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="7">5</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="8">6</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete editable step="9">Test</v-stepper-step>
      </v-stepper-header>

      <v-row align="center" justify="center">
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card-subtitle>
              <p class="display-2 font-weight-bold mb-3 text--primary">Brief Lab</p>
              <p class="subtitle-1 text--primary">
                โดยแลปนี้จะเป็นการใช้คำสั่งพื้นฐานทั่วไปและการใช้อุปกรณ์ เพื่อให้เกิดความคุ้นชินกับคำสั่งที่จะได้ใช้บ่อยๆในการทำแลป
                เช่น การใช้คำสั่งเพื่อดูค่าที่เราพึ่งตั้งค่าไปหรือการเข้าสู่โหมดต่างๆ<br/>
              </p>
              <p class="title text--primary">
                โดยวิธีการทำแลปนี้คือให้ Follow ตามแลปเลย
              </p>
            </v-card-subtitle>
            <v-btn color="primary" @click="e1 = 2">Next</v-btn>
          </v-stepper-content>
          
          <v-stepper-content step="2">
            <v-row align="center" justify="center">
              <v-col>
                <v-card class="mx-auto text-left" min-width="300" min-height="400">
                  <v-card-title>
                    <p class="headline text--primary">คำสั่งเพื่อเข้าสู่โหมดต่างๆ</p>
                  </v-card-title>
                  <v-card-subtitle>
                    <p class="subtitle-1 text--primary">
                      โหมด User<br />
                      Router><br /><br/>
                      เข้าสู่โหมด Privileged หรือบางครั้งจะเรียกว่า Enable mode <br />
                      Router> enable <br />
                      Router# <br /><br/>
                      เข้าสู่โหมด Global Configuration<br />
                      Router# configuration terminal <br />
                      Router(config)# <br />
                    </p>
                    <v-divider></v-divider>
                    <p class="subtitle-1 text--primary">
                      หากเราพิมพ์คำสั่งผิดและต้องการที่จะยกเลิกคำสั่งให้เรากด <br/>
                      <strong class="red--text"> Ctrl + Shift + 6 </strong>
                    </p>
                  </v-card-subtitle>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="mx-auto text-left" min-width="300" min-height="400">
                  <v-card-title>
                    <p class="headline text--primary">
                      อธิบายการใช้งานของแต่ละโหมด
                    </p>
                  </v-card-title>
                  <v-card-subtitle>
                    <p class="subtitle-1 text--primary">
                      User Mode : Prompt ของโหมดนี้จะมีสัญลักษณ์คือ ">" ต่อท้าย
                      โดยโหมดนี้เป็นโหมดที่ไว้ใช้ดูการทำงานทั่วไป
                      สามารถใช้คำสั่งพื้นฐานทั่วไปได้
                      เช่น ping , traceroute , show ip interface เป็นต้น
                    </p>
                    <p class="subtitle-1 text--primary">
                      Privileged Mode : Prompt ของโหมดนี้จะมีสัญลักษณ์คือ "#" ต่อท้าย
                      โดยโหมดนี้สามารถตั้งค่าต่างๆได้ เช่น copy running-config startup-config , show running-config
                    </p>
                    <p class="subtitle-1 text--primary">
                      Global Configuration Mode : Prompt ของโหมดนี้จะมีสัญลักษณ์คือ "(config)#" ต่อท้าย
                      โดยโหมดนี้จะสามารถตั้งค่าต่างๆที่ส่งผลกับตัวอุปกรณ์เช่นตั้งค่า Interface ของ Router
                    </p>
                  </v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
            <v-btn color="primary" @click="e1 = 3">Next</v-btn>
            <v-btn text @click="e1 = 1">Back</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
              <v-card-subtitle>
                <p class="subtitle-1 text--primary">
                  เปิดโปรแกรม Cisco Packet Tracer และ
                  เลือก Router รุ่น 4321 จากด้านล่างซ้ายมือไปวางไว้ที่ Workspace<br/>
                  <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-1.png"></v-img><br/>
                  คลิกเข้าไปที่ Router ที่เราพึ่งวางไปจะเข้าสู่หน้าต่างดังภาพด้านล่าง<br/>
                  เลือกหน้าต่าง Physical ทำการกดสวิตซ์ 1 ครั้งเพื่อปิด Router<br/>
                  <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-2.png"></v-img><br/>
                  ติดตั้ง Module ชื่อ NIM-Cover โดยการลากมาวางตรงช่องว่าง จากนั้นกดสวิตซ์ 1 ครั้งเพื่อเปิดเครื่อง<br/>
                  <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-3_1.png"></v-img><br/>
                  <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-3_2.png"></v-img><br/>
                </p>
              </v-card-subtitle>
            <v-btn color="primary" @click="e1 = 4">Next</v-btn>
            <v-btn text @click="e1 = 2">Back</v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-card-subtitle>
              <p class="subtitle-1 text--primary">
                จากนั้นมาที่หน้าต่าง CLI<br/>
              </p>
              <p class="subtitle-1">
                ------------- System Configuration Dialog -------------<br/>
                Would you like to enter the initial configuration dialog? [yes/no]: <br/>
              </p>
              <p class="subtitle-1 text--primary">
                ให้เราตอบว่า no<br/>
                เข้าสู่ Priviledge Mode และ Configuration Mode<br/>
              </p>
              <p class="subtitle-1">
                Router> enable<br/>
                Router# configuration terminal<br/>
                Router(config)# <br/>
              </p>
              <p class="subtitle-1 text--primary">
                ตั้งชื่อ Hostname ว่า R1 และตั้งรหัสผ่านเพื่อเข้าสู่ Priviledge Mode โดยรหัสผ่านคือ lab1
              </p>
              <p class="subtitle-1">
                เราสามารถใช้เครื่องหมาย ? เพื่อดูว่าสามารถใช้คำสั่งอะไรต่อไปได้บ้างเช่น<br/>
                <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-3_3.png"></v-img><br/>
                Router(config)# hostname R1<br/>
                R1(config)# enable password lab1<br/>
              </p>
            </v-card-subtitle>
            <v-btn color="primary" @click="e1 = 5">Next</v-btn>
            <v-btn text @click="e1 = 3">Back</v-btn>
          </v-stepper-content>

          <v-stepper-content step="5">
            <v-card-subtitle>
              <p class="subtitle-1 text--primary">
                กลับมาสู่ Priviledge Mode และใช้คำสั่งดูว่าตอนนี้มี Config อะไรบ้างที่ run อยู่ใน R1
              </p>
              <p class="subtitle-1">
                R1(config)# end<br/>
                R1# show running-config<br/>
                เราสามารถพิมพ์คำแบบย่อได้เช่น<br/>
                R1# sh ru<br/>
                หรือเราจะพิมพ์ตัวอักษรต้นๆของคำแล้วกด tab
              </p>
              <p class="subtitle-1 text--primary">
                <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-4.png"></v-img><br/>
                นี่คือ config ที่เราพึ่ง set ให้กับ Router ของเราโดยเราจะเห็นคำว่า <strong>-- More --</strong> ที่ด้านล่างสุด <br/>
                ถ้าเรากด enter จะเป็นการโชว์ข้อมูลบรรทัดต่อมาทีละบรรทัด<br/>
                แต่ถ้าเรากด spacerbar จะเป็นการโชว์ข้อมูลทีละหลายบรรทัด<br/>
                <v-divider></v-divider>
                ที่ Privileged Mode ทำการเขียน running configuration ไปยัง startup-config ที่เก็บอยู่ใน NVRAM<br/>
                หากเราทำการปิดและเปิด Router ใหม่ config ที่เราได้ config ไว้เมื่อครั้งที่แล้วจะถูกโหลดกลับมาอัตโนมัติ
              </p>
              <p class="subtitle-1">
                R1# copy running-config startup-config<br/>
                Destination filename [startup-config]? (กด enter 1 ครั้ง)<br/>
                Building configuration...<br/>
                [OK]<br/>
                R1#<br/>
              </p>
              <p class="subtitle-1 text--primary">
                ทำการปิดและเปิด Router จากนั้นใช้คำสั่งเพื่อดูว่า config ที่เราได้เขียนไว้ที่ startup-config นั้นทำงานหรือไม่<br/>
              </p>
              <p class="subtitle-1">
                R1# show running-config<br/>
              </p>
            </v-card-subtitle>
            <v-btn color="primary" @click="e1 = 6">Next</v-btn>
            <v-btn text @click="e1 = 4">Back</v-btn>
          </v-stepper-content>

          <v-stepper-content step="6">
            <v-card-subtitle>
              <p class="subtitle-1 text--primary">
                จากนั้นให้ทำการ Assign IP address ให้กับ R1 โดยให้ Interface GigabitEthernet0/0/0(เขียนแบบย่อว่า g0/0/0)<br/>
                มี IP address คือ 192.168.100.10 255.255.255.0<br/>
              </p>
              <p class="subtitle-1">
                R1(config)# interface g0/0/0<br/>
                R1(config-if)# ip address 192.168.100.10 255.255.255.0<br/>
                R1(config-if)# no shutdown<br/>
              </p>
              <p class="subtitle-1 text--primary">
                ตรวจสอบ IP address ที่พึ่ง Assign ไปโดยใช้คำสั่ง<br/>
              </p>
              <p class="subtitle-1">
                R1# show ip interface brief<br/>
              </p>
              <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/addition-1.png"></v-img><br/>
              <p class="subtitle-1 text--primary">
                เราสามารถกำหนดค่าของ router ผ่านการ telnet จาก PC เข้ามาที่ router โดยใช้ IP ของ router คือ 192.168.100.10<br/>
                ลาก PC มาวางที่พื้นที่ว่างและใช้สาย Copper Cross-Over เชื่อมระหว่าง Router(interface g0/0/0) กับ PC(interface Fa0)<br/>
                <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-5_1.png"></v-img><br/>
                <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-5_2.png"></v-img><br/>
                ที่หน้าต่าง Config เลือก FastEthernet0 ตั้งค่า IP address 192.168.100.20 255.255.255.0<br/>
                <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-5_3.png"></v-img><br/>
              </p>
            </v-card-subtitle>
            <v-btn color="primary" @click="e1 = 7">Next</v-btn>
            <v-btn text @click="e1 = 5">Back</v-btn>
          </v-stepper-content>

          <v-stepper-content step="7">
            <v-card-subtitle>
              <p class="subtitle-1 text--primary">
                ตรวจสอบว่า Router มีกี่ vty (Virtual Terminal lines) โดยใช้คำสั่ง show running-config<br/>
              </p>
              <p class="subtitle-1">
                R1# show running-config<br/><br/>
                <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-6.png"></v-img><br/>
              </p>
              <p class="subtitle-1 text--primary">
                กำหนด Password สำหรับการ login ผ่าน telnet โดย password คือ telnet<br/>
              </p>
              <p class="subtitle-1">
                R1(config)# line vty 0 4<br/>
                R1(config-line)# password telnet<br/>
                R1(config-line)# login<br/>
              </p>
              <p class="subtitle-1 text--primary">
                ที่ PC0 หน้าต่าง Desktop เลือก Command Prompt ทำการ telnet ไปที่ 192.168.100.10<br/>
              </p>
              <p class="subtitle-1">
                C:\telnet 192.168.100.10<br/>
                password คือ telnet<br/>
                <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-7.png"></v-img><br/>
              </p>
            </v-card-subtitle>
            <v-btn color="primary" @click="e1 = 8">Next</v-btn>
            <v-btn text @click="e1 = 6">Back</v-btn>
          </v-stepper-content>

          <v-stepper-content step="8">
            <v-card-subtitle>
              <p class="subtitle-1 text--primary">
                ทดลอง Assign IP ให้กับ Router(interface GigabitEthernet0/0/1) ผ่านทาง PC0 โดย IP address คือ 192.168.200.10<br/>
              </p>
              <p class="subtitle-1">
                โดยเมื่อใช้คำสั่ง telnet password คือ telnet และเมื่อใช้คำสั่ง enable password คือ lab1 <br/>
                R1(config)# int g0/0/1<br/>
                R1(config-if)# ip address 192.168.200.10 255.255.255.0<br/>
                R1(config-if)# no shutdown<br/>
                <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-8.png"></v-img><br/>
              </p>
              <p class="subtitle-1 text--primary">
                กลับมาที่ Router และเช็คว่า IP address ที่เรา assign ผ่านทาง PC0 นั้นสำเร็จหรือไม่<br/>
              </p>
              <p class="subtitle-1">
                R1#show ip interface brief<br/>
                <v-img max-width="700" min-height="100" src="@/assets/lab/lab1/lab1-9.png"></v-img><br/>
              </p>
            </v-card-subtitle>
            <v-btn color="primary" @click="e1 = 9">Next</v-btn>
            <v-btn text @click="e1 = 7">Back</v-btn>
          </v-stepper-content>

          <v-stepper-content step="9">
            <v-card-subtitle>
              <v-radio-group v-model="lab1config_no1">
                <p class="subtitle-1 text--primary"><strong>คำถามเกี่ยวกับการ config</strong></p>
                <div>1. แลปนี้ใช้ Router รุ่นใดในการสาธิต</div>
                <template v-slot:label>
                </template>
                <v-radio value=1>
                  <template v-slot:label>
                    <div>ISR4331</div>
                  </template>
                </v-radio>
                <v-radio value=2>
                  <template v-slot:label>
                    <div>ISR4321</div>
                  </template>
                </v-radio>
                <v-radio value=3>
                  <template v-slot:label>
                    <div>ISR4311</div>
                  </template>
                </v-radio>
              </v-radio-group>

              <v-radio-group v-model="lab1config_no2">
                <div>2. คำสั่งที่ใช้ในการเขียน running-config ที่กำลัง run อยู่บน Router เขียนไปยัง startup-config ที่อยู่บน NVRAM</div>
                <template v-slot:label>
                </template>
                <v-radio value=1>
                  <template v-slot:label>
                    <div>R1# copy running-config to startup-config</div>
                  </template>
                </v-radio>
                <v-radio value=2>
                  <template v-slot:label>
                    <div>R1# copy running-config startup-config</div>
                  </template>
                </v-radio>
                <v-radio value=3>
                  <template v-slot:label>
                    <div>R1# running-config copy startup-config</div>
                  </template>
                </v-radio>
              </v-radio-group>

              <v-radio-group v-model="lab1config_no3">
                <div>3. คำสั่งใดที่ใช้ดูค่าทั้งหมดที่เรา config ให้กับอุปกรณ์</div>
                <template v-slot:label>
                </template>
                <v-radio value=1>
                  <template v-slot:label>
                    <div>R1# show all configurations</div>
                  </template>
                </v-radio>
                <v-radio value=2>
                  <template v-slot:label>
                    <div>R1# show running-config</div>
                  </template>
                </v-radio>
                <v-radio value=3>
                  <template v-slot:label>
                    <div>R1# show writing-config</div>
                  </template>
                </v-radio>
              </v-radio-group>

              <v-radio-group v-model="lab1config_no4">
                <div>4. คำสั่ง enable เป็นคำสั่งเพื่อเข้าสู่โหมดใด</div>
                <template v-slot:label>
                </template>
                <v-radio value=1>
                  <template v-slot:label>
                    <div>User Mode</div>
                  </template>
                </v-radio>
                <v-radio value=2>
                  <template v-slot:label>
                    <div>Privileged Mode</div>
                  </template>
                </v-radio>
                <v-radio value=3>
                  <template v-slot:label>
                    <div>Global Configuration Mode</div>
                  </template>
                </v-radio>
              </v-radio-group>

              <v-radio-group v-model="lab1config_no5">
                <div>5. คำสั่งใดที่ใช้เพื่อเข้าไป config Interface GigabitEthernet 0/0/0</div>
                <template v-slot:label>
                </template>
                <v-radio value=1>
                  <template v-slot:label>
                    <div>R1(config)# config interface g0/0/0</div>
                  </template>
                </v-radio>
                <v-radio value=2>
                  <template v-slot:label>
                    <div>R1(config)# config g0/0/0</div>
                  </template>
                </v-radio>
                <v-radio value=3>
                  <template v-slot:label>
                    <div>R1(config)# interface g0/0/0</div>
                  </template>
                </v-radio>
              </v-radio-group>

              <v-radio-group v-model="lab1config_no6">
                <div>6. เมื่อเราพิมพ์คำสั่งผิดทำให้หน้าต่าง CLI ค้าง ไม่สามารถพิมพ์อะไรได้และเราต้องการที่จะยกเลิกคำสั่ง วิธีแก้ไขที่ควรทำคือวิธีใด</div>
                <template v-slot:label>
                </template>
                <v-radio value=1>
                  <template v-slot:label>
                    <div>กด Ctrl + Shift + 6</div>
                  </template>
                </v-radio>
                <v-radio value=2>
                  <template v-slot:label>
                    <div>ปิดหน้าต่างและเปิดใหม่</div>
                  </template>
                </v-radio>
                <v-radio value=3>
                  <template v-slot:label>
                    <div>ปิดสวิตซ์ของอุปกรณ์และเปิดใหม่</div>
                  </template>
                </v-radio>
              </v-radio-group>

              <v-btn color="red" @click="saveResult(lab1config_no1, lab1config_no2, lab1config_no3, lab1config_no4, lab1config_no5, lab1config_no6)">Check</v-btn>
              <p></p><v-divider></v-divider><br/>
              <div class="d-flex justify-space-around mb-6 outlined">
                <div class="pa-2 outlined">
                  <v-btn color="white" @click="e1 = 7">Back</v-btn>
                </div>
                <div class="pa-2 outlined">
                  <v-btn color="green" @click="e1 = 1">Back to Step 1</v-btn>
                </div>
                <div class="pa-2 outlined">
                  <v-btn color="primary" @click="toLab2">LAB 2</v-btn>
                </div>
              </div>
            </v-card-subtitle>
          </v-stepper-content>
        </v-stepper-items>
      </v-row>
    </v-stepper>
  </v-card>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { db } from '../main'

export default {
  data() {
    return {
      e1: 1,
      altLabels: true,
      radios: 'True',
      lab1config_no1: Number,
      lab1config_no2: Number,
      lab1config_no3: Number,
      lab1config_no4: Number,
      lab1config_no5: Number,
      lab1config_no6: Number,
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
    toLab2() {
      this.$router.push("/lab2");
    },
    saveResult (LAB1CONFIG_NO1, LAB1CONFIG_NO2, LAB1CONFIG_NO3, LAB1CONFIG_NO4, LAB1CONFIG_NO5, LAB1CONFIG_NO6) {
      const createdAt = new Date()
      db.collection("user").doc(this.email).collection("lab1")
      .add({ LAB1CONFIG_NO1, LAB1CONFIG_NO2, LAB1CONFIG_NO3, LAB1CONFIG_NO4, LAB1CONFIG_NO5, LAB1CONFIG_NO6, createdAt })
    }
  }
};
</script>