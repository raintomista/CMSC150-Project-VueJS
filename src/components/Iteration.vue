<template>
  <div>
    <md-card class="iteration-card">
      <md-card-header>
        <div class="md-title">{{title}}</div>
        <div class="md-subhead">Iteration {{iteration}}</div>
      </md-card-header>
      <md-card-content>
        <md-table>
          <md-table-row>
            <md-table-head>x1</md-table-head>
            <md-table-head>x2</md-table-head>
            <md-table-head>x3</md-table-head>
            <md-table-head>x4</md-table-head>
            <md-table-head>x5</md-table-head>
            <md-table-head>x6</md-table-head>
            <md-table-head>x7</md-table-head>
            <md-table-head>x8</md-table-head>
            <md-table-head>x9</md-table-head>
            <md-table-head>x10</md-table-head>
            <md-table-head>x11</md-table-head>
            <md-table-head>x12</md-table-head>
            <md-table-head>x13</md-table-head>
            <md-table-head>x14</md-table-head>
            <md-table-head>x15</md-table-head>
            <md-table-head>s1</md-table-head>
            <md-table-head>s2</md-table-head>
            <md-table-head>s3</md-table-head>
            <md-table-head>s4</md-table-head>
            <md-table-head>s5</md-table-head>
            <md-table-head>s6</md-table-head>
            <md-table-head>s7</md-table-head>
            <md-table-head>s8</md-table-head>
            <md-table-head>Z</md-table-head>
            <md-table-head>RHS</md-table-head>
          </md-table-row>
          <md-table-row v-for="(row, index) in tableau">
            <md-table-cell md-numeric v-for="(element, index) in row">
              {{element}}
            </md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-content>
    </md-card>

    <md-card class="iteration-card" v-if="zValue && unknowns">
      <md-card-header>
        <div class="md-title">Unknowns</div>
      </md-card-header>
      <md-card-content>
        <md-table>
          <md-table-row>
            <md-table-head>x1</md-table-head>
            <md-table-head>x2</md-table-head>
            <md-table-head>x3</md-table-head>
            <md-table-head>x4</md-table-head>
            <md-table-head>x5</md-table-head>
            <md-table-head>x6</md-table-head>
            <md-table-head>x7</md-table-head>
            <md-table-head>x8</md-table-head>
            <md-table-head>x9</md-table-head>
            <md-table-head>x10</md-table-head>
            <md-table-head>x11</md-table-head>
            <md-table-head>x12</md-table-head>
            <md-table-head>x13</md-table-head>
            <md-table-head>x14</md-table-head>
            <md-table-head>x15</md-table-head>
            <md-table-head>Z</md-table-head>
          </md-table-row>
          <md-table-row>
            <md-table-cell md-numeric v-for="(unknown, index) in unknowns">
              {{unknown}}
            </md-table-cell>
            <md-table-cell md-numeric v-if="zValue">
              {{zValue[0]}}
            </md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'Iteration',
    props: {
      title: String,
      iteration: Number,
      tableau: Array,
      unknowns: Array,
      zValue: Array
    }
  }
</script>

<style>
  .iteration-card {
    margin-top: 40px;
  }

  .iteration-card .md-table-cell-container {
    text-align: center !important;
  }
</style>
