//So können mehrere Klassen aus einem js-File importiert werden.
// Besser ist es wenn in einem js-File nur eine Klasse ist.
import Person , { Animal ,Department} from './Person.js'; // im normalfall nur eine Klasse in einem js-File. 

import Car from './Car.js';

let p1 = new Person("Johannes");
p1.printPersonData();

let a1 = new Animal("Hansi");

a1.printAnimalData();

let d1 = new Department("PLC Department");
d1.printDepartmentName();


// ----------- Car --------

let c1 = new Car("Porsche", "Carrera", "dark blue" , 350, "Germany");
c1.horsePower = 350;
c1.printCarData();
