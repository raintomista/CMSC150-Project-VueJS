<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">CMSC 150 Project</span>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <md-tab 
              id="tab-ps" 
              md-label="Polynomial Regression" 
              v-on:click="$router.push('/polynomial-regression')">
            </md-tab>
            <md-tab 
              id="tab-qsi" 
              md-label="Quadratic Spline"
              v-on:click="$router.push('/quadratic-spline')">
            </md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>
      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons');

  .md-app {
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-layout {
    min-height: calc(100vh - 112px);
    max-width: 100%;
  }
</style>


<script>
  export default {
    name: 'app',
    components: { 
    }
  }
</script>