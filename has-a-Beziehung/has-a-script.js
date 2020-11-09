import Car from './Car2.js';

import Engine from './Engine.js';

let car = new Car("VW");
let car2 = new Car("BMW");

let engine = new Engine("123abc" , 123);
let engine2 = new Engine("22222" , 222);

car.setEngine(engine);
car2.setEngine(engine2);

car.dirve();
car2.dirve();

