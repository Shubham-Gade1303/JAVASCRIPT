// Array to store students
let students = [];

// Function to add student
function addStudent() {

    let rollNo = document.getElementById("rollNo").value;
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    if (rollNo === "" || name === "" || marks === "") {
        alert("Please fill all fields");
        return;
    }

    // Object
    let student = {
        rollNo: rollNo,
        name: name,
        marks: marks
    };

    students.push(student);

    displayStudents();

    document.getElementById("rollNo").value = "";
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

// Function to display students
function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(function(student, index) {

        table.innerHTML += `
        <tr>
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>${student.marks}</td>
            <td>
                <button onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        </tr>`;
    });
}

// Function to delete student
function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}