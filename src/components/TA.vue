<template>
  <v-row justify="center">
    <v-col cols="10" md="10" lg="10">
      <v-card class="mx-auto" width="1200"><br/>
        <table class="labexplan2" style="width:100%; margin-top:10px;">
          <tr>
            <td><div class="tabletextCenter">รหัสนักศึกษา</div></td>
            <td><div class="tabletextCenter">LAB 1</div></td>
            <td><div class="tabletextCenter">LAB 2</div></td>
            <td colspan="2"><div class="tabletextCenter">LAB 3</div></td>
            <td><div class="tabletextCenter">LAB 4</div></td>
            <td><div class="tabletextCenter">LAB 5</div></td>
            <td><div class="tabletextCenter">LAB 6</div></td>
            <td><div class="tabletextCenter">LAB 7</div></td>
            <td><div class="tabletextCenter">LAB 8</div></td>
            <td><div class="tabletextCenter">LAB 9</div></td>
          </tr>
          <tr v-for="n in studentAllCount" :key="n">
            <td><div v-if="showTable" class="tabletext">{{studentAll[n-1]}}</div></td>
            <td><div v-if="showTable" class="tabletextCenter">
              <a v-if="showLabURL[n-1][1] != null" :href='showLabURL[n-1][1]'>LAB1</a>
              <div v-else-if="showLabURL[n-1][1] == null">null</div>
            </div></td>
            <td><div v-if="showTable" class="tabletextCenter">
              <a v-if="showLabURL[n-1][2] != null" :href='showLabURL[n-1][2]'>LAB2</a>
              <div v-else-if="showLabURL[n-1][2] == null">null</div>
            </div></td>
            <td><div v-if="showTable" class="tabletextCenter">
              <a v-if="showLabURL[n-1][3] != null" :href='showLabURL[n-1][3]'>LAB31</a>
              <div v-else-if="showLabURL[n-1][3] == null">null</div>
            </div></td>
            <td><div v-if="showTable" class="tabletextCenter">
              <a v-if="showLabURL[n-1][4] != null" :href='showLabURL[n-1][4]'>LAB32</a>
              <div v-else-if="showLabURL[n-1][4] == null">null</div>
            </div></td>
            <td><div v-if="showTable" class="tabletextCenter">
              <a v-if="showLabURL[n-1][5] != null" :href='showLabURL[n-1][5]'>LAB4</a>
              <div v-else-if="showLabURL[n-1][5] == null">null</div>
            </div></td>
            <td><div v-if="showTable" class="tabletextCenter">
              <a v-if="showLabURL[n-1][6] != null" :href='showLabURL[n-1][6]'>LAB5</a>
              <div v-else-if="showLabURL[n-1][6] == null">null</div>
            </div></td>
            <td><div v-if="showTable" class="tabletextCenter">
              <a v-if="showLabURL[n-1][7] != null" :href='showLabURL[n-1][7]'>LAB6</a>
              <div v-else-if="showLabURL[n-1][7] == null">null</div>
            </div></td>
            <td><div v-if="showTable" class="tabletextCenter">
              <a v-if="showLabURL[n-1][8] != null" :href='showLabURL[n-1][8]'>LAB7</a>
              <div v-else-if="showLabURL[n-1][8] == null">null</div>
            </div></td>
            <td><div v-if="showTable" class="tabletextCenter">
              <a v-if="showLabURL[n-1][9] != null" :href='showLabURL[n-1][9]'>LAB8</a>
              <div v-else-if="showLabURL[n-1][9] == null">null</div>
            </div></td>
            <td><div v-if="showTable" class="tabletextCenter">
              <a v-if="showLabURL[n-1][10] != null" :href='showLabURL[n-1][10]'>LAB9</a>
              <div v-else-if="showLabURL[n-1][10] == null">null</div>
            </div></td>
          </tr>
        </table>
        <v-btn class="ma-2" color="primary" style="margin-top:10px;" @click="search">แสดงข้อมูล</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { storage } from '../main'
export default {
  data() {
    return {
      showTable: false,
      countLAB: Number,
      showLabNo: [],
      showLabURL: [[]],
      downloadObj: [],
      studentAll: [],
      studentAllCount: 0,
      studentId: "",
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 8),
      ],
    }
  },

  /* eslint-disable */
  created() {
    firebase.auth().onAuthStateChanged(user => {
      storage.ref().listAll().then(res => {
        var count = 0
        res.prefixes.forEach(resPrefix => {
          this.studentAll[count] = resPrefix.fullPath
          count++
        })
        this.studentAllCount = this.studentAll.length - 2

        /* ติดตรง loop หายไป 1 url คือ lab 4 */
        for (let j = 0 ; j < this.studentAllCount ; j++) {
          this.showLabURL[j] = []
          for (let i = 1, k = 1 ; i <= 9 ; i++, k++) {
            console.log(i, k)
            let saveName = this.studentAll[j] + "_LAB" + i + "Assignment1";
            let saveName2 = this.studentAll[j] + "_LAB" + i + "Assignment2";
            if ( i == 3 ) {
              storage.ref().child(this.studentAll[j] + "/LAB" + i + "/" + saveName).getDownloadURL().then(url => {
                this.showLabURL[j][3] = url;
              }).catch(err => {
                this.showLabURL[j][3] = null;
              })
              storage.ref().child(this.studentAll[j] + "/LAB" + i + "/" + saveName2).getDownloadURL().then(url => {
                this.showLabURL[j][4] = url;
              }).catch(err => {
                this.showLabURL[j][4] = null;
              })
              k = 4;
            } else {
              storage.ref().child(this.studentAll[j] + "/LAB" + i + "/" + saveName).getDownloadURL().then(url => {
                this.showLabURL[j][k] = url;
              }).catch(err => { 
                this.showLabURL[j][k] = null;
              })
            }
          }
        }
      })
    })
  },
  methods: {
    search() { this.showTable = (this.showTable == true) ? false : true },
  }
}
</script>

<style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
  .lineItem {
    text-align: left;
    margin-top: 5px;
    margin-left: 20px;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  .tabletextCenter {
    text-align: center;
  }
  .tabletext {
    margin-left: 5px;
  }
</style>