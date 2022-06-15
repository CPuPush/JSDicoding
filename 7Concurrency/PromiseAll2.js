//contoh penerapan pada kasus coffee
const boilWater=()=>{
    return new Promise((resolve, reject)=>{
        console.log("Memanaskan air...");
        setTimeout(()=>{
            resolve("air sudah matang")
        },2000);
    })
} 
const grindCoffeeBeans = () =>{
    return new Promise((resolve, reject)=>{
        console.log("Menggiling biji kopi...");
        setTimeout(()=>{
            resolve("Kopi sudah siap");
        },1000)
    });
}
const promises = [boilWater(), grindCoffeeBeans()];
Promise.all(promises)
    .then(resolvedValue=>{
        console.log(resolvedValue);
    });
//keduanya dapat berjalan bersamaan. kita dapat memanfaatkan Promise.all()


