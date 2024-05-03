<template>
    <v-app-bar color="white" height="150" :image="headerImage"  prominent app>
      <!-- Logo and site name on the left -->
      <div class="d-flex justify-space-between align-center header">
            <v-toolbar-title  class="logo-title">
                <v-img src="path_to_logo.png" class="mr-2" height="30" contain></v-img>
                <h1>Union Marketing Services</h1>
            </v-toolbar-title>
        
            <!-- Centered navigation links -->
            <div class="header-buttons">
                <v-btn text>Services</v-btn>
                <v-btn text>About Us</v-btn>
                <v-btn text>Contact Us</v-btn>
            </div>   
       
      </div>
    </v-app-bar>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import HeaderImage from '../assets/header-background.jpg';
  
  const headerImage = ref(HeaderImage);
  </script>
  
  <style scoped>
  .logo-title {
    padding-left: 20px;

  }
  .header {
    width:100%;
    font-family: 'Oswald', sans-serif;
    color:#142445;
  }
  .header-buttons .v-btn {
    font-size: 2rem;
    color:#142445;
  }
  </style>
  