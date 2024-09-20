const mergeInput = document.getElementById("mergeInput");
const mergeButton = document.getElementById("mergeButton");
const mergeResult = document.getElementById("mergeResult");

mergeButton.addEventListener("click", (e) => {
  e.preventDefault();

  const regex = new RegExp("^([0-9]+)(,[0-9]+)*$", "g");
  const mergeInputValue = mergeInput.value.trim();

  if (regex.test(mergeInputValue)) {
    const arr = mergeInputValue.split(",").map(Number);
    mergeResult.textContent = mergeSort(arr).join(", ");
  } else {
    mergeResult.textContent =
      "Invalid input. Please enter comma-separated integers.";
  }
});

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
