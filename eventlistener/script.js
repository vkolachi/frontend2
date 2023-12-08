

const button1=document.getElementById("btn1");
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


let student=[
    {
        name:"aravind",
        age:24
    },
    {
        name:"akash",
        age:25
    },
    {
        name:"venkatesh",
        age:25
    },
    {
        name:"vishal",
        age:29
    },
    {
        name:"yash",
        age:35
    },
    {
        name:"veeresh",
        age:31
    }
]

function filterstudents(searchquery){
    const filteredStudents=student.filter((student)=>{
        return student.name.toLowerCase().includes(searchquery.toLowerCase());
    })
    console.log(filterstudents);
}