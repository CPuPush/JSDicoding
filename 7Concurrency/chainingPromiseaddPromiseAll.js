//!Chaining X Promise All
//?yang perlu diperhatikan ketika menggunakan promise all, setTimeout yang terlama, itulah yang digunakan
//state

const state={
    stock:{
        coffeeBeans : 250,
        water : 1000,
    },
    isCoffeeMachineBusy:false
};


//checkAvailability
const checkAvailability=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!state.isCoffeeMachineBusy){
                resolve("Mesin kopi siap digunakan");
            }else{
                reject("Maaf, mesin sedang sibuk");
            }
        }, 1000)
    });
}
//mesin kopi perlu memastikan bahwa stok biji kopi dan air cukup untuk membuat kopi.
// mengeubah statsu mesin kopi menjadi sibuk
const checkStock = ()=>{
    return new Promise((resolve, reject)=>{
        state.isCoffeeMachineBusy = true;
        // console.log(state);
        setTimeout(()=>{
            if(state.stock.coffeeBeans >= 16 && state.stock.water>=250){
                resolve("Stok cukup. Bisa membuat kopi.");
            }else{
                reject("Stok tidak cukup!");
            }
        },1500)
    });
}

//fungsi promise memasakan air
const boilWater = ()=>{
    return new Promise((resolve, reject)=>{
        console.log(("Memanaskan air"));
        setTimeout(()=>{
            resolve("Air panas sudah siap!");
        },2000)
    })
}

//fungsi promise grindCoffee
const grindCoffeeBeans = ()=>{
    return new Promise((resolve, reject)=>{
        console.log("menggiling biji kopi");
        setTimeout(()=>{
            resolve("Kopi sudah siap")
        },1000);
    });
}

//fungsi mencampur kopi dan iaru lalu menghidangkannya ke dalam gelas.
//fungsi ini mengembalikan promise dengan status resolve yang membawa nilai "Kopi sudah siap!"

const brewCoffee = () =>{
    console.log("Membuatkan Kopi anda ....");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Kopi sudah siap");
        },2000)
    })
}

function makeExpresso(){
    //cek ketersediaan
    checkAvailability()
        .then((value)=>{
            console.log(value);
            return checkStock();
        })
    //memasak air dan menggiling kopi
    .then((value)=>{
        console.log(value);
        // return brewCoffee();
        const promises = [boilWater(), grindCoffeeBeans()];
        return Promise.all(promises);

    })
    .then((value)=>{
        console.log(value);
        return brewCoffee();
    })
    .then((value)=>{
        console.log(value);
        state.isCoffeeMachineBusy = false;
    })
    //catch menangkap semua reject reasoon tanpa harus membuat lagi then(handleFailure)
    .catch((rejectedReason)=>{
        console.log(rejectedReason);
    });
}
makeExpresso();