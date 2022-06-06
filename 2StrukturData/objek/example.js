/**
 * contoh objek
 */
const user = {
    firstName: "Luke",
    lastName: "Okto",
    age: 19,
    isJedi: true,
    "home world": "pangaribuan"
};
/**pemanggilan objek */
console.log(`Halo, Nama saya ${user.firstName} ${user.lastName}`);
console.log(`Saya berasal dari ${user["home world"]}`);