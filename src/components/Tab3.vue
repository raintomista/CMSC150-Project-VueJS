<template>
  <div class="tab-3 page-container">
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-100">
        <md-subheader>Options</md-subheader>
        <md-card>
          <md-card-content>
            <md-table>
              <md-table-row>
                <md-table-head></md-table-head>
                <md-table-head>To Sacramento ($)</md-table-head>
                <md-table-head>To Salt Lake City ($)</md-table-head>
                <md-table-head>To Albuquerque ($)</md-table-head>
                <md-table-head>To Chicago ($)</md-table-head>
                <md-table-head>To New York City ($)</md-table-head>
                <md-table-head>Total Supply</md-table-head>
              </md-table-row>
              <md-table-row>
                <md-table-head>Denver</md-table-head>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[0][0]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[0][1]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[0][2]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[0][3]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[0][4]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[0][5]"></md-input>
                  </md-field>
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>Phoenix</md-table-head>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[1][0]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[1][1]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[1][2]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[1][3]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[1][4]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[1][5]"></md-input>
                  </md-field>
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>Dallas</md-table-head>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[2][0]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[2][1]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[2][2]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[2][3]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[2][4]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[2][5]"></md-input>
                  </md-field>
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-head>Total Demand</md-table-head>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[3][0]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[3][1]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[3][2]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[3][3]"></md-input>
                  </md-field>
                </md-table-cell>
                <md-table-cell>
                  <md-field md-inline>
                    <label>Shipping Cost</label>
                    <md-input v-model="shippingCosts[3][4]"></md-input>
                  </md-field>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
          <md-card-actions>
            <md-button class="md-primary" v-on:click="minimize()">Minimize</md-button>
          </md-card-actions>
        </md-card>

        <Iteration 
          v-if="results" 
          v-for="(result, index) in results"
          v-bind:title="result.title[0]"
          v-bind:iteration="result.iteration[0]"
          v-bind:tableau="result.tableau"
          v-bind:unknowns="result.unknowns"
          v-bind:zValue="result.zValue"
        />

      </div>
    </div>
  </div>
</template>

<script>
import { minimization } from '../services/simplexService.js'
import Iteration from './Iteration.vue'

export default {
  name: 'Tab3',
  components: {
    Iteration
  },
  data() {
    return {
      shippingCosts: [[10,8,6,5,4, 310], 
                      [6,5,4,3,6, 260], 
                      [3,4,5,5,9, 280],
                      [180, 80, 200, 160, 220, 0]],
      results: null,
    }
  },
  methods: {
    async minimize() {
      try {
        const response = await minimization(this.shippingCosts);
        this.results = response.data;
      } catch(e) {
        throw new Error(e);
      }
    },
  }
}
</script>


<style>
  .tab-3 .md-table-head-container {
    text-align: center;
  }
  .tab-3 .md-table-cell-container {
    padding: 6px 6px 6px 6px;
  }

  .tab-3 .md-table-cell:last-child .md-table-cell-container {
    padding: 6px 6px 6px 6px;
  }

  .tab-3 .md-table-cell .md-input {
    text-align: center;
  }
</style>