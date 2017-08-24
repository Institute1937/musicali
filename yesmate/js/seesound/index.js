import * as d3 from 'd3v4'; 

class Seesound {

    // Function for building a bar chart
    buildBarChart(data){
        var self = this;
        const w = 500;
        const h = 400;
        const padding = 2;

        // Remove any existing svg
        d3.select('svg').remove();

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
              .attr('class', function(d) { return (".band".concat(d.band)); })
              .classed('.bar', true)
              .attr("x", function(d, i){ return (i * (w / data.length));})
              .attr("width", w / data.length - padding)
              .attr("y", h - 10) 
              .attr("height", 10)
              .style("fill", "orange");

        // Animate the chart
        self.animateChart(data);
    }

    animateChart(data){
        const w = 500;
        const h = 400;
        const padding = 2;
        var svg = d3.select('svg');

        // Grab all the rectangles
        var bars = svg.selectAll('rect').data(data);

        // Change their attributes
        step(0);

        function step(i) {
        bars
            .transition()
            .duration(1000)
            .attr('y', function(d) { return (h - (d.amount[i] * h) / 10); })
            .attr('height', function(d) { return (d.amount[i] * h / 10); })        
            .on('end', function(d) { if (d.amount[i + 1]) { step(i + 1); } }); // Keep animating until the data runs out
        }
    }

    createChart(){
        var self = this
        d3.json("/js/freq-data.json", function(error, data){
            if(error){
                console.log(error);
            } 
            else{
                var freqs = data.tvaryingFreqSpec;
                self.buildBarChart(freqs)        
            }
        });
    }  
}

export let seesound = new Seesound();

