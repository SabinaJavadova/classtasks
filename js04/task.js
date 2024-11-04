// Bir funksiya yazın. İki parametr qəbul etsin. Biri cümlə digəri isə o cümlə içərisindəki söz olsun. Sizin funksiyanız həmin sözün indeksini tapsın
//  Daxil edilən cümlədə ən uzun sözü tapın.
// sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores.")

// Expected Output:

// consectetur.

// function funcsSentence(sentence,word) {
//   console.log(sentence.indexOf(word));
  
// }

// funcsSentence("hello azmp202","hello")

// function longestWord(sentence) {
//   let words = sentence.split(" ");
//   let soz = words[0].length;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length>soz) {
//       soz= words[i].length
//     }
    
//   }
//   console.log(soz);
  
// }

// longestWord("hello azmp202","hello");


// Bir funksiya yazın,string şəklində 2 parametr qəbul etsin.Funksiyanız bu sözlərin anagram olub-olmadığını tapmalıdır.
//  Anagram sözlər yerləri fərqli olsa da eyni hərflərdən təşkil olunmuş sözlərdir.


// function anagram(soz1,soz2) {
//   let isInclude = false
//   for (let i = 0; i < soz1.length; i++) {
//     if (soz2.includes(soz1[i])) {
//       isInclude=true
//     }
//     else{
//       isInclude=false;
//     }
//   }
//   if(!isInclude){
//     console.log("deyil.");
    
//   }else{
//     console.log("anagramdir.");
    
//   }
// }

// anagram("silent","listen");

