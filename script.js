const form = document.querySelector("form");
form.addEventListener('submit', function (event) {
    let pwd = document.getElementById("password");
    let pwdConfirm = document.getElementById("confirmPassword");
    if(pwd.value !== pwdConfirm.value) {
        alert("Passwords must match");
        pwd.classList.add("error");
        pwdConfirm.classList.add("error");
        event.preventDefault();
    }
});
