<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-field>
        <label>Source file</label>
        <md-file v-model="placeholder" placeholder="Select a CSV file" />
      </md-field>
    </div>
    <div class="md-layout-item md-small-size-100">
      <md-field>
        <label>Degree of Order</label>
        <md-input v-model="type" placeholder="Degree of Order" ></md-input>
      </md-field>
    </div>
    <div class="md-layout-item">
      <md-button class="md-dense md-raised md-primary">Compute</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab1',
}

</script>

<style scoped>

</style>
