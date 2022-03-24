// set the dimensions and margins of the graph
var margin = {top: 0, right: 100, bottom: 10, left: 100},
    width = 1300 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
      .attr("viewBox", `0 0 ${height} ${width}`)
            .attr("transform", function(d) {
        return "rotate(-90)" 
        })
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("/map.csv",

  // When reading the csv, I must format variables:
  function(d){
      console.log({ date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value })
    return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
  },

  // Now I can use this dataset:
  function() {
    var data = [
        {date: 2020-06-15, value: 2, name: "", stroke_color: "black", fill_color: "black", radius: 0, href: ""}, 
        {date: 2020-06-13, value: 4, name: "", stroke_color: "black", fill_color: "black", radius: 0, href: ""}, 
        {date: 2020-06-12, value: -1, name: "Bad Seed", stroke_color: "#6caa7c", fill_color: "#6caa7c", radius: 10, href: "badseed.html"}, 
        {date: 2020-06-09, value: 5, name: "Bubbles", stroke_color: "#6caa7c", fill_color: "#6caa7c", radius: 10, href: "bubbles.html"}, 
        {date: 2020-06-07, value: 0, name: "", stroke_color: "black", fill_color: "black", radius: 0, href: ""}, 
        {date: 2020-06-06, value: 4, name: "Bloomberg Capstone", stroke_color: "#6caa7c", fill_color: "#6caa7c", radius: 10, href: "bloomberg.html"}, 
        {date: 2020-06-04, value: 1, name: "", stroke_color: "black", fill_color: "black", radius: 0, href: ""}, 
        {date: 2020-06-02, value: 5, name: "", stroke_color: "black", fill_color: "black", radius: 0, href: ""}, 
        {date: 2020-06-01, value: 8, name: "", stroke_color: "black", fill_color: "black", radius: 0, href: ""}

    ]
    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")


    // Add Y axis
    var y = d3.scaleLinear()
      .domain( [-5, 10])
      .range([ height, 0 ]);
    svg.append("g")


    // Add the line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "lightgrey")
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .curve(d3.curveCatmullRom) // Just add that to have a curve instead of segments
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )

    // create a tooltip
    var Tooltip = d3.select("#my_dataviz")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

      // Three function that change the tooltip when user hover / move / leave a cell
      var mouseover = function(d) {
        Tooltip
          .style("opacity", 1)
      }
      var mousemove = function(d) {
        Tooltip
          .html("Learn about the project, " + d.name)
          .style("left", (d3.mouse(this)[0]+40) + "px")
          .style("top", (d3.mouse(this)[1]) + "px")
      }
      var mouseleave = function(d) {
        Tooltip
          .style("opacity", 0)
      }
 var click = function(d) {
  window.location = d.href
}

    // Add the points
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
        .attr("class", "myCircle")
        .attr("cx", function(d) { return x(d.date) } )
        .attr("cy", function(d) { return y(d.value) } )
        .attr("r", function(d) { return d.radius })
        .attr("stroke", function(d) { return d.stroke_color })
        .attr("stroke-width", 3)
        .attr("fill", function(d) { return d.fill_color })
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave).on("click", click)
})

