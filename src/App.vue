<template>
  <div id="app">
    <Header />
    <nav>
      <router-link to="/">Who Am I</router-link>
      <router-link to="/WhatIDo">What I Do</router-link>
      <router-link to="/Hobbies">Hobbies</router-link>
    </nav>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>