// Simple JavaScript to handle button click  
const btn = document.getElementById('notifyBtn');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
  message.textContent = "Thanks! We'll notify you when the site is live.";
  btn.disabled = true;
  btn.style.backgroundColor = '#6c757d'; // change button color to gray
  btn.style.cursor = 'default';
});

