// {
// // Print Numbers from 1 to 10:Write a program to print numbers from 1 to 10 using a
// // for loop


// function count(n){

//     let bag=''
//     for(let i=1;i<=n;i++){

//         bag+=i+' '
//     }
//     return bag

// }



// console.log(count(10));

// }

// {
// // Sum of First N Natural Numbers:Write a program to calculate the sum of the first
// // N natural numbers, where N is provided by the user.


// function sum(n){
//     let bag=0
//     for(let i=0;i<=n;i++ ){

//         bag+=i
//     }
//     return bag

// }
// console.log(sum(4));


// }

// {
// // Factorial of a Number:Write a program to find the factorial of a given number
// // using a for loop.

// function factorial(n){
//     let fact=1
//     for(let i=1;i<=n;i++){
//         fact*=i

//     }
//     return fact
// }
// console.log(factorial(5));

// }


// Print Even Numbers between 1 and 20:write a program to print all even numbers
// between 1 and 20.

//     function even(n) {
//         let bag = ''
//         for (i = 1; i <= n; i++) {

//             if (i % 2 == 0) {
//                 bag+=i+' '
//             }

//         }
//          return bag
//     }


// console.log(even(20));



// Multiplication Table:Write a program to print the multiplication table of a number
// provided by the user

// function multi(n) {
//     let bag = ' '
//     for (let i = 1; i <= 10; i++) {

//        bag+=n*i+' '



//     }
//     return bag
// }
// console.log(multi(2));



// Reverse a String:Write a program to reverse a string using a for loop.

// function rev(n) {
//     let bag = ''
//     for (let i = n.length - 1; i >= 0; i--) {
//         bag += n[i]
//     }
//     return bag
// }
// console.log(rev("hello"));





// Check Prime Number:Write a program to check if a given number is prime.

// function prime(n){
//     for (let i = 2; i < n; i++) {
//        if(n%i==0){
//            return 'not prime'
//     }


// }
// return ' prime'
// }
// console.log(prime(10));


// Count Vowels in a String:Write a program to count the number of vowels in a
// given string.

// function vowel(n){
//     const vowels=['a','i','o','u','e']
//     let bag=''
//     for(let i=0;i<=n.length;i++){
//        for(let j=0;j<vowels.length;j++){
//         if(n[i]==vowels[j]){
//             bag+=n[i]
//         }
//        }
//     }
//     return bag
// }
// console.log(vowel("hello"))

// word count

// let n="i love javascript"
// let arr = []
// let word = ''
// for (let i = 0; i < n.length; i++) {
//     if (n[i] !== ' ') {
//         word += n[i]
//     }
//     else {
//         arr.push(word)
//         word = ''
//     }
// }
// arr.push(word)
// console.log(arr)

//reverse the sentence 
// the sky is blue = blue is the sky

// let str='the sky is blue'
// let revstr=''
// let arr=[]
// let bag=''

// for(let i=0;i<str.length;i++){
//           if(str[i]==' '){
//             arr.push(bag)
//             bag=''
//           }
//           else{
//             bag+=str[i]

//           }

// } 


// arr.push(bag)
// console.log(arr);
// arr.reverse()
// console.log(arr);

// revstr=arr.join(" ")
// console.log(revstr);



// let str='the sky is blue'
// let revstr=''
// let arr=[]
// let bag=''

// for(let i=0;i<str.length;i++){
//           if(str[i]==' '){
//             arr.push(bag)
//             bag=''
//           }
//           else{
//             bag+=str[i]

//           }

// } 


// arr.push(bag)
// // console.log(arr);

// let revarr=[]
// for(let i = arr.length - 1; i >= 0; i--){
//     revarr.push(arr[i])
// }
// // console.log(revarr);

// for(let i=0;i<revarr.length;i++){
//     revstr+=revarr[i]+' '

// }
// console.log(revstr);


let str='the sky is blue'
let revstr=''
let arr=[]
let bag=''

for(let i=0;i<str.length;i++){
          if(str[i]==' '){
            arr.push(bag)
            bag=''
          }
          else{
            bag+=str[i]

          }

} 


arr.push(bag)


let revarr=[]
for(let i = arr.length - 1; i >= 0; i--){
    revarr.push(arr[i])
}


for(let i=0;i<revarr.length;i++){
    revstr+=revarr[i]+' '

}
console.log(revstr);