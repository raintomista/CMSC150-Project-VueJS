<template>
  <div>
    <md-subheader>Augmented Coefficient Matrix</md-subheader>
    <md-table md-card>
      <md-table-row>
        <md-table-head>a2</md-table-head>
        <md-table-head>a3</md-table-head>
        <md-table-head>b1</md-table-head>
        <md-table-head>b2</md-table-head>
        <md-table-head>b3</md-table-head>
        <md-table-head>c1</md-table-head>
        <md-table-head>c2</md-table-head>
        <md-table-head>c3</md-table-head>
        <md-table-head>RHS</md-table-head>
      </md-table-row>
      <md-table-row v-for="(row, index1) in dataArray" v-bind:key="index1">
        <md-table-cell v-for="(element, index2) in row" v-bind:key="index2">
          {{element}}
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'AugcoeffQSI',
    props: {
      dataArray: Array
    },
  }
</script>

<style scoped>
  .md-card {
    margin-bottom: 20px;
  }
</style>
