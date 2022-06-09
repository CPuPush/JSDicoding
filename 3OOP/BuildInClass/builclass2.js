//menghitung umur kita dengan memanfaatkan object date

//parameter birthday dapat berupa miliseconds ataupun date string
const myAge=birthday=>{
    const bday = new Date("2000-10-26");
    console.log(bday);
    //today in millisecond
    const today = Date.now();
    console.log(today);
    //birthday in milliseconds
    const bdayMilli = bday.getTime();
    console.log(bdayMilli);
    
    const diff_ms = today - bdayMilli;//menghitung selisih nilai miliseconds hari ini dan tanggal lahir
    const diffDate = new Date(diff_ms);

    return diffDate.getFullYear()-1970;
}
console.log(myAge("2000-10-26"));