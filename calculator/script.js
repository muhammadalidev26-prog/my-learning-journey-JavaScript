const display = document.getElementById("display");
const clearBtn = document.getElementById("clearBtn");

let current = "0";
let previous = null;
let operator = null;
let overwrite = true;

function updateDisplay() {
  display.textContent = current;
  clearBtn.textContent = current === "0" && previous === null ? "AC" : "C";
}

function formatNumber(num) {
  if (!isFinite(num)) return "Error";
  let str = String(num);
  if (str.length > 9) {
    str = num
      .toPrecision(9)
      .replace(/\.?0+$/, "")
      .replace(/\.?0+e/, "e");
    if (str.length > 9) str = num.toExponential(4);
  }
  return str;
}

function inputNumber(n) {
  if (overwrite) {
    current = n === "." ? "0." : n;
    overwrite = false;
  } else {
    if (n === "." && current.includes(".")) return;
    if (current.length >= 9) return;
    current = current === "0" && n !== "." ? n : current + n;
  }
  clearActiveOp();
  updateDisplay();
}

function clearActiveOp() {
  document
    .querySelectorAll(".orange[data-op]")
    .forEach((b) => b.classList.remove("selected"));
}

function compute() {
  const a = parseFloat(previous);
  const b = parseFloat(current);
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b === 0 ? NaN : a / b;
      break;
    default:
      return;
  }
  current = formatNumber(result);
  previous = null;
  operator = null;
}

document.querySelectorAll("[data-num]").forEach((btn) => {
  btn.addEventListener("click", () => inputNumber(btn.dataset.num));
});

document
  .querySelector('[data-action="decimal"]')
  .addEventListener("click", () => inputNumber("."));

document.querySelectorAll("[data-op]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (operator && !overwrite) {
      compute();
    } else {
      previous = current;
    }
    operator = btn.dataset.op;
    previous = previous ?? current;
    overwrite = true;
    clearActiveOp();
    btn.classList.add("selected");
    updateDisplay();
  });
});

document
  .querySelector('[data-action="equals"]')
  .addEventListener("click", () => {
    if (operator && previous !== null) {
      compute();
      overwrite = true;
      clearActiveOp();
      updateDisplay();
    }
  });

document
  .querySelector('[data-action="negate"]')
  .addEventListener("click", () => {
    if (current !== "0") {
      current = current.startsWith("-") ? current.slice(1) : "-" + current;
      updateDisplay();
    }
  });

document
  .querySelector('[data-action="percent"]')
  .addEventListener("click", () => {
    current = formatNumber(parseFloat(current) / 100);
    updateDisplay();
  });

clearBtn.addEventListener("click", () => {
  current = "0";
  previous = null;
  operator = null;
  overwrite = true;
  clearActiveOp();
  updateDisplay();
});

document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") inputNumber(e.key);
  else if (e.key === ".") inputNumber(".");
  else if (["+", "-", "*", "/"].includes(e.key))
    document.querySelector(`[data-op="${e.key}"]`).click();
  else if (e.key === "Enter" || e.key === "=")
    document.querySelector('[data-action="equals"]').click();
  else if (e.key === "Escape") clearBtn.click();
  else if (e.key === "%")
    document.querySelector('[data-action="percent"]').click();
});
