//import ES6 module using destructuring object

/**
 * karena menggunakan destructuring pastikan penamaan object sesuai,
 * jika ingin mengubah nama object dalam import
 * you can use //*as
 */
import {coffeeStock as coffee, isCoffeeMachineReady} from './exportMany.js';
console.log(coffee);
console.log(isCoffeeMachineReady);