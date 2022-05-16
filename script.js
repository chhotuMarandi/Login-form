//selectors

const emailInput = document.querySelector(".email-input");
const passInput = document.querySelector(".pass-input");
const loginBtn = document.querySelector(".login-button");
let errorElement = document.querySelector(".error"); 

//Event Listeners

loginBtn.addEventListener("click", function() {
    event.preventDefault();
    checkForm();
})

//Functions

function checkForm() {
    let messages = [];
    if(emailInput.value =="" || passInput.value =="") {
       alert("Please Fill Email & Password");
    }
    if(emailInput.value.length < 8 || passInput.value.length < 8) {
        alert("Password must be 8 Characters");
        emailInput.value ="";
        passInput.value ="";
    }   
}

