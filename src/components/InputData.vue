<template>
  <div>
    <md-subheader>Input Data</md-subheader>
    <md-table md-card>
      <md-table-row>
        <md-table-head>x</md-table-head>
        <md-table-head>y</md-table-head>        
      </md-table-row>
      <md-table-row v-for="(dataItem, index) in dataArray[0]" v-bind:key="index">
        <md-table-cell>{{dataArray[0][index]}}</md-table-cell>
        <md-table-cell>{{dataArray[1][index]}}</md-table-cell>        
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

  export default {
    name: 'InputData',
    props: {
      dataArray: Array
    }
  }
</script>

<style scoped>
  .md-card {
    margin-bottom: 20px;
  }
</style>
