<!doctype html>
<html>
    <head>
        <title>Sign Up</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <center>
    <div class="center">
        <p class="title" id="t">Sign Up</p>
        <form action="" onsubmit="return check()" onclick="clear_error()">
        <input type="text" placeholder="First name" class="sign_up" id="fname"><br><br>
        <input type="text" placeholder="Second name" class="sign_up" id="sname"><br><br>
        <input type="text" placeholder="User name" class="sign_up" id="username"><br><br>
        <input type="text" placeholder="Email" class="sign_up" id="email"><br><br>
        <input type="password" placeholder="Password" class="sign_up" id="password"><br><br>
        <input type="password" placeholder="Confirm Password" class="sign_up" id="confirm"><br><br>
        <p id="error_message"></p>
        <input  type="submit" value="Sign Up" id="submit_sign_up">
        </form>
        <script src="signUpScript.js" type="text/javascript"></script>
    </div>
    </center>
</html>