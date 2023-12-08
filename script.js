const allzone = document.getElementById("allzone");
const localDate = document.getElementById("local-date");
const intTime = document.getElementById("int-time");
const intTime2 = document.getElementById("int-time2");
const boulder = document.getElementById("boulder");
const aussie = document.getElementById("aussie");

function interTime() {
  let x = new Date();
  let boulderTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Denver",
    dateStyle: "full",
    timeStyle: "medium",
  });

  let aussieTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "Australia/Sydney",
    dateStyle: "full",
    timeStyle: "medium",
  });
  boulder.innerText = boulderTime.format(x);
  aussie.innerText = aussieTime.format(x);
}

setInterval(() => {
  interTime(), 1000;
});
