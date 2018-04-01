<template>
    <div class="page-container">
        <nav-bar></nav-bar>
        <networks-table></networks-table>
    </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar';
import NetworksTable from '@/components/networks/NetworksTable';

export default {
  name: 'Networks',
  components: { NavBar, NetworksTable },
};
</script>
