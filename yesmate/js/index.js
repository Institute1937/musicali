import * as d3 from 'd3v4'; 

// Create global variable to hold data
var ds; 

// Set size of chart and bar padding
var w = 500;
var h = 400;
var padding = 2;

// Import the frequency data from freq-data.json
d3.json("/js/freq-data.json", function(error, data){
    if(error){
        console.log(error);
    } 
    else{
        var freqs = data.basicFreqSpec;
        
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
            .attr("y", function(d, i){ return (h - (d.amount * h) / 10);}) // Vertical scale fixed
            .attr("width", w / freqs.length - padding)
            .attr("height", function(d, i){ return (d.amount * h / 10);})
            .style("fill", "seagreen");
    }
});

// Temporary simplified data array
var freqs = [30, 50, 75, 22, 95]; //data.basicFreqSpec

