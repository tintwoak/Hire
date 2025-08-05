
// Ask for password first
const password = prompt("Enter password:");

if (password === "cochin4422") {
  // Show content
  document.getElementById("content").style.display = "block";
  document.body.classList.remove("locked");
} else {
  // Deny access
  document.body.innerHTML = "<h1 style='color: red; text-align:center; margin-top: 50px;'>Access Denied</h1>";
}

// Simple JavaScript to handle button click
const btn = document.getElementById('notifyBtn');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
  message.textContent = "Thanks! We'll notify you when the site is live.";
  btn.disabled = true;
  btn.style.backgroundColor = '#6c757d'; // change button color to gray
  btn.style.cursor = 'default';

});
