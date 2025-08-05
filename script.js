// Ask for password first
const password = prompt("This site is under construction. Enter password:");

if (password === "cochin4422") {
  document.getElementById("content").style.display = "block";
  document.body.classList.remove("locked");

} else {
  document.body.innerHTML = "<h1 style='color: red; text-align:center; margin-top: 50px;'>Access Denied</h1>";
}
