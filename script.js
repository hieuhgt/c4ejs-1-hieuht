//Excercise 3
//a
for (let i = 0; i <= 6; i++) {
    console.log(i);
}
//b
let n = prompt("Enter the number");
for (let i = 0; i < n; i++) {
    console.log(i);
}
//c
let n1 = prompt("Enter the number");
for (let i = 3; i < n1; i++) {
    console.log(i);
}
//d
let c = prompt("Enter c");
let n2 = prompt("Enter n");
for (let i = c; i < n2; i++) {
    console.log(i);
}
//e
let c1 = Number(prompt("Enter c"));
let n3 = Number(prompt("Enter n"));
for (let i = c1; i < n3; i += 3) {
    console.log(i);
}
//f
let c2 = Number(prompt("Enter c"));
let n4 = Number(prompt("Enter n"));
let s = Number(prompt("Enter s:"));
for (let i = c2; i < n4; i += s) {
    console.log(i);
}
// Excercise 4

let age = Number(prompt("How old are you?"));
if (age < 14) {
    alert("You are not old enough to view this content");
} else {
    alert("Enjoy");
}
//Excercise 5

let x = Number(prompt("Enter a number:"));
if (x > 0 && x < 4.5) {
    alert("Lower half of 9");
} else if (x >= 4.5 && x < 9) {
    alert("Higher half of 9");
} else {
    alert("Wrong input")
}

// EXcercise 6

let x1 = Number(prompt("x ="));
let n5 = Number(prompt("n ="));
if (x1 > 0 && x1 < parseFloat(n5 / 2)) {
    alert("Lower half of " + n5);
} else if (x1 >= parseFloat(n5 / 2) && x1 < n5) {
    alert("Higher half of " + n5);
} else {
    alert("Wrong input")
}

// Excercise 7

let x2 = Number(prompt("x ="));
if (x2 % 2 == 0) {
    alert(x2 + " is an even number");
} else {
    alert(x2 + " is an odd number");
}

// Excercise 8
// a
for (let i = 0; i < 3; i++) {
    console.log('L');
}
for (let i = 0; i < 3; i++) {
    console.log('H');
}
// b
let n6 = Number(prompt("Enter number"));
for (let i = 0; i < (n6 / 2); i++) {
    console.log('L');
}
for (let i = 0; i < Math.floor((n6 / 2)); i++) {
    console.log('H');
}
//c
for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        console.log("0");
    } else {
        console.log('1');
    }
}
//d
let n7 = Number(prompt('Enter a number'))
for (let i = 0; i < n7; i++) {
    if (i % 2 == 0) {
        console.log("0");
    } else {
        console.log('1');
    }
}

// Excercise 9
let weight = prompt("Your weight is kg");
let height = prompt("Your height is cm");
let heightConvert = parseFloat(height / 100);
let result = weight / (heightConvert * heightConvert);
alert("Your BMI is " + result);
if (result < 16) {
    alert("Severely underweight");
} else if (result >= 16 && result < 18.5) {
    alert("Underweight");
} else if (result >= 18.5 && result < 25) {
    alert("Normal");
} else if (result >= 25 && result < 30) {
    alert("Overweight");
} else if (result >= 30) {
    alert("Obese");
}

// Excercise 10
//a
for (let i = 0; i < 4; i++) {
    fd(100)
    rt(90)
}
//b
for (let i = 0; i < 3; i++) {
    fd(100)
    rt(120)
    fd(100)
}
//c
for (let i = 0; i < 5; i++) {
    fd(100)
    rt(72)
}
//d
for (let i = 0; i < 6; i++) {
    fd(100)
    rt(60)
}
//Excercise11
let n = Number(prompt("hieu"));
for (let i = 0; i < n; i++) {
    if (n == 3) {
        fd(100)
        rt(120)
        fd(100)
    } else if (n == 4) {
        fd(100)
        rt(90)
    } else if (n >= 100) {
        fd(10)
        rt(5)
    } else if (n == 5) {
        fd(100)
        rt(72)
    } else if (n == 6) {
        fd(100)
        rt(60)
    } else if (n == 7) {
        fd(100)
        rt(51.42)
    } else if (n == 8) {
        fd(100)
        rt(45)
    }
}







