//jika ingin melakukan export sekaligus
const coffee = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};
 
const isCoffeeMachineReady = true;

//tidak bisa dengan cara seperti berikut karene menginisialisasi ulang nilai properti
// module.exports = coffeeStock;
// module.exports = isCoffeeMachineReady;

//manfaatkan object literal
module.exports = {coffee, isCoffeeMachineReady};
