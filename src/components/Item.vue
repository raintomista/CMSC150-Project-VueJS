<template>
  <div>
    <md-subheader>{{label}}</md-subheader>
    <md-table md-card>
      <md-table-row>
        <md-table-head>
          {{value[0]}}
        </md-table-head>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: {
      label: String,
      value: Array
    }
  }
</script>

<style scoped>
  .md-card {
    margin-bottom: 20px;
  }
</style>
