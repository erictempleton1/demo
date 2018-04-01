<template>
  <div class="page-container">
      <nav-bar></nav-bar>
      <side-bar></side-bar>
      <router-link :to="{ name: 'Networks' }">Networks</router-link>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar';
import SideBar from '@/components/sidebar/SideBar';

export default {
  components: { NavBar, SideBar },
  name: 'Canvas',
};
</script>

<style>
</style>
