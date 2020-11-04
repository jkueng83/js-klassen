

export default class Person {
    constructor(name) {
      this.name = name;
    }
  
    printPersonData() {
      console.log("Name: " + this.name);
    }
  }

  // im normalfall nur eine Klasse in einem js-File
  export class Animal {
    constructor(name) {
      this.name = name;
    }
  
    printAnimalData() {
      console.log("Animal Name: " + this.name);
    }
  }

  export class Department{
      constructor(departmentName){
        this.departmentName = departmentName;
      }

      printDepartmentName(){
        console.log("Department Name: " + this.departmentName);
      }
  } 