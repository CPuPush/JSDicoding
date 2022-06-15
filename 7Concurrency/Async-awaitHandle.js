/**
 * perlu jadi catatan bahwa await hanya akan mengembalikan nilai jadi promise berhasil dilakukan(onFulfilled).
 * lantas bagaimana jika promise gagal dilakukan (onRejected?) 
 * kita bisa juga menggunakan //*try...catch
 * 
 */
async function makeCoffee(){
    try{
        const coffee = await getCoffee();
        console.log(coffee);
    }catch(rejectedReason){
        console.log(rejectedReason);
    }
}

//!Chaining Promise using async-await
//sama seperti kita mendapatkan nilai dari function yang berjalan secara synchronous.
async function makeExpresso(){
    try{
        await checkAvailability();
        await checkStock();
        const coffee = await(brewCoffee);
        console.log(coffee);
    }catch(rejectedReason){
        console.log(rejectedReason);
    }
}
//!Promise All
async function makeExpresso2(){
    try{
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee()
        console.log(coffee);
    }catch(rejectedReason){
        console.log(rejectedReason);
    }
}
/**
 * berguna dan sangat nyaman digunakan ges
 */