var typer;

function greetUser() {
  document.getElementById("greeting").innerHTML = "";
  typingSpeed = document.getElementById("typingSpeed").elements[0].value;
  interval = 60000 / (+typingSpeed * 6);
  clearInterval(typer);
  typer = setInterval(typeGreeting, interval);
}


function typeGreeting() {
  greeting = document.getElementById("greeting").innerHTML;
  name = document.getElementById("nameQuery").elements[0].value
  finishedGreeting = "Hello, " + name + "! It is nice to meet you. :)";
  if (greeting != finishedGreeting) {
    greeting = greeting + finishedGreeting.charAt(greeting.length);
  } else {
    clearInterval(typer);
  }
  document.getElementById("greeting").innerHTML = greeting;
}