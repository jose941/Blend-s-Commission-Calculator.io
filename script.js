// Elements
const totalDisplay = document.getElementById('total');
const extraInput = document.getElementById('extraCharacters');
const extraCameraInput = document.getElementById('extraCamera');
const halfCharacterInput = document.getElementById('halfCharacters');
const characterEditInput = document.getElementById('editCharacters');
const fluidInput = document.getElementById('fluidCount');
const themeBtn = document.getElementById('themeToggle');

// Restore theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeBtn.textContent = 'Light Mode ☀️';
}

// Prices
const basePrice = 10;
const extraPricePerCharacter = 5;
const extraPricePerCamera = 1;
const characterEdit = 5;
const halfCharacterPrice = 2.5;
const fluidPricePerUnit = 2;

// Update total function
function updateTotal() {
  let total = basePrice;

  const extraCount = parseInt(extraInput.value) || 0;
  total += extraCount * extraPricePerCharacter;

  const halfCount = parseInt(halfCharacterInput.value) || 0;
  total += halfCount * halfCharacterPrice;

  const editCount = parseInt(characterEditInput.value) || 0;
  total += editCount * characterEdit;

  const extraCameraCount = parseInt(extraCameraInput.value) || 0;
  total += extraCameraCount * extraPricePerCamera;

  const fluidCount = parseInt(fluidInput.value) || 0;
  total += fluidCount * fluidPricePerUnit;

  totalDisplay.textContent = total.toFixed(2);
}

// Event listeners
extraInput.addEventListener('input', updateTotal);
halfCharacterInput.addEventListener('input', updateTotal);
characterEditInput.addEventListener('input', updateTotal);
extraCameraInput.addEventListener('input', updateTotal);
fluidInput.addEventListener('input', updateTotal);

// Initialize total
updateTotal();

// Theme toggle
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeBtn.textContent = isDark ? 'Light Mode ☀️' : 'Dark Mode 🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
