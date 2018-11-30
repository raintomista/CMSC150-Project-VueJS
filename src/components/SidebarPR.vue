<template>
  <div>
    <md-subheader>Options</md-subheader>
    <md-card>
      <md-card-content>
        <md-field>
          <label>Source file</label>
          <md-file 
            v-on:change="onFileSelect"          
            placeholder="Select a CSV file"
          />
        </md-field>
        <md-field>
          <md-icon>looks_4</md-icon>
          <label>Order of Polynomial</label>
          <md-input v-model="order" placeholder="Order of Polynomial" ></md-input>
        </md-field>
        <md-field>
          <md-icon>functions</md-icon>
          <label>Value to be Estimated</label>
          <md-input v-model="valueToEstimate" placeholder="Value to be Estimated" ></md-input>
        </md-field>
      </md-card-content>
      <md-card-actions>
        <md-button class="md-primary" v-on:click="calculate()">Calculate</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
  import { polynomialRegression } from '../services/regressionService.js'

  export default {
    name: 'SidebarPR',
    data() {
      return {
        file: null,
        order: null,
        valueToEstimate: null,

        async calculate(){
          const formData = new FormData();
          formData.append('order', this.order);
          formData.append('files', this.file, this.file.name)
          formData.append('valueToEstimate', this.valueToEstimate);
          
          try {
            const response = await polynomialRegression(formData);
            this.$emit('response-pr', response.data);
          } catch(e) {
            throw new Error(e);
          }
        },
      }
    },
    methods: {
      onFileSelect(e) {
        this.file = e.target.files[0];
      }
    }
  }
</script>

<style scoped>

</style>
