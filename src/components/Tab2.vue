<template>
  <div class="page-container">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label>Source file</label>
          <md-file 
            v-on:change="onFileSelect"          
            placeholder="Select a CSV file" 
          />
        </md-field>
      </div>
      <div class="md-layout-item md-small-size-100">
        <md-field>
          <label>Value to be Estimated</label>
          <md-input v-model="x" placeholder="Value to be Estimate" ></md-input>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-button 
          class="md-dense md-raised md-primary"
          v-on:click="compute()">
          Compute
        </md-button>
      </div>
    </div>

    <!-- Augcoefficeint Matrix -->
    <div v-if="augcoeffmatrix">
      <md-subheader>Augcoefficient Matrix</md-subheader>
      <md-table>
        <md-table-row>
          <md-table-head v-for="(item, index) in augcoeffmatrix[0]">
            <span v-if="index < 2">a{{index+2}}</span>
            <span v-if="index >= 2 && index < 5">b{{(index-2)+1}}</span>
            <span v-if="index >= 5 && index < 8">c{{(index-5)+1}}</span>
            <span v-if="index === 8">RHS</span>
          </md-table-head>
        </md-table-row>
        <md-table-row v-for="row in augcoeffmatrix">
          <md-table-cell v-for="item in row">
            {{item}}
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>

    <!-- Unknowns -->
    <div v-if="unknowns">
      <md-subheader>Unknowns</md-subheader>
      <md-list>
        <md-list-item v-for="(item, index) in unknowns">
          {{`x${index}: ${item}`}}
        </md-list-item>
      </md-list>
    </div>

    <!-- Estimate -->
    <md-subheader v-if="estimate">Estimate: {{estimate}}</md-subheader>
  </div>
</template>

<script>
import { quadraticSpline } from '../services/interpolationService.js'

export default {
  name: 'Tab1',
  data() {
    return {
      file: null,
      x: null,
      augcoeffmatrix: null,
      unknowns: null,
      estimate: null,
      async compute(){
        const formData = new FormData();
        formData.append('files', this.file, this.file.name)
        formData.append('x', this.x);
        
        try {
          const response = await quadraticSpline(formData);
          this.augcoeffmatrix = response.data.augcoeffmatrix;
          this.unknowns = response.data.unknowns;
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
  .page-container {
    min-height: calc(100vh - 112px);
    max-width: 100%;
  }
</style>
