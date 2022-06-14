/**
 * jika terdapat proses yang saling bergantung satu sama lain
 * contoh:
 *  Menyiapkan bahan
    Membuat adonan
    Memasukkan adonan ke cetakan
    Memanggang adonan

    maka kita akan membuat callback hell
 */
//contoh synchronous
// function makeACake(...rawIngredients) {
//     const ingredients = collectIngredients(rawIngredients);
//     dough = makeTheDough(ingredients);
//     pouredDough = pourDough(dough);
//     cake = bakeACake(pouredDough);
//     console.log(cake);
// }

//callback hell terjadi karena banyak sekali callback function yang bersarang karena saling membutuhkan
//satu sama lain, sehingga kode akan tampak seperti berikut
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pourDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
}

//solusi yang dapat menghindari callbackhell dnegan menggunakan promise
function makeACake(...rawIngredients){
    collectIngredients(rawIngredients)
    .then(makeTheDough)
    .then(pourDough)
    .then(bakeACake)
    .then(console.log())
}