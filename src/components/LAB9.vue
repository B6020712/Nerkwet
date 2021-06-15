<template>
  <div>
    <v-row>
      <v-col width="30%">
        <br />
        <v-card class="mx-auto" max-width="900px" min-height="100px">
          <br />
          <div class="display-3 mb-3 text-center">LAB 9</div>
          <div class="title font-regular text-center">ACL</div>

          <v-row align="center" justify="center">
            <v-card-text>
              <p class="subtitle-1 text--primary">
                <v-img max-width="1100" min-height="100" src="@/assets/lab/labpic/9.png"></v-img><br/>
              </p>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>

      <v-col width="70%">
        <br />
        <v-card class="mx-auto" max-width="900px" min-height="100px">
          <v-row align="center" justify="center">
            <v-card-title>
              <p class="headline text--primary text-center">อธิบายแลป</p>
            </v-card-title>
            <v-card-subtitle>
              <p class="subtitle-1 text--primary text-center">
                - - - - - - - - - - - - - - - - - - - Right Group - - - - - - - - - - - - - - - - - - -<br/>
              </p>
              <p class="subtitle-1 text--primary">
              Right Group ได้รับ Block of address จาก ISP เริ่มที่ 192.168.1.0/26 โดย Right Group มี่ HOST ทั้งหมด 61 เครื่อง <br/>
              สิ่งที่ต้องทำคือ<br/>
              1. Interface ของ Router แต่ละสาขาเป็น IP Address แรกที่ใช้ได้<br/>
              2. จัดสรร IP Address โดยให้ PC1 เป็น Address แรกที่ใช้ได้ และ PC2 เป็น IP Address สุดท้ายที่ใช้ได้
              </p>
              <p class="subtitle-1">
                คำสั่งที่ใช้คือ<br/>
                Router(config)# interface g0/0 หรือ Router(config)# interface g0/1<br/>
                Router(config-if)# ip address 192.168.x.x 255.255.x.x<br/>
                Router(config-if)# no shutdown<br/>
              </p>
              <p class="subtitle-1 text--primary text-center">
                - - - - - - - - - - - - - - - - - - - Left Group - - - - - - - - - - - - - - - - - - -<br/>
              </p>
              <p class="subtitle-1 text--primary">
                Left Group ได้รับ Block of Address จาก ISP เริ่มที่ 172.16.0.0/26 โดย Left Group มี่ HOST ทั้งหมด 61 เครื่อง <br/>
                สิ่งที่ต้องทำคือ<br/>
                3. Interface ของ Router แต่ละสาขาเป็น IP Address แรกที่ใช้ได้<br/>
                4. จัดสรร IP Address โดยให้ PC3 เป็น Address แรกที่ใช้ได้ และ PC4 เป็น IP Address สุดท้ายที่ใช้ได้<br/>
                5. ทำให้ PC1 ping หา PC3 ได้ <br/>        
                6. ทำให้ PC2 ping หา PC4 ได้ <br/>        
              </p>

              <div class="d-flex justify-space-around mb-6 outlined">
                <v-spacer></v-spacer>
                <v-btn @click="labresult" color="red">Result</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="gotoHomework" color="primary">Homework</v-btn>
                <v-spacer></v-spacer>
              </div>

              <div v-if="result" class="text--primary" style="text-align: left">
                <v-divider></v-divider><br />
                <h1>ผลลัพธ์ของการทำแลป</h1><br />
                <div>result : </div>
              </div>
            </v-card-subtitle>
          </v-row>
        </v-card>
      </v-col>
      <!-- End Here -->
    </v-row>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
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
    labresult() { return this.result = true; },
    gotoHomework() { this.$router.push('/lab9_hw'); },
  }
};
</script>