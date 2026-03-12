function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = time;
}
function loginAlert() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user == "" || pass == "") {
    alert("Username dan Password harus diisi!");
  } else {
    alert("Login berhasil! Selamat datang " + user);
  }
}

setInterval(updateClock, 1000);

updateClock();