const btn = document.querySelector("button");
const mailed = document.getElementById("mailer");
const err = document.getElementById("error");
const inval = document.getElementById("inval");

var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
btn.addEventListener("click", function () {
  if (!regex.test(mailed.value)) {
    err.style.display = "block";
    mailed.style.border = "2px solid hsl(0, 93%, 68%)";
    inval.style.display = "block";
  }
});
