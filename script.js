
var time, alarm, currentH, currentM,
  activeAlarm = false,
  sound = new Audio("alarm.mp3");
sound.loop = true
const taskList = document.getElementById("list")

//show and update time in real Time

const updateTime = () => {
  var dateTime = new Date().toLocaleTimeString()
  let time = document.getElementById("show-time")
  time.textContent = dateTime
  if (dateTime == alarm) {
    sound.play()
  }
}
setInterval(updateTime, 1000)


//give value to select options

function addMinSecVals(id) {
  var select = id;
  var min = 59;

  for (i = 0; i <= min; i++) {

    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i < 10 ? "0" + i : i);
  }
}

function addHours(id) {
  var select = id;
  var hour = 12;

  for (i = 1; i <= hour; i++) {

    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
addMinSecVals(minutes);
addMinSecVals(seconds);
addHours(hours);


//setAlarm

setAlarm.onclick = function() {

  if (activeAlarm === false) {
    hours.disabled = true;
    minutes.disabled = true;
    seconds.disabled = true;
    ampm.disabled = true;

    alarm = hours.value + ":" + minutes.value + ":" + seconds.value + " " + ampm.value;

    activeAlarm = true;

  };
}

//clear Alarm

clear.onclick = function() {
  if (activeAlarm === true) {
    hours.disabled = false;
    minutes.disabled = false;
    seconds.disabled = false;
    ampm.disabled = false;
    sound.pause();
    alarm = "00:00:00 AM";
    activeAlarm = false;
  }
};