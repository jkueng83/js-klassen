import Battery from "./Battery.js";

export default class Remote {
  constructor() {
    this.isOn = false;

    this.batteries = [];
    this.batteryStatus = this.getBatteryStatus();
    this.hasPower = this.hasPowerMethod();
  }

  addBattery(battery) {
    this.batteries.push(battery);
  }

  getBatteryStatus() {
    let numberOfBatteries = 0;
    let batteryStatus = 0;

    if (this.batteries.length > 0) {
      this.batteries.forEach((battery) => {
        numberOfBatteries++;
        batteryStatus += battery.getChargingStatus();
        batteryStatus = batteryStatus / numberOfBatteries;
      });
    }
    this.batteryStatus = batteryStatus;
    return batteryStatus;
  }

  hasPowerMethod() {
    console.log("remote power: " + this.batteryStatus + " %");
    this.hasPower = this.batteryStatus > 50;
    return this.hasPower; //( this.batteryStatus > 50);
  }

  turnOn() {
    this.isOn = true;
    this.useBattery(2);
  }

  turnOff() {
    this.isOn = false;
    this.useBattery(2);
  }

  useBattery(amount) {
    let amountUsePerBattery = amount / this.batteries.length;
    //console.log(amount + "  " + amountUsePerBattery);

    this.batteries.forEach((battery) => {
      battery.useBattery(amountUsePerBattery);
    });
  }
}
