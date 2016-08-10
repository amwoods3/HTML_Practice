function buildForm() {
  var size = document.getElementById("howMany").elements[0].value;
  var arrayForm = "";
  for (var i = 0; i < +size; ++i) {
    arrayForm += '<input type="number"><br>\n';
  }
  document.getElementById("ListOfNumbers").innerHTML = arrayForm;
}