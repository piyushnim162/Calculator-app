// Get references to DOM elements
const display = document.getElementById('display');
const resetButton = document.getElementById('reset');
const delButton = document.getElementById('del');
const equalsButton = document.getElementById('equals');

// Initialize the display content
let currentInput = '0';

// Function to update the display
function updateDisplay() {
    display.textContent = currentInput;
}

// Function to handle number and operator input
function handleButtonClick(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value; // Replace '0' with the clicked value
    } else {
        currentInput += value; // Append the clicked value
    }
    updateDisplay();
}

// Function to handle the "DEL" button (delete last character)
function deleteLastCharacter() {
    if (currentInput.length === 1 || currentInput === '0') {
        currentInput = '0'; // Reset to '0' if only one character is left
    } else {
        currentInput = currentInput.slice(0, -1); // Remove the last character
    }
    updateDisplay();
}

// Function to reset the display to '0'
function resetCalculator() {
    currentInput = '0';
    updateDisplay();
}

// Function to evaluate the expression
function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (e) {
        currentInput = 'Error'; // Display error if invalid expression
    }
    updateDisplay();
}

// Add event listeners for buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            resetCalculator();
        } else if (value === 'DEL') {
            deleteLastCharacter();
        } else if (value === '=') {
            calculateResult();
        } else {
            handleButtonClick(value);
        }
    });
});

// Ensure the initial display is set
updateDisplay();
