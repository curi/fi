<template>
  <div id="app">
    <div class="row">
      <div class="col">
        <h4>Code</h4>
        <textarea id="codeBox" @input="codeChange" v-model="srcCode"></textarea>
      </div>
      <div class="col">
        <h4>Tree</h4>
        <div id="treeContainer"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import runTree from "./runTree2";
import * as d3 from 'd3';


// const runTree = (src: string) => {
//   const canvas = d3.select("#treeContainer")
// }


@Component({
  components: {
  },
  data() {
    return {
      srcCode: `(sat dog (on (mat the)))`
    }
  },
  methods: {
    codeChange() {
      console.log(this.$data.srcCode)
      runTree(this.$data.srcCode);
    }
  }, 
  mounted() {
    runTree(this.$data.srcCode);
  }
})
export default class App extends Vue {
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#treeContainer {
  border: 2px solid grey;
  margin: 20px;
  min-height: 400px;
}

#codeBox {
  width: 90%;
  min-height: 300px;
  margin: 20px auto;
}


.row {
  display: flex;
  flex-direction: row;
}

.col {
  flex-grow: 1;
  margin: auto;
  display: inline;
}


.node circle {
  fill: #fff;
  stroke: steelblue;
  stroke-width: 3px;
}

.node text {
  font: 12px sans-serif;
}

.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
}


</style>
