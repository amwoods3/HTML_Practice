function addTheInputs() {
  var theInputs = document.getElementById("addition");
  x = theInputs.elements[0].value;
  y = theInputs.elements[1].value;
  z = +x + +y;
  document.getElementById("sum").innerHTML = "The result is " + z;
}


function multiplyTheInputs() {
  var theInputs = document.getElementById("multiplication");
  x = theInputs.elements[0].value;
  y = theInputs.elements[1].value;
  z = +x * +y;
  document.getElementById("mult").innerHTML = "The result is " + z;
}

function divideTheInputs() {
  var theInputs = document.getElementById("division");
  x = theInputs.elements[0].value;
  y = theInputs.elements[1].value;
  if (y != 0) {
    z = +x / +y;
    document.getElementById("div").innerHTML = "The result is " + z;
  }
  else {
    document.getElementById("div").innerHTML = "The result is under your bed.";
  }
}

function displayTheTime() {
  setInterval(getTime, 1000);
}

function getTime() {
  document.getElementById("time").innerHTML = Date();
}