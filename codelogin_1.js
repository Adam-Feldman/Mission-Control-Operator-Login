
function checkCreds() {
    alert("Checking credentials");
    
         
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNumber = document.getElementById("badgeNumber").value;
    var name = firstName + " " + lastName;

    if (name.length >= 20) {
        // if the name has 20 or more characters.
        document.getElementById("loginStatus").innerHTML = "UserName has invalid number of characters!";

    }
    // if the badge has anything other than 3 numbers 
    else if (badgeNumber > 1000 || badgeNumber < 99) {
        document.getElementById("loginStatus").innerHTML = "Incorrect badge number!";

    }
    //All credentials are good, access granted
    else {
        alert("Access Granted, Welcome " + name + "!");
        location.replace("tables.html");
    }
}