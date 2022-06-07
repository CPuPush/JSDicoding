//penulisan dengan class
class Mail{
    constructor(){
        this.from = 'Pengirim@gmail.com'
    }
    sendMessage(msg, to){
        console.log(`you send:${msg} to ${to} from ${this.from}`);
    }
}
//instantiate
const mail1 = new Mail();
mail1.sendMessage('we are king', 'salmanan@dicoding.com')