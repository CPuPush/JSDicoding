//hampir sama dengan overriding contructor tetapi yang di override disini adalah method yang ada pada parent class

//semua method yang ada pada kelas parent dapat diakses langsung di child kelasnya (as is)
//super.methodName();

//kita dapat menampah perintah tertentu ataupun mengurangi
class Mail{
    constructor(author){
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to){
        console.log(`you send:[${msg}] to ${to} from ${this.from}`);
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
    //melakukan overriding method => melakukan Override total
    sendMessage(msg, to){
        //call from super class
        super.sendMessage(msg, to);
        console.log('send by WA : ', msg, 'to :', to, 'from');
    }
}

// const mails = new Mail('kins');
// console.log(mails.sendMessage('kings', 'darks'));
const wa = new whatsApp('kings', false, 080808080808);
console.log(wa.sendMessage('just be kind', "mailto:kings@dicoding.com"));


/**
 * note : 
 * super(...) digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor
 * super.methodName(...) digunakan untuk memanggil parent method
 */