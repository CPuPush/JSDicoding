const averageExams = (valuesExam)=>{
    const numberValidation = valuesExam.every(exam=> typeof exam == 'number');
    if(!numberValidation) throw Error('Please input number');

    const sumValues = valuesExam.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
    return sumValues / valuesExam.length;
};

const isStudentPassExam = (valuesExam, name)=>{
    const minValues = 75;
    const average = averageExams(valuesExam);

    if(average > minValues){
        console.log(`${name} pass the exams`);
        return true;
    }else{
        console.log(`${name} fail the exams`);
        return false;
    }
};

module.exports = {averageExams, isStudentPassExam};
/**
dari contoh diatas kita akan melakukan simulasi pengujian //!unit test & integration test
penulisan kode pengujian dapat dilakukan dengan memulai kerangka testcase yang sudah kita singgung diatas:
1. apa yang akan diuji?
    - Fungsi menghitung rata-rata
    - Fungsi untuk mengecek apakah seorang siswa lulus ujian
2. Ekspektasi yang diharapkan
    - Menghasilkan nilai yang sesuai dari inputan
    - inputan harus berupa angka
    - menghasilkan hasil kelulusan iya/tidak pada siswa dengan nilai kriteria tertentu
 */