const boulder = document.getElementById("boulder");
const aussie = document.getElementById("aussie");
const hyderabad = document.getElementById("hyderabad");
const datepicker = document.querySelector(".datepicker");

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
  let hyderabadTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });
  boulder.innerText = boulderTime.format(x);
  aussie.innerText = aussieTime.format(x);
  hyderabad.innerText = hyderabadTime.format(x);
}

setInterval(() => {
  interTime(), 1000;
});

M.Datepicker.init(datepicker);
