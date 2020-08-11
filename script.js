const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function clockWorking() {
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  const secondsXminutes = 60;

  var secDegrees = seconds / secondsXminutes * 360;
  var minDegrees = (minutes * 6) + (seconds * 0.1);
  var hrDegrees = (minutes / 2) + ((hours / 12) * 360);

  sec.style.transform = 'rotate(' + secDegrees + 'deg)';
  min.style.transform = 'rotate(' + minDegrees + 'deg)';
  hr.style.transform = 'rotate(' + hrDegrees + 'deg)';
}

setInterval(clockWorking, 1000);

clockWorking();