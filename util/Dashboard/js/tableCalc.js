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
export function edit(){
  const editContent = document.querySelectorAll(".edit");

  editContent.forEach((el) => {
    el.setAttribute("contenteditable", "true");
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    });
  });

}
function init() {
  const table = document.getElementById("costContainer");
  const addBtn = document.querySelector(".addCost");

  addBtn.addEventListener("click", addNewTableRow);

  // enable editing
  edit();
  
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
  table.addEventListener(
    "blur",
    (e) => {
      if (e.target.classList.contains("amount-money")) {
        let raw = e.target.textContent || "";
        raw = raw.replace(/[^0-9.\-]+/g, "");
        const n = parseFloat(raw);

        e.target.textContent = !isNaN(n) ? `$${n.toFixed(2)}` : "$0.00";
        calculate();
      }
    },
    true
  );

  remove();
  // delegated remove handler so new rows don't need individual listeners
  //to make the new row have added works with remove func
  table.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".remove");
    if (removeBtn && table.contains(removeBtn)) {
      const tr = removeBtn.closest("tr");
      const amounts = tr.querySelector(".amount-money");
      if (amounts) amounts.textContent = "";
      calculate();
      tr.remove();
    }
  });

  calculate();
}

function remove() {
  const tableRow = document.querySelectorAll("#costContainer tr");

  tableRow.forEach((el) => {
    const removeBtn = el.querySelector(".remove");
    const amounts = el.querySelector(".amount-money");

    if (removeBtn) {
      removeBtn.addEventListener("click", () => {
        amounts.textContent = "";
        calculate();
        el.remove();
      });
    }
  });
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
                    <td class="cost">
                      <div class="edit amount-money"></div>
                      <div class="remove">
                        <i class="fi fi-rr-cross"></i>
                      </div>
                    </td>
  `;

  container.insertBefore(tr, totalRow || null);

  // make the new editable cells actually editable
  tr.querySelectorAll(".edit").forEach((el) => {
    el.setAttribute("contenteditable", "true");
  });
}
