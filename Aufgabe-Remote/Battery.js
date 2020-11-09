export default class Battery {
  constructor() {
    this.chargingStatus = 100;
  }

  getChargingStatus() {
    return this.chargingStatus;
  }

  useBattery(amount) {
    this.chargingStatus -= amount;
    console.log("battery charging stat: " + this.chargingStatus);
  }
}
