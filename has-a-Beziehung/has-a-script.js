import Car from './Car2.js';

import Engine from './Engine.js';

let car = new Car("VW");

let engine = new Engine("123abc" , 123);

car.setEngine(engine);

car.dirve();

