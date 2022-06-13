/**
 * named export digunakan untuk mengekport banyak nilai dalam berkas JS.
 * cara kerjanya mirip seperti nodeJS.
 * Nilai yang akan diexport dituliskan dalam object literals.
 * 
 */
 const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};
 
const isCoffeeMachineReady = true;
 
export {coffeeStock, isCoffeeMachineReady};