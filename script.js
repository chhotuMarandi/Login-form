//selectors

const emailInput = document.querySelector(".email-input");
const passInput = document.querySelector(".pass-input");
const loginBtn = document.querySelector(".login-button");

//Event Listeners

loginBtn.addEventListener("click", function() {
    event.preventDefault();
    console.log("hello");
})

//Functions

function checkForm() {
    if(emailInput==="" && passInput==="") {
        console.log("please fill the email and password");
    }
}
