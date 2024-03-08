


// Ensure the DOM content is loaded before accessing elements
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    if (loginButton) {
        // Add the event listener only if the button element is found
        loginButton.addEventListener("click", function () {
            window.location.href = "login_form.html";
        });
    } else {
        console.error("Login button not found.");
    }
});


document.getElementById("signupButton").addEventListener("click", function() {
    window.location.href = "signup_form.html";
});
