<template>
  <v-app>    
    <app-navigation-drawer></app-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer></v-footer>
  </v-app>
</template>

<script setup>
import AppNavigationDrawer from './components/AppNavigationDrawer.vue'
</script>
