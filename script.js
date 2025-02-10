function validateLogin() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let valid = true;

    document.querySelectorAll('.error-message').forEach((error) => {
        error.textContent = '';
    });

    if (username.value.trim() === "") {
        showError(username, "Username is required");
        valid = false;
    }

    if (password.value.trim() === "") {
        showError(password, "Password is required");
        valid = false;
    } else if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        valid = false;
    }

    if (valid) {
        alert("Login Successful!");
    }
    
    return valid; 
}

function showError(input, message) {
    let errorElement = input.nextElementSibling;
    errorElement.textContent = message;
}

function hideError(input) {
    let errorElement = input.nextElementSibling;
    errorElement.textContent = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let display = document.getElementById("display");
        display.value = eval(display.value);
    } catch {
        alert("Invalid Calculation");
        clearDisplay();
    }
}
