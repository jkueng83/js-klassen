import Engine from "./Engine.js";

export default class Car2 {
  constructor(brand = "Audi") {
    this.brand = brand;
  }

  setEngine(engine) {
    this.engine = engine;
  }

  dirve() {    
    console.log(this.brand + " starts engine: brum brum!");
    this.engine.go();
  }
}
