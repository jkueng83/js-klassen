console.log("Übungsbeispiel: 'is a Beziehung'");

import Engine from '../has-a-beziehung/Engine.js';
import SuperCar from './Supercar.js';

let superCar = new SuperCar("Ferrari");

let engine = new Engine("superduper1234", 666);

superCar.setEngine(engine);

superCar.dirve();
superCar.saySomethingSuperDuper();