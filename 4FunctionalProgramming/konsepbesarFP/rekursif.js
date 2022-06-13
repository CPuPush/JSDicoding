/**
 * Rekursif merupakan teknik pada function yang memanggil dirinya sendiri
 */
const countDown = start=>{
    do{
        console.log(start);
        start -=1;
    }while(start > 0);
}
countDown(10);
//=>bentuk rekursifnya
const countDown2 = start=>{
    console.log(start);
    if(start > 0) countDown2(start - 1);
    //cetak start jika lebih besar daripada 0 dan start - 1
}
countDown2(12);
