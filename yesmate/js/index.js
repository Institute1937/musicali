import * as d3 from 'd3v4'; 

d3.json("/js/freq-data.json", function(data){
    console.log("data is " + data.basicFreqSpec[0].amount);    
});

var freqs = [30, 50, 75, 22, 95]; //data.basicFreqSpec

var svg = d3.select("body")
            .append("svg")
              .attr("width", 500)
              .attr("height", 400);
            
svg.selectAll("rect")
   .data(freqs)
   .enter()
   .append("rect")
     .attr("x", "20px")
     .attr("y", "20px")
     .attr("width", "30px")
     .attr("height", "320px")
     .style("fill", "seagreen");
