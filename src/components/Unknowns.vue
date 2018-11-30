<template>
  <div>
    <md-subheader>Unknowns</md-subheader>
    <md-table md-card>
      <md-table-row>
        <md-table-head v-for="(dataItem, index) in dataArray" v-bind:key="index">
          x{{index}}
        </md-table-head>
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
    name: 'Unknowns',
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
