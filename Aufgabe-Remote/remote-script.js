import Battery from "./Battery.js";
import Remote from "./Remote.js";

console.log("Aufgabe Fernbedienung");

let b1 = new Battery();
let b2 = new Battery();

let remote = new Remote();

for (let index = 0; index < 2; index++) {
  remote.addBattery(new Battery());
}

for (let index = 0; index < 10; index++) {
  remote.turnOn();
  remote.turnOff();
}

console.log("remote status: " + remote.getBatteryStatus());

while (remote.getBatteryStatus() > 44) {
  remote.turnOn();
  remote.turnOff();

  console.log("battery has power: " + remote.hasPowerMethod());

  console.log("remote status: " + remote.getBatteryStatus());
}
