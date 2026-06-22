function getNumbers() {

    let input = document.getElementById("numbers").value;

    if(input === ""){
        alert("Please enter numbers");
        return [];
    }

    return input.split(",").map(Number);
}

// MAP
function squareNumbers() {

    let numbers = getNumbers();

    let squared = numbers.map(num => num * num);

    document.getElementById("output").innerHTML =
        "Squared Numbers: " + squared.join(", ");
}

// FILTER
function filterEven() {

    let numbers = getNumbers();

    let evenNumbers = numbers.filter(num => num % 2 === 0);

    document.getElementById("output").innerHTML =
        "Even Numbers: " + evenNumbers.join(", ");
}

// REDUCE
function findSum() {

    let numbers = getNumbers();

    let sum = numbers.reduce((total, num) => total + num, 0);

    document.getElementById("output").innerHTML =
        "Total Sum: " + sum;
}