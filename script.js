const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function clockWorking() {
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
}

clockWorking();