
    function verifyPassword() {
        var pw = document.getElementById("pswd").value;
        if (pw == "lozinka") {
            document.getElementById("message").innerHTML = "lozinka";
            return false;
        }

        //minimum password length validation  
        if (pw.length < 8) {
            document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
            return false;
        }

        //maximum length of password validation  
        if (pw.length > 15) {
            document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
            return false;
        } else {
            alert("Password is correct");
        }
    }  

