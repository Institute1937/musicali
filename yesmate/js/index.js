import * as d3 from 'd3v4'; 

const square = d3.selectAll("rect");
square.style("fill", "orange"); 

d3.json("/js/freq-data.json", function(data){
    console.log("data is " + data.basicFreqSpec[0].amount);
    d3.select(".chart").append("rect").attr("width", 50).attr("height", (data.basicFreqSpec[0].amount * 10)).style("fill", "blue");
});
