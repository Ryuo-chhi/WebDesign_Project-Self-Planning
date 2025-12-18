// if (document.readyState === "loading") {
//   document.addEventListener("DOMContentLoaded", initCalculate);
// } else {
//   initCalculate();
// }

// function edit() {
//   document.querySelectorAll(".edit").forEach((el) => {
//     el.setAttribute("contenteditable", "true");
//     el.addEventListener("keydown", (e) => {
//       if (e.key === "Enter") e.preventDefault();
//     });
//   });
// }

// function calculate() {
//   const eachAmount = document.querySelectorAll(".amount-money");
//   const total = document.querySelector(".total-amount");
//   if (!total) return;

//   let sum = 0;

//   eachAmount.forEach((el) => {
//     let raw = el.textContent || "";
//     raw = raw.replace(/[^0-9.\-]+/g, "");
//     const n = parseFloat(raw);
//     if (!isNaN(n)) sum += n;
//   });

//   total.textContent = `$${sum.toFixed(2)}`;
// }

// function initCalculate() {
//   document.querySelector(".addCost").addEventListener("click", addNewTableRow);

//   edit();

//   const inputs = document.querySelectorAll(".amount-money");

//   inputs.forEach((el) => {
//     // recalc while typing
//     el.addEventListener("input", calculate);

//     // format on blur for wait user input finish and then insert $
//     el.addEventListener("blur", () => {
//       let raw = el.textContent || "";
//       raw = raw.replace(/[^0-9.\-]+/g, "");
//       const n = parseFloat(raw);

//       el.textContent = !isNaN(n) ? `$${n.toFixed(2)}` : "$0.00";
//       calculate();
//     });
//   });

//   calculate(); // initial
// }

// function addNewTableRow() {
//   const costContainer = document.getElementById("costContainer");
//   const totalCell = document.querySelector("#totalCell");
//   const newCell = document.createElement("tr");

//   newCell.innerHTML = `
//                         <td class ="edit" >Activities</td>
//                         <td class="edit amount-money"></td>
//                       `;

//   costContainer.insertBefore(newCell, totalCell || null);

// }



if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  const table = document.getElementById("costContainer");
  const addBtn = document.querySelector(".addCost");

  addBtn.addEventListener("click", addNewTableRow);

  // enable editing
  table.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
      e.target.setAttribute("contenteditable", "true");
      e.target.focus();
    }
  });

  // prevent enter
  table.addEventListener("keydown", (e) => {
    if (e.target.classList.contains("edit") && e.key === "Enter") {
      e.preventDefault();
    }
  });

  // recalc while typing
  table.addEventListener("input", (e) => {
    if (e.target.classList.contains("amount-money")) {
      calculate();
    }
  });

  // format on blur
  table.addEventListener("blur", (e) => {
    if (e.target.classList.contains("amount-money")) {
      let raw = e.target.textContent || "";
      raw = raw.replace(/[^0-9.\-]+/g, "");
      const n = parseFloat(raw);

      e.target.textContent = !isNaN(n) ? `$${n.toFixed(2)}` : "$0.00";
      calculate();
    }
  }, true);

  calculate();
}

function calculate() {
  const amounts = document.querySelectorAll(".amount-money");
  const total = document.querySelector(".total-amount");
  if (!total) return;

  let sum = 0;

  amounts.forEach((el) => {
    let raw = el.textContent || "";
    raw = raw.replace(/[^0-9.\-]+/g, "");
    const n = parseFloat(raw);
    if (!isNaN(n)) sum += n;
  });

  total.textContent = `$${sum.toFixed(2)}`;
}

function addNewTableRow() {
  const container = document.getElementById("costContainer");
  const totalRow = document.querySelector("#totalCell");
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td class="edit">Activities</td>
    <td class="edit amount-money"></td>
  `;

  container.insertBefore(tr, totalRow || null);
}

