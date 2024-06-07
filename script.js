let oldpass = "12345";

function pass() {
  let newpass = document.getElementById("pass").value;
  if (oldpass != newpass) {
    oldpass = newpass;
    alert("Password Changed");
    document.write("New Password is:-"+ oldpass);
  } else {
    alert("Password Is Correct")
  }
}
