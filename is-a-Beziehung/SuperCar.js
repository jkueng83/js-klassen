import Car2 from "../has-a-Beziehung/Car2.js";

export default class SuperCar extends Car2 {
  saySomethingSuperDuper() {
    console.log("I am a SUPER CAR!! My Brand: " + this.brand +"!!!");
  }
}
