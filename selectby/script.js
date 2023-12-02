function changeplaceholder(){
    const z=document.getElementById("venkatesh");
    z.value="venkatesh";
}
function changetype(){
    const x=document.querySelector("#veenkatesh");
    const z=document.getElementById("xyzz");
    if(x.type === "password" )
    {
        x.type ="text";
        z.innerText="Hide";
    }else{
         x.type="password";
         z.innerText="Show";
    }

}

function createSpan(){
    let newElement=document.createElement("span");
    newElement.innerText="venkatesh ";
    const bodyelement=document.querySelector("body");
    bodyelement.appendChild(newElement);
}

const userList=[
    "aravid",
    "sukanta",
    "srikant",
    "prem",
    "rahul",
    "rajsh",
    "sreemukh"
]

const usersContainer=document.querySelector(".users");

function showUsers(){
    usersContainer.innerText="";
    
    userList.forEach((user)=>{
        const userElemet=document.createElement("div");
        userElemet.innerText=user;
        userElemet.className="user-item";
        usersContainer.appendChild(userElemet);
    }
    )

}
let isHeadingAdded=false;

function insertBeforeSpan(){
    if(isHeadingAdded) return;
    const h1=document.createElement("h1");
    h1.innerText="venkateshh";

    const parent=document.getElementById("container");
    const nextsibling=document.querySelector("#container > span");

    parent.insertBefore(h1,nextsibling);
    isHeadingAdded=true;
}

function deleteIt(){
    const elemtToDelete=document.querySelector("#container > b");
    elemtToDelete.remove();
}