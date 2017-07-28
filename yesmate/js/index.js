import * as d3 from 'd3v4'; 

// Import the frequency data from freq-data.json
d3.json("/js/freq-data.json", function(error, data){
    if(error){
        console.log(error);
    } 
    else{
        console.log("data is " + data.basicFreqSpec[0].amount);    
    }
});

// Temporary simplified data array
var freqs = [30, 50, 75, 22, 95]; //data.basicFreqSpec

// Set size of chart and bar padding
var w = 500;
var h = 400;
var padding = 2;

// Append the main svg for the chart to the page
var svg = d3.select("body")
            .append("svg")
              .attr("width", w)
              .attr("height", h);

// Append the bars to the chart
svg.selectAll("rect")
   .data(freqs)
   .enter()
   .append("rect")
     .attr("x", function(d, i){ return (i * (w / freqs.length));})
     .attr("y", function(d, i){ return (h - (d * h) / d3.max(freqs));})
     .attr("width", w / freqs.length - padding)
     .attr("height", function(d, i){ return (d * h / d3.max(freqs));})
     .style("fill", "seagreen");
