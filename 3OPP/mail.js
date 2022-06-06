// gaya format //!Object LITERAL
const mail = {
    from: "pengirim@dicoding.com",
    sendMessage:function(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
}
console.log(mail.from);
//mengubah from atribute
mail.from = "foriokto@gmail.com"
// bisa menambah sebuah fungsgi baru saveContact
mail.saveContact = function(addr){
    console.log(`email saved ${addr}`);
}
mail.sendMessage('apa kabar', 'penerima@dicoding.com');
mail.saveContact('KING@gmail.com');