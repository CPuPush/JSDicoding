/**sama seperti class method tetapi mengakses tidak perlu menginstantiate class */
class mail{
    static isValidPhone(phone){
        return typeof phone === 'number';
    }
}
//tanpa menginstantiate
console.log(mail.isValidPhone(2));