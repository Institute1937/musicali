import { seesound } from './seesound/index';
import config   from './config/config.js';

export class Index {
    constructor(){ 
      seesound.createChart()
    }
};

document.body.onload = new Index();