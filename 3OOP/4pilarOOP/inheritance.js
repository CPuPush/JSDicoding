/**
 * terdapat 2 cara menuliskan pewarisan
 */
//cara 1 : menggunakan keyword 'extend' jika menggunakan statement class
//class childClassName extends ParentClassName{}

//cara 2:  menggunakan 'prototype' jika menggunakan statement 'function'/ class
//ChildClassName.prototype = new ParentClassName()
//misal sebuah child class bernama whatsApp yang mewarisi kelas Mail
class Mail{
    constructor(author){
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to){
        console.log(`you send ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts(){
        return this._contacts;
    }
}
class whatsApp extends Mail{
    constructor(){
        super();
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
    myProfile(){
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Bussiness' : 'Personal'}`
    }
}
const wa1 = new whatsApp(0808080);
console.log(wa1.myProfile());
console.log(wa1.sendMessage('nobody', 'kings@dicoding'));
console.log(wa1.showAllContacts());