//overriding berarti merombak
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
    constructor(username, isBussinessAccount, phone){
        //super menangani superClass
        // super();
        super(phone);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
    sendMessage(msg, to){
        console.log(`you send : ${msg} to ${to} from ${this.phone}`);
    }
    myProfile(){
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Bussiness' : 'Personal'}`
    }
}
const wa1 = new whatsApp('username', true, 085588558855);
// Must call super constructor in derived class before accessing 'this' or returning from derived constructor 
console.log(wa1.myProfile());
console.log(wa1.sendMessage('we are kings', 'semut@gmail.com', 'penerima@gmail.com'));
/**
 * super(phone)=>akan mengeksekusi method parentnya
 */