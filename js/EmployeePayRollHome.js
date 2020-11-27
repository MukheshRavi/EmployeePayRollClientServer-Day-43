let employeeList = [];
window.addEventListener('DOMContentLoaded', ()=>{
    createEmployeeTable();

});

const createEmployeeTable = ()=>{
    employeeList = JSON.parse(localStorage.getItem("NewEmployeePayrollList"));
   let innerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    for (const empPayrollData of employeeList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="profilePic" src="${empPayrollData._profilePic}"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
            <img id="${empPayrollData._id}" onclick="remove(this)" 
                src="../assets/icons/delete-black-18dp.svg" alt="delete">
            <img id="${empPayrollData._id}" onclick="update(this)" 
                src="../assets/icons/create-black-18dp.svg" alt="edit"></td>
        </tr>
    `;
    }
    document.querySelector(".employeeTable").innerHTML = innerHtml;
}
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
  }
  //Function to Remove an employee
  const remove = (param) =>{
    let empPayrollData = employeeList.findIndex(emp => emp._id == param.id);
    if(askDelete(empPayrollData._name))
    employeeList.splice(empPayrollData,1);
    else
    return;
    localStorage.setItem("NewEmployeePayrollList", JSON.stringify(employeeList));
    createEmployeeTable();
}

let askDelete = (name) =>{
    return confirm("Do you want to continue with the deletion of employee!!"+name);
}
const update = (node) =>{
  let employeePayrollData = employeeList.find(emp => emp._id == node.id);
  if(employeePayrollData != undefined)
  {
      localStorage.setItem("editEmp",JSON.stringify(employeePayrollData));
      window.location.replace(site_properties.add_user);
  }
}

function createJsonFile()
{
    
      let EmployeePayrollDB = 
      [
        {
          "id": 1,
          "_name": "Mark Taylor",
          "_gender": "male",
          "_department": [
            "HR",
            "Sales",
            "Finance",
            "Engineer"
          ],
          "_salary": "500000",
          "_startDate": "29 Oct 2019",
          "_note": "All In One",
          "_profilePic": "../assets/profile -3.png"
        },
        {
          "_name": "Bharathi",
          "_profilePic": "../assets/profile -1.png",
          "_gender": "female",
          "_department": [
            "Finance"
          ],
          "_salary": "372000",
          "_note": "jkhkjk testtttt",
          "_startDate": "1 Nov 2020",
          "id": 2
        },
        {
          "id": 3,
          "_name": "Aravidh",
          "_profilePic": "../assets/profile -2.png",
          "_gender": "male",
          "_department": [
            "Finance",
            "Engineer"
          ],
          "_salary": "362000",
          "_note": " ,mnndfnsAhdsfhdskhfdsjk",
          "_startDate": "1 Nov 2020"
        },
        {
          "id": 4,
          "_name": "Harika",
          "_profilePic": "../assets/profile -4.png",
          "_gender": "female",
          "_department": [
            "Finance"
          ],
          "_salary": "337400",
          "_note": "dsflds",
          "_startDate": "1 Nov 2020"
        },
        {
          "id": 5,
          "_name": "Ayush",
          "_profilePic": "../assets/profile -3.png",
          "_gender": "male",
          "_department": [
            "Finance"
          ],
          "_salary": "363300",
          "_note": "Afdsfsd",
          "_startDate": "1 Nov 2020"
        }
      ]
       return EmployeePayrollDB;
}