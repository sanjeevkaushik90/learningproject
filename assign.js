// Find the Largest Number in an Array: Write a function that takes an array of numbers and returns
// the largest number.

// solution

// {
//     // simple for loop


// let arr = [2, 3, 14, 5]

// let max = arr[0]

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max)
//         max = arr[i]
// }
// console.log("This is simple for loop =>",max);
// }

// {

// // for in loop
// let arr = [2, 3, 14, 5]

// let max = arr[0]

// for(let i in arr){

//     if (arr[i] > max)
//         max = arr[i]


// }
// console.log("This is for in loop =>",max);

// }

// {
// // for of loop

// let arr = [2, 3, 14, 5]

// let max = arr[0]

// for(let i of arr){

//     if (i > max)
//         max = i


// }
// console.log("This is for of loop =>",max);

// }

// {
//     // while loop

// let arr = [2, 3, 14, 5]

// let max = arr[0]

// let i=0
// while(i<arr.length){

//     if (arr[i] > max)
//         max = arr[i]

// i++
// }
// console.log("This is while loop =>",max);

// }
// console.log( );
// console.log( );

// {
//     // Array Sum: Write a function to calculate the sum of all elements in an array.


//     let a = [1, 2, 3]

//     let sum = 0

//     for (i = 0; i < a.length; i++) {
//         sum = sum + a[i]
//     }
//     console.log("This is simple loop", sum);
// }

// // for in loop
// {
//     let a = [1, 2, 3]

//     let sum = 0

//     for (let i in a) {
//         sum = sum + a[i]
//     }
//     console.log("This is for in loop", sum);

// }

// // for of loop
// {
//     let a = [1, 2, 3]

//     let sum = 0

//     for (let i of a) {
//         sum = sum + i
//     }
//     console.log("This is for of loop", sum);
// }

// // while loop
// {
//     let a = [1, 2, 3]

//     let sum = 0

//     let i = 0

//     while (i < a.length) {

//         sum += a[i]
//         i++
//     }
//     console.log("This is while loop", sum);
// }


// {
// // .Reverse an Array: Write a function to reverse the elements of an array without using built-in
// // reverse() method.

// let arr=[1,2,3,4,5]

// let rev=[]

// for(let i=arr.length-1;i>=0;i--){
//     rev.push(arr[i])
// }
// console.log("This is answer is for loop =>",rev);

// {
// // while loop
// let arr=[1,2,3,4,5]

// let rev=[]

// let i=arr.length-1

// while(i>=0){
//       rev.push(arr[i])
//       i--
// }
// console.log("This answer is while loop",rev);
// }
// }

// {
// // Remove Duplicates from an Array:Write a function to remove duplicate elements from an array.
// let arr=[1,2,3,4,4,5]
// let dup=[]
// let unique=[]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if(arr[i]==arr[j])
//             dup.push(arr[i])
//         else{
//              unique.push(arr[i])
//             }
//             console.log("this are not duplicate",unique);

//     }

//     break;
// }
// }


// let arr = [1, 2, 3, 4, 4, 5];
// let dup = [];
// let unique = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             dup.push(arr[i]);
//             console.log("this is duplicate", dup);
//         } 
//         // else {
//         //     unique.push(arr[i]);
//         // }
//         // console.log("this are not duplicate", unique);
//         // break;
//     }
// }



// {
//     // .Find the Intersection of Two Arrays: Write a function that takes two arrays and returns a new array
// // containing elements common to both arrays.
// {
// // simple for loop
// let arr1=[1,2,3,4,5]
// let arr2=[1,3,5,7,8]
// let narr=[ ]
// for(let i=0;i<arr1.length;i++){
//     for(let j;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             narr.push(arr1[i])
//         }
//     }
// }
// console.log(narr);

// }
// }



// let str="i am java script"
// let arr=['i','am','java','script']
// let bag=' '
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         if(j==0){
//             bag+=arr[i][j].toUpperCase()

//         }
//         else{
//             bag+=arr[i][j]
//         }
//     }
//     bag+=' '
// }
// console.log(bag);
// console.log(typeof(bag));

// .String Compression:Write a function to compress a string using the counts of repeated characters
// (e.g., 'aaabbc' -> 'a3b2c1').

// let str='hello world'
// const obj={ }
// for(let char of str){
//     if(obj[char]){
//         obj[char]++
//     }
//     else{
//         obj[char]=1
//     }
// }
// console.log(obj);
