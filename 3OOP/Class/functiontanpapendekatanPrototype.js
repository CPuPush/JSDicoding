function Mail(){
    this.from = 'pengirim@dicoding',
    this.sendMessage = function(msg, to){
        console.log(`You send: ${msg} to ${to} from ${this.from}`);
    }

};

//pemanggilan
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@king.com')
console.log(mail1.hasOwnProperty('sendMessage'));//true