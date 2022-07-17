const clockMain = document.querySelector("#clockMain");
const clockAmPm = document.querySelector("#clockSub div:first-child");
const clockSec = document.querySelector("#clockSub div:last-child");
const calendar = document.querySelector("#calendar");
const months = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May.",
  "Jun.",
  "Jul.",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec.",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function get12Hour(hour) {
  if (hour > 12) {
    return [String(hour - 12).padStart(2, "0"), "PM"];
  } else if (hour === 12) {
    return [String(hour).padStart(2, "0"), "PM"];
  } else {
    return [String(hour).padStart(2, "0"), "AM"];
  }
}

function getOrdinal(date) {
  if (date === 1) {
    return `${date}st`;
  } else if (date === 2) {
    return `${date}nd`;
  } else if (date === 3) {
    return `${date}rd`;
  } else {
    return `${date}th`;
  }
}

function getClock() {
  const newDate = new Date();
  const hour = get12Hour(newDate.getHours())[0];
  const minute = String(newDate.getMinutes()).padStart(2, "0");
  const second = String(newDate.getSeconds()).padStart(2, "0");
  const amPm = get12Hour(newDate.getHours())[1];

  const day = days[newDate.getDay()];
  const month = months[newDate.getMonth()];
  const date = getOrdinal(newDate.getDate());
  const year = newDate.getFullYear();

  clockMain.innerText = `${hour}:${minute}`;
  clockAmPm.innerText = `${amPm}`;
  clockSec.innerText = `${second}`;
  calendar.innerText = `${day}, ${month} ${date}, ${year}`;
}

getClock();
setInterval(getClock, 1000);
