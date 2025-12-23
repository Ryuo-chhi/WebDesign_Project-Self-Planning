// Table calculation utilities — scoped per cost table (supports multiple overlays)

export function edit() {
  const editContent = document.querySelectorAll(".edit");
  editContent.forEach((el) => {
    el.setAttribute("contenteditable", "true");
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") e.preventDefault();
    });
  });
}

export function init() {
  // Delegated click handler for add/remove buttons so each table is handled independently
  document.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".addCost");
    if (addBtn) {
      const tbody = addBtn.closest("tbody");
      if (tbody) addNewTableRow(tbody);
      return;
    }

    const removeBtn = e.target.closest(".remove");
    if (removeBtn) {
      const tr = removeBtn.closest("tr");
      const tbody = removeBtn.closest("tbody");
      if (tr) tr.remove();
      if (tbody) calculate(tbody);
      return;
    }
  });

  // Prevent Enter in editable fields globally
  document.addEventListener("keydown", (e) => {
    if (
      e.target.classList &&
      e.target.classList.contains("edit") &&
      e.key === "Enter"
    ) {
      e.preventDefault();
    }
  });

  // Recalculate while typing and on blur — scoped to the table containing the changed element
  document.addEventListener("input", (e) => {
    if (e.target.classList && e.target.classList.contains("amount-money")) {
      const tbody = e.target.closest("tbody");
      calculate(tbody);
    }
  });

  document.addEventListener(
    "blur",
    (e) => {
      if (e.target.classList && e.target.classList.contains("amount-money")) {
        let raw = e.target.textContent || "";
        raw = raw.replace(/[^0-9.\-]+/g, "");
        const n = parseFloat(raw);
        e.target.textContent = !isNaN(n) ? `$${n.toFixed(2)}` : "$0.00";
        const tbody = e.target.closest("tbody");
        calculate(tbody);
      }
    },
    true
  );

  // make current editable fields editable
  edit();

  // initial calculation for every cost table on the page
  document.querySelectorAll(".cost-table").forEach((tableEl) => {
    const tbody = tableEl.querySelector("tbody") || tableEl;
    calculate(tbody);
  });
}

function calculate(root) {
  const scope = root || document;
  const amounts = scope.querySelectorAll(".amount-money");
  const total = scope.querySelector(".total-amount");
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

function addNewTableRow(tbody) {
  const container = tbody || document.getElementById("costContainer");
  if (!container) return;
  const totalRow = container.querySelector("#totalCell");
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
  tr.querySelectorAll(".edit").forEach((el) =>
    el.setAttribute("contenteditable", "true")
  );
}
