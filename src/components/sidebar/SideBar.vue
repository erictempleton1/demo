<template>
  <md-app-drawer md-permanent="card">
      <md-list>
          <side-bar-devices></side-bar-devices>
          <side-bar-modes></side-bar-modes>
          <side-bar-options></side-bar-options>
      </md-list>
  </md-app-drawer>
</template>

<script>
import SideBarDevices from '@/components/sidebar/SideBarDevices';
import SideBarModes from '@/components/sidebar/SideBarModes';
import SideBarOptions from '@/components/sidebar/SideBarOptions';

export default {
  name: 'SideBar',
  components: { SideBarDevices, SideBarModes, SideBarOptions },
};
</script>

<style>
.md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
