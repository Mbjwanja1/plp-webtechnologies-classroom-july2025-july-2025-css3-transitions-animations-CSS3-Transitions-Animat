// ==================== Box Animation Trigger ====================
const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');

function animateBox(element) {
  element.style.animation = 'moveBox 2s forwards';
  
  // Remove animation after complete to allow replay
  element.addEventListener('animationend', () => {
    element.style.animation = '';
  }, { once: true });
}

animateBtn.addEventListener('click', () => {
  animateBox(box);
});

// ==================== Loader Functions ====================
const loader = document.getElementById('loader');
const startLoad = document.getElementById('startLoad');
const stopLoad = document.getElementById('stopLoad');

function startLoader() {
  loader.style.display = 'block';
  loader.style.animation = 'spin 1s linear infinite';
}

function stopLoader() {
  loader.style.animation = '';
  loader.style.display = 'none';
}

startLoad.addEventListener('click', startLoader);
stopLoad.addEventListener('click', stopLoader);

// ==================== Card Flip Example ====================
// Already handled by CSS hover, but can also be toggled by JS
// Example reusable function:
function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}

// ==================== Scope, Parameters, Return Values Example ====================
let globalCount = 0;

function addNumbers(a, b) {
  // Local scope variables inside function
  const sum = a + b;
  return sum;
}

function increaseGlobalCount(amount) {
  globalCount += amount; // Access global variable
  return globalCount;
}

console.log(addNumbers(5, 10)); // 15
console.log(increaseGlobalCount(3)); // 3
console.log(increaseGlobalCount(2)); // 5
