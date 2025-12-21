// Helper: attach remove handler to a single item
function attachRemove(item) {
  if (!item) return;
  const btn = item.querySelector(".removeAct");
  if (!btn) return;
  btn.addEventListener("click", () => {
    item.remove();
  });
}

// Initialize remove handlers for existing items
function initRemovals() {
  document.querySelectorAll(".info-callout").forEach((el) => attachRemove(el));

  document.querySelectorAll(".todo-item").forEach((el) => attachRemove(el));

  document.querySelectorAll(".packing-item").forEach((el) => attachRemove(el));

  document.querySelectorAll(".highlight-item").forEach((el) => attachRemove(el));
}

//  Booking/Transport/Map New Buttons
document
  .querySelectorAll(".new-booking-btn, .new-transport-btn")
  .forEach((btn) => {
    btn.addEventListener("click", () => {
      // Find the section this button belongs to
      const section = btn.closest("section");
      if (!section) return;

      const newInfo = document.createElement("div");
      newInfo.className = "info-callout";
      newInfo.innerHTML = ` 
      <div class="info-callout-text edit">New Item: Details here</div>
      <div class="removeAct">
        <i class="fi fi-rr-cross"></i>
      </div>
    `;

      section.appendChild(newInfo);
      attachRemove(newInfo); // Crucial: attach listener to the new element
    });
  });
document.querySelector(".new-map-btn").addEventListener("click", () => {
  const newInfo = document.createElement("div");
  newInfo.className = "info-callout";
  newInfo.innerHTML = ` 
                <div class="info-callout-text edit">Link to route planning</div>
                <div class="removeAct">
                  <i class="fi fi-rr-cross"></i>
                </div>
    `;

  document.querySelector(".googleMap").appendChild(newInfo);
  attachRemove(newInfo); // Crucial: attach listener to the new element
});

// To Do's Logic
const todoSection = document.querySelector(".todo-list");
if (todoSection) {
  const todoInput = todoSection.querySelector("input[type='text']");
  const todoIcon = todoSection.querySelector("i");

  function submitTodo() {
    const val = todoInput.value.trim();
    if (!val) return;
    const item = document.createElement("div");
    item.className = "todo-item";
    item.innerHTML = `
      <input class="todo-checkbox" type="checkbox" name="todo-checkbox" />
      <div class="action">
        <span>${val}</span>
        <div class="removeAct"><i class="fi fi-rr-cross"></i></div>
      </div>
    `;
    todoSection.appendChild(item);
    attachRemove(item);
    todoInput.value = "";
  }

  todoIcon.addEventListener("click", submitTodo);
  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitTodo();
  });
}

// Travel Highlights Logic
const travelSection = document.querySelector(".travel");
if (travelSection) {
  const highlightInput = travelSection.querySelector("input");
  const highlightIcon = travelSection.querySelector("i");
  const list = travelSection.querySelector(".highlights-list");

  function submitHighlight() {
    const val = highlightInput.value.trim();
    if (!val) return;
    const li = document.createElement("li");
    li.className = "highlight-item edit";
    li.innerHTML = `
      <div class="action">
        <span class="edit">${val}</span>
        <div class="removeAct"><i class="fi fi-rr-cross"></i></div>
      </div>
    `;
    list.appendChild(li);
    attachRemove(li);
    highlightInput.value = "";
  }

  highlightIcon.addEventListener("click", submitHighlight);
  highlightInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitHighlight();
  });
}

// Packing List Logic
const packingSection = document.querySelector(".packing-list");
if (packingSection) {
  const packingInput = packingSection.querySelector("input");
  const packingIcon = packingSection.querySelector("i");

  function submitPacking() {
    const val = packingInput.value.trim();
    if (!val) return;
    const item = document.createElement("div");
    item.className = "packing-item";
    item.innerHTML = `
      <input class="todo-checkbox" type="checkbox" name="todo-checkbox" />
      <div class="action">
        <span>${val}</span>

            <div class="removeAct">
            <i class="fi fi-rr-cross"></i>
            </div>
        </div>
    `;
    packingSection.appendChild(item);
    attachRemove(item);
    packingInput.value = "";
  }

  packingIcon.addEventListener("click", submitPacking);
  packingInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitPacking();
  });
}

// Run initial removal attachment
initRemovals();
