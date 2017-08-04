import { seesound } from './seesound/index';

export class Index {
    constructor(){  
      seesound.createChart()
    }
};

document.body.onload = new Index();