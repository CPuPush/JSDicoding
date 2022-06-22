// penulisan unit test untuk kode averageExams sbb:
const {averageExams, isStudentPassExam} = require('../gradeCalculations.js');
/**unit test dan integration testing dapat dijalankan bersamaan */
describe('grade calculations',()=>{
    test('it should return exact average',()=>{
        const listValueOfExams = [80,80,100,100];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });

    /*
    Integration testing
    */
   test('it should return exam,, passed status',()=>{
    const listValueOfExams = [80, 100, 100, 80];
    expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
   });

   test('it should return exam failed status',()=>{
    const listValueOfExams = [80, 100, 50, 20];
    expect(isStudentPassExam(listValueOfExams, 'budi')).toEqual(false);
   });
});
























// test('it should return exact average',()=>{
//     const listValueOfExams = [80, 100, 100, 80];
//     expect(averageExams(listValueOfExams)).toEqual(90);
// })
// //multiple case
// test('it should handle non-number ', () => {
//     const listValueOfExams = [80, 'a', '100', 80];
//     expect(() => averageExams(listValueOfExams)).toThrow();
// })