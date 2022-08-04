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

// @ts-ignore
// require('./Treant');

const treant = ( treeStructure ) => {
  // @ts-ignore
  return new Treant( treeStructure );
}

// import ClipMask from "./components/ClipMask.vue"
// import Config from "./components/Config.vue"
// import CubicBezier from "./components/CubicBezier.vue"

import runTree from "./runTree2";
import parseLisp from "./parseLisp";

type Parsed = string | (string | Parsed)[];

const treeStructure = {
  chart: {
    container: "#treeContainer",
    levelSeparation: 70,
    siblingSeparation: 60,
    nodeAlign: "BOTTOM",
    connectors: {
      type: "step",
      style: {
        "stroke-width": 2,
        stroke: "#ccc",
        "stroke-dasharray": "--",
        "arrow-end": "classic-wide-long"
      }
    }
  },
  nodeStructure: {
    innerHTML: "#first-post",
    children: [
      {
        innerHTML: "#first-reply"
      },
      {
        innerHTML: "#second-reply",
        children: [
          {
            innerHTML: "#second-reply-reply"
          }
        ]
      }
    ]
  }
};


@Component({
  components: {},
  data() {
    return {
      srcCode: `(sat dog (on (mat the)))`,
      parsed: []
      // doUpdate: (s: string) => { console.warn('notinit') }
    };
  }
})
export default class App extends Vue {
  codeChange() {
    console.log(this.$data.srcCode);
    const _parsed = parseLisp(this.$data.srcCode);
    this.$data.parsed = _parsed;
    this.updateTree(_parsed);
  }

  updateTree(_parsed: Parsed) {
    if (this.$data.doUpdate) {
      return this.$data.doUpdate(_parsed);
    }
    console.log(_parsed);
    this.$data.doUpdate = runTree(_parsed);
  }

  mounted() {
    console.log("mounting");
    this.updateTree(parseLisp(this.$data.srcCode));
    console.log("mounted");
  }
}
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
