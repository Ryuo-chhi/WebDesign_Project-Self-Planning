// Use delegated handlers so dynamically injected overlays and elements work
import { edit } from "./tableCalc.js";


// Global click handler for add/remove and new-item buttons
document.body.addEventListener("click", (e) => {
  // Remove action (works for info-callout, todo-item, packing-item, highlight-item)
  const removeEle = e.target.closest(".removeAct");
  if (removeEle) {
    const info =
      removeEle.closest(".info-callout") ||
      removeEle.closest(".todo-item") ||
      removeEle.closest(".packing-item") ||
      removeEle.closest(".highlight-item");
    if (info) info.remove();
    return;
  }

  // New booking / transport
  const newInfoBtn = e.target.closest(".new-booking-btn, .new-transport-btn");
  if (newInfoBtn) {
    const section = newInfoBtn.closest("section");
    if (!section) return;
    const newInfo = document.createElement("div");
    newInfo.className = "info-callout";
    newInfo.innerHTML = `
      <div class="info-callout-text edit">New Item: Details here</div>
      <div class="removeAct"><i class="fi fi-rr-cross"></i></div>
    `;
    section.appendChild(newInfo);
    return;
  }

  // New map
  // const newMapBtn = e.target.closest(".new-map-btn");
  // if (newMapBtn) {
  //   const section =
  //     newMapBtn.closest(".googleMap") || document.querySelector(".googleMap");
  //   if (!section) return;
  //   const newInfo = document.createElement("div");
  //   newInfo.className = "info-callout";
  //   newInfo.innerHTML = `
  //     <div class="info-callout-text edit">Link to route planning</div>
  //     <div class="removeAct"><i class="fi fi-rr-cross"></i></div>
  //   `;
  //   section.appendChild(newInfo);
  //   return;
  // }

  const icon = e.target.closest("i");
  if (icon && icon.classList.contains("fi-rr-paper-plane-top")) {
    const mapSection = icon.closest(".googleMap");
    if (mapSection) {
      const input = mapSection.querySelector('input[type="text"]');
      if (!input) return;
      const url = input.value.trim();
      if (!url) return;
      const newlink = document.createElement("div");
      newlink.className = "info-callout";
      newlink.innerHTML = `
      <a href="${url}">${url}</a>
      <div class="removeAct">
        <i class="fi fi-rr-cross"></i>
      </div>
      `;
      mapSection.appendChild(newlink);
      input.value = "";
      return;
    }
  }

  // Todo / highlight / packing submission via icon
  // const icon = e.target.closest("i");
  if (icon && icon.classList.contains("fi-rr-paper-plane-top")) {
    // Determine which section the icon belongs to
    const todoSection = icon.closest(".todo-list");
    if (todoSection) {
      const input = todoSection.querySelector('input[type="text"]');
      if (!input) return;
      const val = input.value.trim();
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
      input.value = "";
      return;
    }

    const travelSection = icon.closest(".travel");
    if (travelSection) {
      const input = travelSection.querySelector("input");
      const list = travelSection.querySelector(".highlights-list");
      if (!input || !list) return;
      const val = input.value.trim();
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
      input.value = "";
      return;
    }

    const packingSection = icon.closest(".packing-list");
    if (packingSection) {
      const input = packingSection.querySelector("input");
      if (!input) return;
      const val = input.value.trim();
      if (!val) return;
      const item = document.createElement("div");
      item.className = "packing-item";
      item.innerHTML = `
        <input class="todo-checkbox" type="checkbox" name="todo-checkbox" />
        <div class="action">
          <span>${val}</span>
          <div class="removeAct"><i class="fi fi-rr-cross"></i></div>
        </div>
      `;
      packingSection.appendChild(item);
      input.value = "";
      return;
    }
  }
    edit();
  
});

// Keydown delegation for Enter on inputs inside these sections
document.body.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const input = e.target;
  if (!input) return;
  const todoSec = input.closest(".todo-list");
  if (todoSec && input.matches('input[type="text"]')) {
    e.preventDefault();
    const icon = todoSec.querySelector("i.fi-rr-paper-plane-top");
    icon?.click();
    return;
  }
  const travelSec = input.closest(".travel");
  if (travelSec && input.matches("input")) {
    e.preventDefault();
    const icon = travelSec.querySelector("i.fi-rr-paper-plane-top");
    icon?.click();
    return;
  }
  const packSec = input.closest(".packing-list");
  if (packSec && input.matches("input")) {
    e.preventDefault();
    const icon = packSec.querySelector("i.fi-rr-paper-plane-top");
    icon?.click();
    return;
  }
  const mapSection = input.closest(".googleMap");
  if (mapSection && input.matches("input")) {
    e.preventDefault();
    const icon = mapSection.querySelector("i.fi-rr-paper-plane-top");
    icon?.click();
    return;
  }
});
