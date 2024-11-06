// 1) Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details.
//  Create two instances of the 'Person' class and display their details.

// class Person {

//   constructor(name,age,country) {
//     this.name=name;
//     this.age=age;
//     this.country=country
//   }

//   displayPerson(){
//     console.log(this.name,this.age,this.country);
    
//   }

// }

// const person = new Person("sabina",20,"Azerbaijan");
// console.log(person);


// 2)
// Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
//          var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
//           resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi.

class CustomMatch{
  constructor(eded){
    this.eded=eded;
    
  }

  plus(eded){
   this.eded +=eded;
   return this;
  }
  minus(eded){
     this.eded -=eded;
    return this;
   }
   multiply(eded){
     this.eded*=eded;
    return this;
   }
   divide(eded){
     this.eded/=eded;
     return this;
   }

}

const result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result);


