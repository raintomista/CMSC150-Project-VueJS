<template>
  <div>
    <md-subheader>Augmented Coefficient Matrix</md-subheader>
    <md-table md-card>
      <md-table-row>
        <md-table-head v-for="(item, index) in dataArray[0]" v-bind:key="index">
          {{index >= dataArray[0].length - 1 ? 'RHS' : `x${index}`}}
        </md-table-head>
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
    name: 'Augcoeff',
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
