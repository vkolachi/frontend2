

// const button1=document.getElementById("btn1");
// button1.addEventListener("click",function () {
//     console.log("clicked Me");
// });
// // button1.addEventListener("click",function () {
// //     console.log("clicked Me22");
// // });
// button1.addEventListener("dblclick",function () {
//     console.log("doble clicked");
// });
// let count=0;

// const stoop=function(){
// count++;
// console.log("clicked me");
// if(count===2){
//     button1.removeEventListener("click",stoop);
//     console.log("stopped!!!!!");
// }
// }
// button1.addEventListener("click",stoop);

// button1.id="abc";


// let student=[
//     {
//         name:"aravind",
//         age:24
//     },
//     {
//         name:"akash",
//         age:25
//     },
//     {
//         name:"venkatesh",
//         age:25
//     },
//     {
//         name:"vishal",
//         age:29
//     },
//     {
//         name:"yash",
//         age:35
//     },
//     {
//         name:"veeresh",
//         age:31
//     }
// ]

// const searchinput=document.getElementById("a");
// function filterstudents(searchquery){

//     const filteredStudents=student.filter((student)=>{
//         return student.name.includes(searchquery);
//     })

//     console.log(filteredStudents);
// }



// searchinput.addEventListener("input",()=>{
//     let searchhQuery=searchinput.value;
//     filterstudents(searchhQuery);
// });

// const inputkeyboard=document.getElementById("keyboard");

// inputkeyboard.addEventListener("keyup",(event)=>{
// console.log(event);
// })
const scrollContainer=document.getElementById("scroll-container");
let count =1;


for(;count<=10;count++){
    const div =document.createElement("div");
    div.innerText=`item ${count}`;
    div.className="item";
    scrollContainer.appendChild(div);
}

scrollContainer.addEventListener("scroll",()=>{
    let scrooledheight=scrollContainer.scrollTop;
    let maxScrollableHeight=scrollContainer.scrollHeight-scrollContainer.clientHeight;

    if(maxScrollableHeight-scrooledheight<=5){
        addTwoMoreItems();
    }

})

function addTwoMoreItems() {
    const div1=document.createElement("div");
    div1.innerText=`item ${count++}`
    div1.className="item";

    const div2=document.createElement("div");
    div2.innerText=`item ${count++}`
    div2.className="item";

    // scrollContainer.appendChild(div1);
    // scrollContainer.appendChild(div2);
    // //or
    scrollContainer.append(div1,div2)

}