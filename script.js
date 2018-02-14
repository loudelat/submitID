function hello() {
  var firstName = document.getElementById("first").value;
  var middleName = document.getElementById("middle").value;
  var lastName = document.getElementById("last").value;
  var fullName = firstName + " " + middleName + " " + lastName;
  var greeting = "Hello " + fullName;
  document.getElementById("result").innerHTML = greeting;
}
