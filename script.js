// დავალება 1

function positiveNumbersSum(...xyz) {
  let numbers = 0;
  for (let item of xyz) {
    if (item > 0) {
      numbers = numbers + item;
    }
  }
  return numbers;
}

let result = positiveNumbersSum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);

// დავალება 2

function numbersSum(...abc) {
  let numbers = 0;
  for (let item of abc) {
    numbers = numbers + item;
  }
  return numbers;
}

let result = numbersSum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result);

// დავალება 3

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

let name_surname = (write) => {
  if (write.isloggedin) {
    return write.firstname + " " + write.lastname;
  } else {
    return false;
  }
};

let write = name_surname(user);
console.log(write);

// დავალება 4
