<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <login-component />
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LoginComponent from './components/LoginComponent.vue';

export default {
  components: { LoginComponent },
  name: 'App' ,
};
</script>