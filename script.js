//selectors

const emailInput = document.querySelector(".email-input");
const passInput = document.querySelector(".pass-input");
const loginBtn = document.querySelector(".login-button");
const errorMsg = document.getElementById("text");
const form = document.getElementById("form");

//Event Listeners

loginBtn.addEventListener("click", function() {
    event.preventDefault();
    checkForm();
    emailInput.value ="";
    passInput.value ="";
    
})

//Functions

function checkForm() {
    if(emailInput.value =="" || passInput.value =="") {
       alert("Please fill up Email & Password");
    }
    if(!passInput.value =="") {
        if(passInput.value.length < 8) {
            alert("Password must be 8 Characters");
            emailInput.value ="";
            passInput.value ="";
        }
    }   
    
}

function emailValidation(){
    const emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;   //check email 
    if(emailInput.value.match(emailFormat)){           //validation parameter//
        form.classList.add("valid");
        form.classList.remove("invalid") ;
        errorMsg.innerHTML = "Your Email Address is Valid.";
        errorMsg.style.color = "#00ff00";
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        errorMsg.innerHTML = "Please Enter Valid Email Address";
        errorMsg.style.color = "#ff0000";
    }
    if(emailInput.value ==""){
        form.classList.remove("valid");
        form.classList.remove("invalid") ;
        errorMsg.innerHTML = "";
        errorMsg.style.color = "#00ff00";
    }
}
