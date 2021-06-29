<template>
  <v-container>
    <v-row width="90%">
        <v-col v-for="(item, index) in items1" :key="item.title" link width="25%">
          <v-card class="card" color="blue lighten-5"><div class="div1">{{item.title}}</div><div class="div2">{{item.head}}</div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn v-on:click="goto(item.action)" class="ma-2" outlined color="indigo">LAB</v-btn>
              <v-btn v-if="index != 0" v-on:click="goto(item.action2)" class="ma-2" outlined color="red">Assignment</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
    <v-row width="90%">
        <v-col v-for="item in items2" :key="item.title" link width="25%">
          <v-card class="card" color="blue lighten-5"><div class="div1">{{item.title}}</div><div class="div2">{{item.head}}</div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn v-on:click="goto(item.action)" class="ma-2" outlined color="indigo">LAB</v-btn>
              <v-btn v-on:click="goto(item.action2)" class="ma-2" outlined color="red">Assignment</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
    <v-row width="90%">
        <v-col v-for="item in items3" :key="item.title" link width="25%">
          <v-card class="card" color="blue lighten-5"><div class="div1">{{item.title}}</div><div class="div2">{{item.head}}</div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn v-on:click="goto(item.action)" class="ma-2" outlined color="indigo">LAB</v-btn>
              <v-btn v-on:click="goto(item.action2)" class="ma-2" outlined color="red">Assignment</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LabSum',
  data() {
    return {
      items1: [
        { title: 'BEFORE LAB', head: 'Downloading Cisco Packet Tracer' , action: "/beforelab" },
        { title: 'LAB 1', head: 'Basic Configuration' , action: "/lab1" , action2: "/lab1_hw"},
        { title: 'LAB 2', head: 'IP Addressing' , action: "/lab2" , action2: "/lab2_hw"},
      ],
      items2: [
        { title: 'LAB 3', head: 'VLANs (1)' , action: "/lab3" , action2: "/lab3_hw"},
        { title: 'LAB 4', head: 'VLANs Trunking and EtherChannel (2)' , action: "/lab4" , action2: "/lab4_hw"},
        { title: 'LAB 5', head: 'Static Routing (1)' , action: "/lab5" , action2: "/lab5_hw"},
      ],
      items3: [
        { title: 'LAB 6', head: 'Static Routing (2)' , action: "/lab6" , action2: "/lab6_hw"},
        { title: 'LAB 7', head: 'IPv6' , action: "/lab7" , action2: "/lab7_hw"},
        { title: 'LAB 8', head: 'NAT and Network Services' , action: "/lab8" , action2: "/lab8_hw"},
        { title: 'LAB 9', head: 'ACL' , action: "/lab9" , action2: "/lab9_hw"},
      ],
      // items1: [
      //   { title: 'BEFORE LAB', head: 'Downloading Cisco Packet Tracer' , action: "/beforelab" , action2: "/lab0_hw"},
      //   { title: 'LAB 1', head: 'Basic Configuration' , action: "/lab1" , action2: "/lab1_hw"},
      //   { title: 'LAB 2', head: 'IP Addressing' , action: "/lab2" , action2: "/lab2_hw"},
      //   { title: 'LAB 3', head: 'VLANs (1)' , action: "/lab3" , action2: "/lab3_hw"},
      // ],
      // items2: [
      //   { title: 'LAB 4', head: 'VLANs Trunking and EtherChannel (2)' , action: "/lab4" , action2: "/lab4_hw"},
      //   { title: 'LAB 5', head: 'Static Routing (1)' , action: "/lab5" , action2: "/lab5_hw"},
      //   { title: 'LAB 6', head: 'Static Routing (2)' , action: "/lab6" , action2: "/lab6_hw"},
      //   { title: 'LAB 7', head: 'IPv6' , action: "/lab7" , action2: "/lab7_hw"},
      // ],
      // items3: [
      //   { title: 'LAB 8', head: 'NAT and Network Services' , action: "/lab8" , action2: "/lab8_hw"},
      //   { title: 'LAB 9', head: 'ACL' , action: "/lab9" , action2: "/lab9_hw"},
      //   { title: '-', head: '-' , action: "-" , action2: "-"},
      //   { title: '-', head: '-' , action: "-" , action2: "-"},
      // ],
    }
  },
  methods: {
    goto: function (to) {
      this.$router.push(to);
    }
  }
}
</script>

<style>
  .card {
    height: 150px;
    width: 100%;
    text-align: center;
  }
  .div1 {
    padding-top: 10px;
  }
  .div2 {
    font-weight: bold;
    padding-top: 10px;
  }
</style>