const form = document.getElementById("form");
const recordsContainer = document.getElementById("records-container");
const createButton=document.querySelector("#form button");

let formState="CREATE";
const employeelist=[];

let empId = 1000;

const onSubmitForm = (event) => {
  event.preventDefault();
  const employee = {
    employeid: ++empId,
    name: event.target.name.value,
    // employeid: event.target.employeid.value,
    salary: event.target.salary.value,
    team: event.target.team.value,
    role: event.target.role.value,
    CompanyName: event.target.companyName.value,
  }
  if(formState === "CREATE"){
    addNewEmployeeRecords(employee);
  }
  else if(formState === "UPDATE"){
    formState="CREATE";
    createButton.innerText="Create Employee";
  }
//   console.log(employee);

form.reset();
}

function deleteRecord(event){
  if(formState === "UPDATE"){
    alert("please update record before deleting anything");
    return;
  }
 const deletebutton = event.target;

 const record=deletebutton.parentNode.parentNode;

 record.remove();

 const currentEmployeeId=parseInt(deletebutton.getAttribute("data-empid"));

 for(let i=0;i<employeelist.length;i++){
  if(employeelist[i].employeid===currentEmployeeId){
    employeelist.splice(i,1);
    break;
  }
 }
}
function fillFormWithData(employee){
  for(let key in employee){
    if(key !== "employeid"){
      createButton.innerText="Update Employee";
      form[key].value=employee[key];
    }
  }
 // createButton.innerText="Update Employee";
  formState="UPDATE";
}

function editRecord(event){
  const editButton=event.target;
  const currentEmployeeId=parseInt(editButton.getAttribute("data-empid"));
 // console.log(currentEmployeeId);
  for(let i=0;i<employeelist.length;i++){
    if(currentEmployeeId===employeelist[i].employeid){
      //console.log(employeelist[i]);
       fillFormWithData(employeelist[i]);
      break;
    }
   }

}

function addNewEmployeeRecords(employee){
    const record=document.createElement("tr");

    for(let key in employee){
        const cell=document.createElement("td");
        cell.innerText=employee[key];
        record.appendChild(cell);
    }

    const optionsCell=document.createElement("td");

    const editIcon=document.createElement("span");
    editIcon.className="material-icons icon";
    editIcon.innerText="edit";
    editIcon.setAttribute("data-empId",employee.employeid);
    editIcon.addEventListener("click",editRecord);

    const deleteIcon=document.createElement("span");
    deleteIcon.className="material-icons icon";
    deleteIcon.innerText="delete";
    deleteIcon.setAttribute("data-empId",employee.employeid);
    deleteIcon.addEventListener("click",deleteRecord);

    optionsCell.append(editIcon,deleteIcon)
    record.appendChild(optionsCell);
    
    recordsContainer.appendChild(record);

    employeelist.push(employee);
}

form.addEventListener("submit", onSubmitForm);
