<template>
    <div class="headline-container">
      <p class="headline">ELEVATE YOUR BRAND</p>
      <div class="d-flex justify-space-between description-container">
        <div class="description-image">
          <img class="headline-image" src="../assets/home-headline.jpg">
        </div>
        <div>
          <p class="headline-description">
            At Union Marketing, we specialize in transforming your business aspirations into tangible successes. 
            With a unique blend of cutting-edge web development, strategic marketing solutions, and personalized attention, 
            we ensure that your brand exceeds its goals. Partner with us and watch your vision come to life, one successful 
            campaign at a time.
          </p>
          <v-col cols="12" md="4" sm="6">
            <v-btn class="get-started-btn" :width="200" :height="60">Get Started</v-btn>
          </v-col>
        </div>
      </div>
    </div>

  </template>
  
  <script>
  export default {
      name: 'HomePage'
  }
  </script>
  
  <style scoped>
  h1 {
      color: #142445;
  }
  .headline-container {
    width:1400px;
    font-family: 'Montserrat', sans-serif;
    margin-top:100px;
    margin-left:auto;
    margin-right:auto;
  }
  .headline {
    font-size: 5.5rem;
    color: #142445;
  }
  .headline-description {
    text-align: start;
    margin-top:75px;
    width:450px;
    font-size:1.25rem;
  }
  .get-started-btn {
    background-color: #184690;
    color:white;
    font-size:1.25rem;
    margin-top:43px;
    margin-right:85px;
  }
  .description-container {
    width:80%;
    margin-left:auto;
    margin-right:auto;
  }
  .headline-image {
    margin-top: 50px;
    width:600px;
    height:400px;
    border-radius: 50px;
  }


  </style>
  