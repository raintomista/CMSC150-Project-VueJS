<template>
  <div class="page-container">
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-30">
        <SidebarPR v-on:response-pr="update($event)"/>
      </div>
      <div class="md-layout-item md-size-50">

        <InputData
          v-bind:dataArray="inputValues"
          v-if="inputValues"
        />

        <Augcoeff
          v-bind:dataArray="augcoeffmatrix"
          v-if="augcoeffmatrix"
        />
        <Unknowns
          v-bind:dataArray="unknowns"
          v-if="unknowns"
        />
        <Item
          v-bind:label="`Polynomial Function`"
          v-bind:value="fx"
          v-if="fx"
        />
        <Item
          v-bind:label="`Estimated Value`"
          v-bind:value="estimate"
          v-if="estimate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarPR from './SidebarPR.vue'
import InputData from './InputData.vue'
import Augcoeff from './Augcoeff.vue'
import Unknowns from './Unknowns.vue'
import Item from './Item.vue'




export default {
  name: 'Tab1',
  components: {
    SidebarPR,
    InputData,
    Augcoeff,
    Item
  },
  data() {
    return {
      inputValues: null,
      augcoeffmatrix: null,
      unknowns: null,
      fx: null,
      estimate: null,
    }
  },
  methods: {
    update(data) {
      this.inputValues = data.inputValues;
      this.augcoeffmatrix = data.augcoeffmatrix;
      this.unknowns = data.unknowns;
      this.fx = data.fx;
      this.estimate = data.estimate;
    }
  }
}
</script>

<style scoped>
  .page-container {
    min-height: calc(100vh - 112px);
    max-width: 100%;
    padding: 30px 0px;
  }
</style>
