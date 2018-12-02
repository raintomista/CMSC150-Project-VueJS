<template>
  <div>
    <md-subheader>{{label}}</md-subheader>
    <md-table md-card>
      <md-table-row>
        <md-table-head>Interval</md-table-head>
        <md-table-head>Polynomial Function</md-table-head>
        <md-table-head>Estimate</md-table-head>        
      </md-table-row>
      <md-table-row v-for="(item, index) in intervalStrings" v:key="index">
        <md-table-cell>
          {{index+1}}
        </md-table-cell>
        <md-table-cell>
          {{parseFx(intervalStrings[index])}}
        </md-table-cell>
        <md-table-cell>
          {{estimates[index]}}
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: {
      label: String,
      intervalStrings: Array,
      estimates: Array
    },
    methods: {
      parseFx(item) {
        return item.replace('function(x)', 'f(x) =');
      }
    }
  }
</script>

<style scoped>
  .md-card {
    margin-bottom: 20px;
  }
</style>
