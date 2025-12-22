import { edit } from "./tableCalc.js";

export function initItineraryLogic() {
  document.addEventListener("click", (e) => {
    // 1. Handle "New Day" button
    if (e.target.closest(".newDay")) {
      const btn = e.target.closest(".newDay");
      const grid = btn.closest(".itinerary-grid");
      const dayCount = grid.querySelectorAll(".day-card").length;
      
      const newDay = document.createElement("div");
      newDay.className = "day-card";
      newDay.innerHTML = `
        <div class="day-card-title">
          <div class="day-badge edit">Day ${dayCount + 1}</div>
          <div class="removeCard"><i class="fi fi-rr-cross"></i></div>
        </div>
        <button class="new-page-btn"><span>+</span><span>New activity</span></button>
      `;
      grid.insertBefore(newDay, btn);
      edit();
    }

    // 2. Handle "New Activity" button
    if (e.target.closest(".new-page-btn")) {
      const btn = e.target.closest(".new-page-btn");
      const dayCard = btn.closest(".day-card");
      const newAct = document.createElement("div");
      newAct.className = "activity-card";
      newAct.innerHTML = `
        <div class="activity-header">
          <span class="activity-title edit">New Activity</span>
          <div class="removeAct"><i class="fi fi-rr-cross"></i></div>
        </div>
      `;
      dayCard.insertBefore(newAct, btn);
      edit();
    }

    // 3. Handle Deletions (Cards and Activities)
    if (e.target.closest(".removeCard")) e.target.closest(".day-card").remove();
    if (e.target.closest(".removeAct")) e.target.closest(".activity-card")?.remove() || e.target.closest(".info-callout")?.remove();
  });
}