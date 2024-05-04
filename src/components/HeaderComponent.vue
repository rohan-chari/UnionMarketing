<template>
    <v-app-bar color="white" height="130" :image="headerImage" app>
      <!-- Logo and site name on the left -->
      <div class="d-flex justify-space-between align-center header">
            <v-toolbar-title  class="logo-title">
                <img src="../assets/ums-logo.png" class="mr-2 ums-logo" height="30" contain>
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
        font-family: 'Montserrat', sans-serif;
        color:#142445;
    }
    .header-buttons .v-btn {
        padding-top:10px;
        font-size: 1.75rem;
        color:#142445;
    }

    .ums-logo {
        width:260px;
        height:225px;
        margin-top:20px;
    }
</style>
