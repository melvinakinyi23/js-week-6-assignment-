// Button click
document.getElementById('clickBtn').addEventListener('click', () => {
  alert("You clicked the button!");
});

// Hover effect
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.style.backgroundColor = '#ffeaa7';
});
hoverBox.addEventListener('mouseleave', () => {
  hoverBox.style.backgroundColor = '#eee';
});

// Keypress detection
const keyInput = document.getElementById('keypressInput');
const keyOutput = document.getElementById('keypressOutput');

keyInput.addEventListener('keydown', (e) => {
  keyOutput.textContent = `You pressed: ${e.key}`;
});

// Double click secret action
document.getElementById('secretBtn').addEventListener('dblclick', () => {
  alert("🎉 Secret unlocked! You found the double-click!");
});

// Change button color
const colorChanger = document.getElementById('colorChanger');
colorChanger.addEventListener('click', () => {
  colorChanger.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// Image gallery
const galleryImage = document.getElementById('galleryImage');
const imageList = [
  "https://placekitten.com/300/200",
  "https://placekitten.com/301/200",
  "https://placekitten.com/300/201"
];
let currentIndex = 0;

document.getElementById('nextImg').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageList.length;
  galleryImage.src = imageList[currentIndex];
});

// Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    contents.forEach(c => c.classList.add('hidden'));
    document.getElementById(tab.dataset.tab).classList.remove('hidden');
  });
});

// Form validation
const form = document.getElementById('form');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!username || !email || !password) {
    status.textContent = "All fields are required!";
    status.style.color = "red";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = "Invalid email!";
    status.style.color = "orange";
    return;
  }

  if (password.length < 8) {
    status.textContent = "Password must be at least 8 characters!";
    status.style.color = "orange";
    return;
  }

  status.textContent = "Form submitted successfully!";
  status.style.color = "green";
});

