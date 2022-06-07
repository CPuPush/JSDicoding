/**
Mail
-----------------
+ String from
+ Array contacts
-----------------
+ sendMessage(msg, to)
+ showAllContacts()

 */
class Mail{
    constructor(author){
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to){
        console.log(`you send:${msg}, to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts(){
        return this._contacts;
    }
}
/**
 * mail tidak bisa langsung mengubah daftar contact, namun bisa menambahnya melalui fungsi saat kirim pesan atau mengambil
 * data tersebut melalui method showAllContacts.
 */
const mail = new Mail('King@gmail.com');
let sendMessage = mail.sendMessage('ilove you', 'inda@gmail.com');
console.log(sendMessage);
let showContact = mail.showAllContacts();
console.log(showContact);
