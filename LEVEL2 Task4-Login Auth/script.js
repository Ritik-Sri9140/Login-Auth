// Register function
function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Registration successful!");
        showLoginForm();
    } else {
        alert("Please fill in both fields");
    }
}

// Login function
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        document.getElementById("user").innerText = username;
        document.getElementById("login-form").style.display = "none";
        document.getElementById("secured-page").style.display = "block";
    } else {
        alert("Incorrect username or password!");
    }
}

// Logout function
function logout() {
    document.getElementById("secured-page").style.display = "none";
    showLoginForm();
}

// Show login form
function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}

// Show register form
function showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}
