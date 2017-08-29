import * as d3 from 'd3v4'; 

class Seesound {
  constructor(w, h, padding) {
    this.w = w;
    this.h = h;
    this.padding = padding;
  }

    // Function for building a bar chart
  buildBarChart(data) {
    const self = this;

    // Remove any existing svg
    d3.select('svg').remove();

    // Append the main svg for the chart to the page
    const svg = d3.select('body')
        .append('svg')
        .attr('width', this.w)
        .attr('height', this.h);

        // Append the bars to the chart
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
            .attr('class', function(d) { return ('.band'.concat(d.band)); })
            .classed('.bar', true)
            .attr('x', function(d, i) { return (i * (self.w / data.length)); })
            .attr('width', self.w / data.length - self.padding)
            .attr('y', self.h - 10)
            .attr('height', 10)
            .style('fill', 'orange');

        // Animate the chart
    self.animateChart(data);
  }

  animateChart(data) {
    const self = this;
    const svg = d3.select('svg');

    // Grab all the rectangles
    const bars = svg.selectAll('rect').data(data);

    // Function to transition to the next data point and recur
    function step(i) {
      bars
        .transition()
        .duration(1000)
        .attr('y', function(d) { return (self.h - (d.amount[i] * self.h) / 10); })
        .attr('height', function(d) { return (d.amount[i] * self.h / 10); })
        .on('end', function(d) { if (d.amount[i + 1]) { step(i + 1); } }); // Keep animating until the data runs out
    }
    // Start the animation
    step(0);
  }

  createChart() {
    const self = this;
    d3.json('/js/freq-data.json', function(error, data) {
      if (error) {
        console.log(error);
      }
      else {
        const freqs = data.tvaryingFreqSpec;
        self.buildBarChart(freqs);
      }
    });
  }
}

export const seesound = new Seesound(500, 400, 2);

