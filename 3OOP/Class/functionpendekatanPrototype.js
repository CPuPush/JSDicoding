function Mail(){
    //constructor
    this.from = 'pengirim@dicoding';
};
Mail.prototype.sendMessage = function n(msg, to){
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
}

const mailing = new Mail();
mailing.sendMessage('king is never lost', 'get@dic.com') 

console.log(mailing.hasOwnProperty('sendMessage'));//false