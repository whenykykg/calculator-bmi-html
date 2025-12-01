// Calculator functionality
let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// BMI Calculator functionality
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('bmi-result').innerHTML = 'Please enter valid weight and height.';
        return;
    }

    const bmi = weight / (height * height);
    let category = '';
    let className = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        className = 'bmi-underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
        className = 'bmi-normal';
    } else if (bmi < 30) {
        category = 'Overweight';
        className = 'bmi-overweight';
    } else {
        category = 'Obese';
        className = 'bmi-obese';
    }

    document.getElementById('bmi-result').innerHTML = `Your BMI is ${bmi.toFixed(2)}. Category: <span class="${className}">${category}</span>`;
}
