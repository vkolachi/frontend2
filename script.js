// let i=30;
// console.log(i);
// for(i=2;i<40;i++){
//     console.log(i);
// }
// console.log(i);
// console.log();

// let obj={
//     name:"venkatesh",
//     rollno:50,
//     age:25
// };
// console.log(obj.age);
// console.log(obj["name"]);
// console.log(obj.rollno);

// console.log(obj);
// // delete obj.age;
// console.log(obj);
// Object.keys(obj);
// Object.keys(obj);
// let objecykeys=Object.keys(obj);
// for(let i=0;i<objecykeys.length;i++){
//     console.log(objecykeys[i]);
// }
// for(let i=0;i<objecykeys.length;i++){
//     console.log(obj[objecykeys[i]]);
// }
// for(let i=0;i<objecykeys.length;i++){
//     console.log(objecykeys[i] ,obj[objecykeys[i]]);
// }
// obj[objecykeys[2]];
// Object.values(obj);
// console.log(Object.values(obj));
// console.log(obj);
// console.log(Object.keys(obj));

// let obj={
//     name:"venkatesh",
//     rollno:50,
//     age:25
// };

// let obj1 =[12,23,"venkateshg","rajest"];

// for(let y in obj){
//     console.log(y);
// }

// for(let y in obj){
//     console.log(y,obj[y]);
// };

// for( let z of obj1){
//     ///doesnt exists in objects .
//     console.log(z);
// };

// let z=[10,20, 6,9,30,40,5];

// let result=z.map(function(e){
// return e%2==0 ? 2*e : 3*e;
// })
// console.log(result);

// let callme=function(element,index,list){ 
//     //element,index and list are just three variables
//     console.log(element ,index ,list);
// }

// let x=z.forEach(callme)




// let arr=[22,5,21,28,23,20];

// let arr1=arr.map(function(e){
//   return e%2===0 ? e*2 : e*3;
// })
// console.log(arr1);

// let arr2=arr1.filter(function (e){
//     return  e>40 && e<700;
// })
// console.log(arr2);
// let ans=arr2.reduce(function(prev,curr){
//     return prev+curr;
// },0);
// console.log(ans);

// /////another method
// let ans1=arr.map(function(e){
//     return e%2===0 ? e*2 : e*3;
//   }).filter(function (e){
//     return  e>40 && e<700;
// }).reduce(function(prev,curr){
//     return prev+curr;
// });
// console.log(ans1);


// let arr=[22,5,21,28,23,20];

// arr.sort(function(a,b){
//     return a-b;
// });
// console.log(arr);

// arr.sort(function(a,b){
//     return b-a;
// });
// console.log(arr);

// function maipulate(a,b){
//     a=22;
//     b[0]=34;
// }
// let x=23; y=[10,20,30,40];
// console.log(x,y);
// maipulate(x,y);
// console.log(x,y);
// function stringChop(str, size) {
//     let i=0,arr=[];
//    while(i<=str.length-1){
//      arr.push(str.slice(i,i+size));
//      i=i+size;
//    }         
   
//    return arr;
        
         
//    } 
// function stringChop(str, size) {
//     // Check if the input string is empty
//     if (str === "") {
//       return [];
//     }
  
//     let i = 0;
//     const arr = [];
//     while (i <= str.length - 1) {
//         let z=str.slice(i, i + size)
//       arr.push(z);
//       i = i + size;
//     }
  
//     return arr;
//   }
  
   
//    // Do not change the code below
//    const str = prompt("Enter String.");
//    const size = prompt("Enter Chunk Size.");
//    alert(stringChop(str, size));
// function stringChop(str, size) {
// 	if(str === null) {
// 		return [];  }
//  let i=0,arr= [];
// while(i <=str.length-1){
//   arr.push( str.slice(i , i+size) );
//   i=i+size;  
// }        

// return arr;
	 
	  
// } 


// const str = prompt("Enter String."); 
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));

// let student={
//     name:"venkatesh",
//     rollno:123454,
    

//     callme: function(){
//         console.log(this);
//         let x = () => {
//             console.log(this);
//         }
//         let y=function(){
//             console.log(this);
//         }
//         x();
//         y();
//     }
// }   
// student.callme();
// let z=[12,12,23,34,35,45,34];
// let a=[11,11,11,...z,11,11];
// let x=[..."venaktesh"];
// console.log(x);
// console.log(...[...x]);
// console.log(a);
// let c=47;
// let units = {
//     q:25,
//     d:10,
//     n:5, 
//     p:1
// }    
// let ans={};
// for(let i in units){
//   let currentunits=units[i];
//   ans[i]=parseInt(c/currentunits);
//   c=c%currentunits;
// }
// console.log(ans);

// function random() {
// 	let randomNo=parseInt(Math.random()*100);
// 	if(randomNo<47){
// 		randomNo +=47;
// 	}
// 	return randomNo;
// }
// function makeid(n) {
//   let str="";
// 	for(i=0;i<n;i++){
// 		str +=String.fromCharCode(random());
// 	}
//     return str;
// }
// console.log(makeid(33));

// let z=prompt("enter function name ");
// alert(z);
