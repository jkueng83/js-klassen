export default class Car {
    
    constructor(brand, type, color, horsePower = 100, country = "Austria") {
      this.brand = brand;
      this.type = type;
      this.color = color;
      this.country = country;
      this.horsePower = horsePower;
    }
  
    printCarData() {
      console.log(
        "Brand: " +
          this.brand +
          " - Type: " +
          this.type +
          " - Color: " +
          this.color +
          " - Horse Power: " +
          this.horsePower +
          " - Country: " +
          this.country
      );
    }
  }