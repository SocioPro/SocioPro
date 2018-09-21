
function check() {
    "use strict";
        var error_message = document.getElementById('error_message');
        error_message.innerHTML = "";
        var fname = document.getElementById("fname").value;    
        if (fname.length < 5) {
            error_message.innerHTML = "* First name must be more than 4 characters";
            error_message.className = "error_fname";
            return false;
        }
        var sname = document.getElementById("sname").value;
        
        if (sname.length < 5) {
            error_message.innerHTML = "* Second name must be more than 4 characters";
            error_message.className = "error_sname";
            return false;
        }
        
        var username = document.getElementById("username").value;
        
        if (username.length < 5) {
            error_message.innerHTML = "* Username must be more than 4 characters";
            error_message.className = "error_username";
            return false;
        }
        var email = document.getElementById("email").value;
    
        if (email.length < 6) {
            error_message.innerHTML = "* Enter a valid email adress";
            error_message.className = "error_email";
            return false;
        }
        var pass = document.getElementById("password").value;
    
        if (pass.length < 8) {
            error_message.innerHTML = "* Password must be more than 7 characters";
            error_message.className = "error_password";
            return false;
        }
        var confirm = document.getElementById("confirm").value;
    
        if (pass !== confirm) {
            error_message.innerHTML = "* Passwords do not match";
            error_message.className = "error_confirm";
            return false;
        }
    return true;

}

function clear_error(){
    var error_message = document.getElementById('error_message');
    var message = error_message.className;
    if(message === "error_fname"){
        var fname = document.getElementById("fname").value;
        
        if(fname.length > 4){
            error_message.innerHTML = "";
            error_message.className ="";
        }
    }else if(message === "error_sname"){
        var sname = document.getElementById("sname").value;
        
        if(sname.length > 4){
            error_message.innerHTML = "";
            error_message.className ="";
        }
    }else if(message === "error_username"){
       var username = document.getElementById("username").value;
        
        if(username.length > 4){
            error_message.innerHTML = "";
            error_message.className ="";
        } 
    }else if(message === "error_email"){
        var email = document.getElementById("email").value;
        
        if(email.length > 6){
            error_message.innerHTML = "";
            error_message.className ="";
        }
    }else if(message === "error_password"){
        var password = document.getElementById("password").value;
        
        if(password.length > 7){
            error_message.innerHTML = "";
            error_message.className ="";
        }
    }else if(message === "error_confirm"){
        var confirm = document.getElementById("confirm").value;
        var pass = document.getElementById("password").value;
        
        if(confirm === pass){
            error_message.innerHTML = "";
            error_message.className ="";
        }
    }
}
    
    
