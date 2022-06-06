const spaceship = {//meginisialisasi ini boss
    name: "Fori Okto pakpahan",//menggunkan key and value
    manufacturer: "Corellian engineering corporation",
    maxSpeed: 1200,
    color: "light gray"
};
/**modification */
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 145700;
spaceship.name = "Okto Pakpahan";
console.log("Ini modifikasi");
console.log(spaceship);
//menambah property baru
console.log("ini menambah");
spaceship.class = "RedVelvet";
console.log(spaceship);
//emnghapus property pada objek
console.log("how to delete");
delete spaceship.maxSpeed;
console.log(spaceship);