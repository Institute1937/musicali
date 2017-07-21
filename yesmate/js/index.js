import * as d3 from 'd3v4'; 
import { app } from 'hyperapp';
import view from './views/kendal';

const square = d3.selectAll("rect");
square.style("fill", "orange"); 


////Hyperapp stuff
app({ view });