//1) printFullName adında funksiya yaradırsız və 2 parameter qəbul edir (firstName: "lorem", lastName: ipsum)
// console.log(printFullName()) // I am jhon doe

// console.log(printFullName("jhon", "doe"));

// function printFullName(firstName="Jhon",lastName="Doe") {
//     console.log(firstName,lastName);
    
// }
// printFullName();

// 2) daxil edilən ədədin kvadratını return edən funksiya yazın

// function square(number) {}

// console.log(square(5)); //25


// function square(number) {
//     console.log(number**2);
    
// }
// square(4)

//3) 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.


// console.log(multiply(2, 3)); //6
// console.log(subtruct(2, 3)); //-1
// console.log(divide(2, 3)); // 0,666666

// function sum(eded1,eded2) {
//   console.log(eded1+eded2);
  
// }
// sum(2,3);

// function subtruct(eded1,eded2) {
//   console.log(eded1-eded2);
  
// }
// subtruct(2,3);

// function divide(eded1,eded2) {
//   console.log(eded1/eded2);
  
// }
// divide(2,3) // 0,666666

//4) Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

// console.log(calculator(2, 5, "+")); //7
// console.log(calculator(2, 5, "*")); //10
// console.log(calculator(2, 5, "/")); //0.4
// console.log(calculator(2, 5, "-")); //-3

// function calculator(eded1,eded2,operator) {
//   if (operator == "+") {
//     console.log(eded1+eded2);
    
//   }else if(operator == "-"){
//     console.log(eded1-eded2);
    
//   }else if(operator == "*"){
//     console.log(eded1*eded2);
    
//   }else if (operator == "/"){
//     console.log(eded1/eded2);
    
//   }else{
//     console.log("duzgun yaz");
    
//   }
  
// }
// calculator(3,4,"+")

// 5) arrayın ilk və son elementinin cəmini return edən function yazın

// const getSum = (array) => {
//   ...
// };

// console.log(getSum([1, 2, 3])); // 4
// console.log(getSum([80, 5, 58, 17, 100])); // 180
// console.log(getSum([15, -500, 0, 50])); //65

// const getSum = (array) => {
//   let sum = array[0]-array[array.length-1];
//   console.log(sum);
  
// };
// console.log(getSum([1, 2, 3]));

//6) arrayın bütün elementlərinin cəmini qaytaran funksiya yazın

// function sumArray(arr) {
//   let sum=0;
//   for (let i = 0; i < arr.length; i++) {
//   sum+=arr[i];
    
//   }
//   console.log(sum);
  
// }

// sumArray([80, 5, 58, 17, 100]);

// 7) arrayin daxilindəki max elementi return edən funksiya yazın

// function maxArray(arr) {
//  console.log(Math.max(...arr));
 
// }
// maxArray([15, -500, 0, 50]);

// 10. 1-dən n-ə Qədər ədədlərin Kvadratı
// 1-dən n-ə qədər olan ədədlərin kvadratlarını çap edən bir funksiya yaradın.

// const kvadrat = (eded) =>{
//   for (let i = 0; i <= eded; i++) {
//     console.log(i**2);
    
//   }
// }
// kvadrat(12);

// 11. İki Dəfə Yoxlanma
// Verilmiş bir ədədin 2, 3 və 5-ə bölünüb-bölünmədiyini yoxlayan bir funksiya yaradın.

// const yoxlama = (eded) =>{
//   if (eded%2==0) {
//     console.log("2e tam bolunur:" + eded/2);
    
//   }else if (eded%3 ==0){
//     console.log("3e tam bolunur: " + eded/3);
    
//   }else if (eded%5==0){
//     console.log("eded 5e tam bolunur: " + eded/5);
    
//   }else{
//     console.log("eded hecbirine bolunmur" );
    
//   }

// }

// yoxlama(9)

// 12. Array-in Cəmi
// Bir array içindəki ədədlərin cəmini hesablayan bir funksiya yaradın.

// const cemArray = (arr) =>{
//   let cem=0;
//   for (let i = 0; i < arr.length; i++) {
//     cem+=arr[i]
    
//   }
//   console.log(cem);
  
// }
// cemArray([1,2,3,4,5,6]);

// 13. Tərs Array
// Bir array-i tərsinə çevirən bir funksiya yaradın.

// const ters = (arr) =>{
//   tersArray=[]
//   for (let i =  arr.length-1; i>=0 ; i-- ){
//     tersArray.push(arr[i])
    
//   }
//   console.log(tersArray);
  
// }

// ters([1,2,3,4,5,6]);

// 14. Tələbə Qiymətləri
// Tələbələrin qiymətlərini qəbul edən və 60-dan yuxarı olan tələbələri "keçdi", 60-dan aşağı olanları "qaldı" yazan bir funksiya yaradın.


// const telebe = (qiymeti) => {
//   if (qiymeti>60) {
//     console.log("kechdi.");
    
//   }else if (qiymeti<60){
//     console.log("qaldi");
    
//   }else{
//     console.log("invalid error");
    
//   }

// }

// telebe(61)

// 15. Kəmiyyət Yoxlanması
// Verilmiş bir ədədin 10-dan kiçik, bərabər və ya böyük olduğunu yoxlayan bir funksiya yaradın.

// const yoxlama = (eded) =>{
//   if(eded>10){
//     console.log("eded 10dan boyukdur");
    
//   }else if ( eded<10){
//     console.log("eded 10dan kicikdir.");
    
//   }else{
//     console.log("invalid error.");
    
//   }
// }
// yoxlama(5)

// 16. Array-də Maksimum Dəyər
// Bir array-dəki maksimum dəyəri taparaq qaytaran bir funksiya yaradın.

// const maks =(array)=>{
//   console.log(Math.max(...array));
  
// }

// maks([1,2,3,4,5])

// 17. Cüt ədədlərin Sayı
// Verilmiş bir array-dəki cüt ədədlərin sayını hesablayan bir funksiya yaradın.

// const cutSay = (arr) =>{
//   count = 0;
//   counttek=0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2==0) {
//       count++
//     }else if(arr[i] %2==1){
//      counttek++
      
//     }
    
//   }
// }

// cutSay([1,2,3,4,5,6])
// console.log(count);

// 18. Vowel Yoxlanması
// Verilmiş bir xarakterin səsli hərf olub olmadığını yoxlayan bir funksiya yaradın (a, e, i, o, u).

// const vowel = (herf) =>{
//   if (herf =="a"|| herf=="e" || herf=="i" || herf=="o" || herf=="u") {
//     console.log("seslidir");
    
//   }else{
//     console.log("sesli deyil");
    
//   }
// }

// vowel("a")

// 19. Müsbət və Mənfi ədədlərin Sayı
// Verilmiş bir array-dəki müsbət və mənfi ədədlərin sayını qaytaran bir funksiya yaradın.

// const cutSay = (arr) =>{
//  let countmusbet = 0;
//   let countmenfi=0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >0) {
//       countmusbet++;
//     }else if(arr[i] <0){
//      countmenfi++;
      
//     }
    
//   }
//   console.log(countmusbet);
//   console.log(countmenfi);
  
  
// }

// cutSay([1,2,3,4,5,6,7]);
// cutSay(countmusbet);
// cutSay(countmenfi);