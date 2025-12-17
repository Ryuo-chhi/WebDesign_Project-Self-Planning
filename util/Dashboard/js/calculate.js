function edit() {
  const editEle = document.querySelectorAll(".edit");
  editEle.forEach((el) => {
    el.setAttribute("contenteditable", "true");
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault(); // stop new line
      }
    });
  });
}

function calculate() {
  const eachAmount = document.querySelectorAll(".amount-money");
  const total = document.querySelector(".total-amount");
  if (!total) return;

  let sum = 0;

  eachAmount.forEach((el) => {
    let raw = el.textContent || el.innerText || "";
    raw = raw.toString().replace(/[^0-9.\-]+/g, "");
    const n = parseFloat(raw);

    if (!isNaN(n)) {
      sum += n;
    }
  });

  total.textContent = `$${sum.toFixed(2)}`;
}

// format cell and recalc on blur
document.querySelectorAll(".amount-money").forEach((el) => {
  el.addEventListener("blur", () => {
    let raw = el.textContent || "";
    raw = raw.toString().replace(/[^0-9.\-]+/g, "");
    const n = parseFloat(raw);

    if (!isNaN(n)) {
      el.textContent = `$${n.toFixed(2)}`;
    } else {
      el.textContent = "$0.00";
    }

    calculate(); // recalc total after formatting
  });
});

function initCalculate() {
  edit();
  // attach listeners to inputs and editable cells
  const inputs = document.querySelectorAll(".amount-money");
  inputs.forEach((el) => el.addEventListener("input", calculate));

  // initial calculation
  calculate();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCalculate);
} else {
  initCalculate();
}
