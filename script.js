const boulder = document.getElementById("boulder");
const aussie = document.getElementById("aussie");
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
  boulder.innerText = boulderTime.format(x);
  aussie.innerText = aussieTime.format(x);
}

setInterval(() => {
  interTime(), 1000;
});

M.Datepicker.init(datepicker);
