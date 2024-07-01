let inputFieldValue = document.getElementById("input")

const button1 = document.getElementById("num1")
const button2 = document.getElementById("num2")
const button3 = document.getElementById("num3")
const button4 = document.getElementById("num4")
const button5 = document.getElementById("num5")
const button6 = document.getElementById("num6")
const button7 = document.getElementById("num7")
const button8 = document.getElementById("num8")
const button9 = document.getElementById("num9")
const button0 = document.getElementById("num0")
const plus = document.getElementById("add")
const minus = document.getElementById("sub")
const equalto = document.getElementById("equal")
const divide = document.getElementById("divi")
const multiply = document.getElementById("mul")

button1.addEventListener("click", function() {
    console.log(button1.name);
    inputFieldValue.value += "1";
})
button2.addEventListener("click", function() {
    inputFieldValue.value += "2";
    console.log(button2.name);
})
button3.addEventListener("click", function() {
    inputFieldValue.value += "3";
    console.log(button3.name);
})
button4.addEventListener("click", function() {
    inputFieldValue.value += "4";
    console.log(button4.name);
})
button5.addEventListener("click", function() {
    inputFieldValue.value += "5";
    console.log(button5.name);
})
button6.addEventListener("click", function() {
    inputFieldValue.value += "6";
    console.log(button6.name);
})
button7.addEventListener("click", function() {
    inputFieldValue.value += "7";
    console.log(button7.name);
})
button8.addEventListener("click", function() {
    inputFieldValue.value += "8";
    console.log(button8.name);
})
button9.addEventListener("click", function() {
    inputFieldValue.value += "9";
    console.log(button9.name);
})
button0.addEventListener("click", function() {
    inputFieldValue.value += "0";
    console.log(button0.name);
})
plus.addEventListener("click", function() {
    inputFieldValue.value += "+";
    console.log(plus.name);
})
minus.addEventListener("click", function() {
    inputFieldValue.value += "-";
    console.log(minus.name);
})
multiply.addEventListener("click", function() {
    inputFieldValue.value += "*";
    
})
divide.addEventListener("click", function() {
    inputFieldValue.value += "/";
    
})
equalto.addEventListener("click", function() {
    try {
        const value = eval(inputFieldValue.value);
        inputFieldValue.value = value;
        console.log(value);
    } catch (error) {
        alert("Invalid Expression");
    }
})


