<template>
  <div>
    <md-subheader>Unknowns</md-subheader>
    <md-table md-card>
      <md-table-row>
        <md-table-head>a1</md-table-head>      
        <md-table-head>a2</md-table-head>
        <md-table-head>a3</md-table-head>
        <md-table-head>b1</md-table-head>
        <md-table-head>b2</md-table-head>
        <md-table-head>b3</md-table-head>
        <md-table-head>c1</md-table-head>
        <md-table-head>c2</md-table-head>
        <md-table-head>c3</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell v-for="(dataItem, index) in dataArray" v-bind:key="index">
          {{dataItem}}
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'UnknownsQSI',
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
