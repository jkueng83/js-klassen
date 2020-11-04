class Car {
    horsePower = 99;
    constructor(brand, type, color, country = "Austria") {
      this.brand = brand;
      this.type = type;
      this.color = color;
      this.country = country;
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