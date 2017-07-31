import * as d3 from 'd3v4'; 

class Seesound {

    // Function for building a bar chart
    buildBarChart(data){
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
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d, i){ return (i * (w / data.length));})
            .attr("y", function(d, i){ return (h - (d.amount * h) / 10);}) // Vertical scale fixed
            .attr("width", w / data.length - padding)
            .attr("height", function(d, i){ return (d.amount * h / 10);})
            .style("fill", "orange");
    }

    createChart(){
        var self = this
        d3.json("/js/freq-data.json", function(error, data){
            if(error){
                console.log(error);
            } 
            else{
                var freqs = data.basicFreqSpec;
                self.buildBarChart(freqs)        
            }
        });
    }  
}

export let seesound = new Seesound();
