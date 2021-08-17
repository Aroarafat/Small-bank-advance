const loginbutton = document.getElementById("login-submit");
loginbutton.addEventListener("click", function () {
    const userEmail = document.getElementById("user-email").value;
    const userPassword = document.getElementById("user-password").value;
    // console.log(userEmail, userPassword);
    if (userEmail == "arafat@gmail.com" && userPassword == "arafat") {
        window.location.href = 'banking.html';
    }
    else {
        // console.log("invalid user"); OR
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
    }
})