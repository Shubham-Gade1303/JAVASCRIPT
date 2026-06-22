
let employees = [];



function addEmployee() {

    let id = document.getElementById("empId").value;
    let name = document.getElementById("empName").value;
    let dept = document.getElementById("empDept").value;

    if(id === "" || name === "" || dept === "") {
        alert("Please fill all fields");
        return;
    }

    let employee = {
        id: id,
        name: name,
        department: dept
    };

    employees.push(employee);

    displayEmployees();

    document.getElementById("empId").value = "";
    document.getElementById("empName").value = "";
    document.getElementById("empDept").value = "";
}

// Display Employees

function displayEmployees() {

    let table = document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach((emp, index) => {

        table.innerHTML += `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>
                <button class="delete-btn"
                onclick="deleteEmployee(${index})">
                <i class="fa-solid fa-trash"></i>
                Delete
                </button>
            </td>
        </tr>
        `;
    });

    document.getElementById("count").innerText = employees.length;
}

// Delete Employee

function deleteEmployee(index) {

    let confirmDelete =
        confirm("Are you sure you want to delete this employee?");

    if(confirmDelete){

        employees.splice(index,1);

        displayEmployees();
    }
}