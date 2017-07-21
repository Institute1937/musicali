import * as d3 from 'd3v4'; 

const square = d3.selectAll("rect");
square.style("fill", "orange"); 

d3.json("/js/freq-data.json", function(data){
    console.log("data is " + data.basicFreqSpec);
});