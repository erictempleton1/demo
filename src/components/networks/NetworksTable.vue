<template>
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">Networks</h1>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Created</md-table-head>
        <md-table-head>Modified</md-table-head>
        <md-table-head>Status</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>100</md-table-cell>
        <md-table-cell>Cool network</md-table-cell>
        <md-table-cell>3/31/2018</md-table-cell>
        <md-table-cell>4/1/2018</md-table-cell>
        <md-table-cell>Paused</md-table-cell>
      </md-table-row>
    </md-table>
</template>

<script>
export default {
  name: 'NetworksTable',
};
</script>
