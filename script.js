// Ask for password first
const password = prompt("This site is under construction. Enter password:");

if (password === "cochin4422") {
  document.getElementById("content").style.display = "block";
  document.body.classList.remove("locked");
/*
  // Countdown Logic
  const targetDate = new Date("2025-12-01T00:00:00"); // Set your launch date here

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "We're Live!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  }

  // Update every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
*/
  
} else {
  document.body.innerHTML = "<h1 style='color: red; text-align:center; margin-top: 50px;'>Access Denied</h1>";
}

