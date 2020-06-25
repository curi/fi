import parseLisp from "./parseLisp";
import * as d3 from "d3";
// import * as d3h from "d3-hierarchy";

export const toTreeData = ([p, ...cs], parent = "null") => {
  console.log(">> ", p, cs);
  return {
    name: p,
    // parent,
    children: cs.map(c =>
      Array.isArray(c)
        ? toTreeData(c, p)
        : {
            name: c
            // parent: p,
          }
    )
  };
};

let svg;

// const diagonal = function link(d) {
//   return (
//     "M" +
//     d.source.y +
//     "," +
//     d.source.x +
//     "C" +
//     (d.source.y + d.target.y) / 2 +
//     "," +
//     d.source.x +
//     " " +
//     (d.source.y + d.target.y) / 2 +
//     "," +
//     d.target.x +
//     " " +
//     d.target.y +
//     "," +
//     d.target.x
//   );
// };

let path;

function diagonal(s, d) {
  path = `M ${s.y} ${s.x}
          C ${(s.y + d.y) / 2} ${s.x},
            ${(s.y + d.y) / 2} ${d.x},
            ${d.y} ${d.x}`;
  return path;
}

const runTree = input => {
  // ************** Generate the tree diagram	 *****************
  const margin = {
      top: 20,
      right: 120,
      bottom: 20,
      left: 120
    },
    width = 960 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom;

  let i = 0;
  const duration = 50; //750,

  const treemap = d3.tree().size([height, width]);
  // d3.tree().size([height, width]);

  if (!svg) {
    svg = d3
      .select("#treeContainer")
      .append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .attr("id", "treeSvg")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  }

  let root;

  function update(source) {
    // Assigns the x and y position for the nodes
    const treeData = treemap(root);

    // Compute the new tree layout.
    const nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      d.y = d.depth * 180;
    });

    // Toggle children on click.
    function click(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    }

    // ****************** Nodes section ***************************

    // Update the nodes...
    const node = svg.selectAll("g.node").data(nodes, function(d) {
      return d.id || (d.id = ++i);
    });

    // Enter any new modes at the parent's previous position.
    const nodeEnter = node
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
      })
      .on("click", click);

    // Add Circle for the nodes
    nodeEnter
      .append("circle")
      .attr("class", "node")
      .attr("r", 1e-6)
      .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
      });

    // Add labels for the nodes
    nodeEnter
      .append("text")
      .attr("dy", ".35em")
      .attr("x", function(d) {
        return d.children || d._children ? -13 : 13;
      })
      .attr("text-anchor", function(d) {
        return d.children || d._children ? "end" : "start";
      })
      .text(function(d) {
        return d.data.name;
      });

    // UPDATE
    const nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate
      .transition()
      .duration(duration)
      .attr("transform", function(d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    // Update the node attributes and style
    nodeUpdate
      .select("circle.node")
      .attr("r", 10)
      .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
      })
      .attr("cursor", "pointer");

    // Remove any exiting nodes
    const nodeExit = node
      .exit()
      .transition()
      .duration(duration)
      .attr("transform", function(d) {
        return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select("circle").attr("r", 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select("text").style("fill-opacity", 1e-6);

    // ****************** links section ***************************

    // Update the links...
    const link = svg.selectAll("path.link").data(links, function(d) {
      return d.id;
    });

    // Enter any new links at the parent's previous position.
    const linkEnter = link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        const o = { x: source.x0, y: source.y0 };
        return diagonal(o, o);
      });

    // UPDATE
    const linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate
      .transition()
      .duration(duration)
      .attr("d", function(d) {
        return diagonal(d, d.parent);
      });

    // Remove any exiting links
    const linkExit = link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", function(d) {
        const o = { x: source.x, y: source.y };
        return diagonal(o, o);
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  /*
  // Toggle children on click.
  function clickOld(_update) {
    return d => {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      _update(d);
    };
  }

  function updateOld(source) {
    const tr = d3h.hierarchy(root);
    const _tree = d3h.tree(tr);
    const nodes = tr.descendants();
    const links = tr.links();
    // Compute the new tree layout.
    // const nodes = tree.nodes(root).reverse(),
    //  links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      d.y = d.depth * 180;
    });

    // Update the nodes…
    const node = svg.selectAll("g.node").data(nodes, function(d) {
      return d.id || (d.id = ++i);
    });

    // Enter any new nodes at the parent's previous position.
    const nodeEnter = node
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function() {
        return "translate(" + source.y0 + "," + source.x0 + ")";
      })
      .on("click", clickOld(updateOld));

    nodeEnter
      .append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
      });

    nodeEnter
      .append("text")
      .attr("x", function(d) {
        return d.children || d._children ? -13 : 13;
      })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) {
        return d.children || d._children ? "end" : "start";
      })
      .text(function(d) {
        return d.name;
      })
      .style("fill-opacity", 1e-6);

    // Transition nodes to their new position.
    const nodeUpdate = node
      .transition()
      .duration(duration)
      .attr("transform", function(d) {
        console.log(d)
        return "translate(" + d.y + "," + d.x || 0 + ")";
      });

    nodeUpdate
      .select("circle")
      .attr("r", 10)
      .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
      });

    nodeUpdate.select("text").style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    const nodeExit = node
      .exit()
      .transition()
      .duration(duration)
      .attr("transform", function() {
        return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

    nodeExit.select("circle").attr("r", 1e-6);

    nodeExit.select("text").style("fill-opacity", 1e-6);

    // Update the links…
    const link = svg.selectAll("path.link").data(links, function(d) {
      return d.target.id;
    });

    // Enter any new links at the parent's previous position.
    link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", function() {
        const o = {
          x: source.x0,
          y: source.y0
        };
        return diagonal({
          source: o,
          target: o
        });
      });

    // Transition links to their new position.
    link
      .transition()
      .duration(duration)
      .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", function() {
        const o = {
          x: source.x,
          y: source.y
        };
        return diagonal({
          source: o,
          target: o
        });
      })
      .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  updateOld(root);

  */

  console.log(`set up d3`);
  d3.select(self.frameElement).style("height", "600px");

  const doUpdate = newCode => {
    console.warn("doUpdate");
    const parsed = parseLisp(newCode);
    console.log("parsed:", parsed[0][0], parsed[0], parsed);
    const treeData = [toTreeData(parsed[0])];
    console.log(treeData);

    const treeData3 = {
      name: "sat",
      children: [
        { name: "dog" },
        {
          name: "on",
          children: [{ name: "mat", children: [{ name: "the" }] }]
        }
      ]
    };

    const treeData1 = {
      name: "Top Level",
      children: [
        {
          name: "Level 2: A",
          children: [{ name: "Son of A" }, { name: "Daughter of A" }]
        },
        { name: "Level 2: B" }
      ]
    };

    // const treeData = treeData2

    if (!root) {
      root = d3.hierarchy(treeData, d => d.children); //treeData[0];
      root.x0 = height / 2;
      root.y0 = 0;
    } else {
      root.children = d3.hierarchy(treeData, d => d.children).children;
    }
    console.log(root);
    update(root);
  };

  doUpdate(input);

  return doUpdate;
};

export default runTree;
