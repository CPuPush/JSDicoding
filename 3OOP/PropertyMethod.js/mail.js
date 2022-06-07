class Mail{
    constructor(){
        this.from = 'pengirim@google.com';
        this.contact = [];
        this.yourOtherProperty = 'email content';
    }
    sendMessage(msg, to){
        console.log(`you send ${msg} to ${to} from ${this.from}`);
        //menyimpan kontak baru
        this.contact.push(to);
    }
}
const mail = new Mail();
mail.sendMessage('king', 'foriokto')
console.log(mail.contact);