this._contacts = []
// contoh
class Mail {
    constructor() {
        this._contacts = [];
        this.from = 'pengirim@dicoding.com';
    }
}

const mail = new Mail();
console.log(mail.contacts);
/**cara ini bukan diusung oleh js tetapi digunakan oleh jsdev berguna untuk membedakan variable yang private */