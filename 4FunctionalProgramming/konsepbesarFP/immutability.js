/**
 * immutability berarti sebuah object tidak boleh diubah setelah object tersebut dibuat. kontras dengan mutable yang artinya object
 * boleh diubah seteelah object tersebut dibuat
 */
//jika perlu mengubah nilai dari sebuat object
const newUser = {
    firstname:'harry',
    lastname:'protter'
};
//rename object newUser
const rename = (whoRename, userObject)=>{
    userObject.lastname = whoRename;
}
rename('potter', newUser);
console.log(newUser);
//tujuan tercapai but this isn't FP paradigm
//array map(), alih alih mengubah nilai object secar langsung, terapkan perubahan tersebut pada nilai return dalam object baru

const user = {
    firstname:'harry',
    lastname:'pottah'
}
const renameLastName = (newRename, objectUser)=>{
    return{...objectUser, lastname:newRename}
}
const newUserRight = renameLastName('potter', user);
console.log(newUserRight);