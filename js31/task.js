// let array = [12,23,43,54,65,67,89,90,90,100]

// 1.Verilmiş arraydə cüt ədədlərin ən böyüynü tapan alqoritm yazin.

let result = [0];

// for (let i = 0; i < array.length; i++) {
//   if(array[i] % 2==0){
//     result.push(array[i]);
//   }
  
// }
// let max = Math.max(...result);
// console.log(max);


// 2.Verilmiş arraydə tək indexdə duran ən böyük tək ədədi tapan alqoritm yazin.

// for (let i = 0; i < array.length; i++) {
//     if( i % 2 == 1){
//       result.push(array[i]);
//     }
  
// }
// tek_max = Math.max(...result);
// console.log(tek_max);


// 3.Verilmiş arraydə ən böyük və ən kiçik ədədlərini hasili ilə cəmini müqasiyə edin.

// kicik = Math.min(...array);
// boyuk = Math.max(...result);
// hasil = kicik * boyuk;
// cem= kicik + boyuk;
// console.log(hasil,cem);

 
// 4.Verilmis ədədin reqemlerinin cemini tapan alqoritm yazin.
// let eded = 324;
// reqem1 = Math.floor(eded/100);
// reqem2 = Math.floor((eded%100) /10 );
// reqem3 = eded % 10 ;

// cem = reqem1 +reqem2+reqem3;
// console.log(cem);

// 5.Verilmiş arraydə ən böyük ədədlə ən kiçik ədədin yerini dəyişin.

// kicik = Math.min(...array);
// boyuk = Math.max(...array);
// for (let i = 0; i < array.length; i++) {
//   if(array[i]==boyuk){
//     array[i] = kicik;
//   }else if(array[i] == kicik){
//     array[i]=boyuk;
//   }
  
// }

// console.log(array);


// 6.Verilmiş arraydə təkrərlanan elementi tapin.

// let repeat;
// for (let i = 0; i < array.length; i++) {
//   for (let j = i+1; j < array.length; j++) {
   
//     if(array[i]==array[j]){
//       repeat =array[i];
//     }
//   }
  
// }

// console.log(repeat);

// 7.Verilmiş arraydə ən böyük və ən kiçik ədədin hasilini arrayin ədədi ortasi ilə müqasiyə edin.

// kicik = Math.min(...array);
// boyuk = Math.max(...array);
// hasil = kicik * boyuk;
// ededi_orta= (kicik+boyuk)/2;
// console.log(hasil,ededi_orta);

// 7.2
// Bu array-dəki insanların orta yaşını hesablayın.
// let people = [
//     { name: "Aysel", age: 25 },
//     { name: "Rəşad", age: 30 },
//     { name: "Leyla", age: 18 },
//     { name: "Kamal", age: 40 }
// ];
// let yash = 0; 
// for (let i = 0; i < people.length; i++) {
  
//   yash += people[i].age;
// }

// console.log(yash/people.length);

// 8.city dəyəri Bakı olan və yaşı 20-dən böyük olan insanları tapıb adlarını çıxarın.
// let people = [
//     { name: "Aysel", age: 25, city: "Bakı" },
//     { name: "Rəşad", age: 30, city: "Gəncə" },
//     { name: "Leyla", age: 18, city: "Bakı" },
//     { name: "Kamal", age: 40, city: "Sumqayıt" }
// ];

// for (let i = 0; i < people.length; i++) {
//   if(people[i].city=="Bakı" && people[i].age>20){
   
//     console.log(people[i].name);
    
//   }
  
// }

// 10. İki Array-də Eyni Elementlərin Tapılması
// let array1 = [1, 3, 5, 7];
// let array2 = [2, 3, 6, 7, 8];

// for (let i = 0; i < array1.length; i++) {
//   for (let j = 0; j < array2.length; j++) {
//     if(array1[i]==array2[j]){
     
//         console.log(array1[i]);
//     }
    
//   }
  
// }

// let array =[-10,12,-23,40,60,73,-6,-20];
// counteven = 0;
// countodd = 0;
// 11.Verilmiş arraydə mənfi və müsbət ədədlərin sayini tapin
// for (let i = 0; i < array.length; i++) {
//     if(array[i]>0){
//       counteven++;
     
      
//     }else if(array[i]<0){
//       countodd++;
   
      
//     }
  
// }
// console.log(counteven);
// console.log(countodd);

// 12.Verilmiş arraydə mənfi ədədlərin hasili ilə müsbət ədədlərin hasilini müqasiyə edin.
// count1 = 1;
// count2 =1;
// for (let i = 0; i < array.length; i++) {
//   if(array[i]<0){
//     count1 = array[i] *count1 ;
//   }else if (array[i]>0){
//     count2 = array[i]*count2;
//   }
  
// }
// console.log(count1);
// console.log(count2);

let array =[11,12,14,56] 
// 13.Verilmiş arrayi tərsinə çevirib yazin.

let reverse =[]
for (let i =array.length-1; i>=0; i--) {
  reverse.push(array[i])
  
}
console.log(reverse);
