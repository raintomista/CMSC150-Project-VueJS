<template>
  <div class="page-container">
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-30">
        <SidebarQSI v-on:response-qsi="update($event)"/>
      </div>
      <div class="md-layout-item md-size-50">
        <InputData
          v-bind:dataArray="inputValues"
          v-if="inputValues"
        />
        <AugcoeffQSI
          v-bind:dataArray="augcoeffmatrix"
          v-if="augcoeffmatrix"
        />
        <UnknownsQSI
          v-bind:dataArray="unknowns"
          v-if="unknowns"
        />
        <List
          v-bind:label="`Polynomial Function and Estimate per Interval`"
          v-bind:intervalStrings="interval_strings"
          v-bind:estimates="estimates"
          v-if="interval_strings && estimates"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarQSI from './SidebarQSI.vue'
import InputData from './InputData.vue'
import AugcoeffQSI from './AugcoeffQSI.vue'
import UnknownsQSI from './UnknownsQSI.vue'
import List from './List.vue'

export default {
  name: 'Tab2',
  components: {
    SidebarQSI,
    InputData,
    AugcoeffQSI,
    UnknownsQSI,
    List
  },
  data() {
    return {
      inputValues: null,
      augcoeffmatrix: null,
      unknowns: null,
      interval_strings: null,
      estimates: null,
    }
  },
  methods: {
    update(data) {
      this.inputValues = data.inputValues;
      this.augcoeffmatrix = data.augcoeffmatrix;
      this.unknowns = data.unknowns;
      this.interval_strings = data.interval_strings;
      this.estimates = data.estimates;
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
