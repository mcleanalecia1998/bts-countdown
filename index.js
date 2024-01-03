// set countdown date

function jinComesHome() {
  let jinCountDownDate = new Date("June 12, 2024").getTime();
  let now = new Date().getTime();
  let distance = jinCountDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "jin-timer"
  ).innerHTML = `${days} days ${hours} hr ${minutes} mins ${seconds} s`;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("jin-timer").innerHTML = `Jin is back`;
  }
}

function hobiComesHome() {
  let hobiCountDownDate = new Date("Oct 17, 2024").getTime();
  let now = new Date().getTime();
  let distance = hobiCountDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "hobi-timer"
  ).innerHTML = `${days} days ${hours} hr ${minutes} mins ${seconds} s`;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hobi-timer").innerHTML = `Hobi is Home!!`;
  }
}

function namTaeComesHome() {
  let namTaeCountDownDate = new Date("June 10, 2025").getTime();
  let now = new Date().getTime();
  let distance = namTaeCountDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "namtae-timer"
  ).innerHTML = `${days} days ${hours} hr ${minutes} mins ${seconds} s`;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById(
      "namtae-timer"
    ).innerHTML = `Namjoon and Tae are back`;
  }
}

function jikookComesHome() {
  let jikookCountDownDate = new Date("June 11, 2025").getTime();
  let now = new Date().getTime();
  let distance = jikookCountDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "jikook-timer"
  ).innerHTML = `${days} days ${hours} hr ${minutes} mins ${seconds} s`;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("jikook-timer").innerHTML = `Hobi is back`;
  }
}

function sugaComesHome() {
  let sugaCountDownDate = new Date("June 21, 2025").getTime();
  let now = new Date().getTime();
  let distance = sugaCountDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "suga-timer"
  ).innerHTML = `${days} days ${hours} hr ${minutes} mins ${seconds} s`;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("suga-timer").innerHTML = `Hobi is back`;
  }
}

setInterval(jinComesHome, 1000);
setInterval(hobiComesHome, 1000);
setInterval(namTaeComesHome, 1000);
setInterval(jikookComesHome, 1000);
setInterval(sugaComesHome, 1000);
