const fibonacciInput = document.getElementById("fibonacciInput");
const fibonacciButton = document.getElementById("fibonacciButton");
const fibonacciResult = document.getElementById("fibonacciResult");

fibonacciButton.addEventListener("click", (e) => {
  e.preventDefault();
  const n = parseInt(fibonacciInput.value);
  if (isNaN(n)) {
    alert("Please enter a non-negative integer between 0 and 30");
    return;
  } else if (n < 0) {
    n = 0;
  } else if (n > 30) {
    n = 30;
  }
  const result = fibonacci(n);
  fibonacciResult.textContent = `The ${n}th Fibonacci sequence is ${result}.`;
});

// recursive function that returns an array with the first nth Fibonacci numbers
function fibonacci(n) {
  n = parseInt(n);
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const fibs = fibonacci(n - 1);
  fibs.push(fibs[n - 2] + fibs[n - 3]);
  return fibs;
}
