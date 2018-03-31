<template>
  <div id="app" class="page-container">
      <nav-bar></nav-bar>
      <side-bar></side-bar>
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
