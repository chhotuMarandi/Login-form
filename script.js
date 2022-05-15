//selectors

const emailInput = document.querySelector(".email-input");
const passInput = document.querySelector(".pass-input");
const loginBtn = document.querySelector(".login-button");

//Event Listeners

loginBtn.addEventListener("click", function() {
    event.preventDefault();
    checkForm();
})

//Functions

function checkForm() {
    if(emailInput.value =="" || passInput.value =="") {
        alert("please fill the email and password");
    }
}

