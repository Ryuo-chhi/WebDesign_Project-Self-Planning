import { edit } from "./tableCalc.js";
const cardContainer = document.querySelector(".itinerary-grid");
const dayCard = document.querySelectorAll(".day-card ");
const newdayBtn = document.querySelector(".newDay");

function removeCard() {
  const dayCard = document.querySelectorAll(".day-card ");

  dayCard.forEach((card) => {
    card.querySelector(".removeCard").addEventListener("click", () => {
      card.remove();
    });
  });
}

newdayBtn.addEventListener("click", () => {
  const container = document.createElement("div");
  const dayCard = document.querySelectorAll(".day-card ");

  container.className = "day-card";
  container.innerHTML = `
            <div class="day-card-title">
                  <div class="day-badge edit">Day ${dayCard.length + 1}</div>
                  <div class="removeCard">
                    <i class="fi fi-rr-cross"></i>
                  </div>
                </div>

                <div class="activity-card">
                  <div class="activity-header">
                    <span class="activity-title edit">Visit A</span>
                    <div class="activity-actions">
                      <button class="action-btn">✏️</button>
                      <div class="removeAct">
                        <i class="fi fi-rr-cross"></i>
                      </div>
                    </div>
                  </div>
                  <label class="checkbox-label">
                    <input class="checkbox" type="checkbox" name="checkbox" />
                    <span class="done">Done</span>
                  </label>
                </div>

                <div class="activity-card">
                  <div class="activity-header">
                    <span class="activity-title edit">Sleep in A</span>
                    <div class="activity-actions">
                      <button class="action-btn">✏️</button>
                      <div class="removeAct">
                        <i class="fi fi-rr-cross"></i>
                      </div>
                    </div>
                  </div>
                  <label class="checkbox-label">
                    <input class="checkbox" type="checkbox" name="checkbox" />
                    <span class="done">Done</span>
                  </label>
                </div>

                <button class="new-page-btn">
                  <span>+</span>
                  <span>New page</span>
                </button>
    `;

  cardContainer.insertBefore(container, newdayBtn || null);
  edit();
  removeCard();
});

removeCard();

//Activities
// const addActivity = document.q

dayCard.forEach((card) => {
  const addActivity = card.querySelector(".new-page-btn");
  addActivity.addEventListener("click", () => {
    const newActivity = document.createElement("div");
    newActivity.className = "activity-card";
    newActivity.innerHTML = `
                  <div class="activity-header">
                    <span class="activity-title edit">Sleep in A</span>
                    <div class="activity-actions">
                      <button class="action-btn">✏️</button>
                      <div class="removeAct">
                        <i class="fi fi-rr-cross"></i>
                      </div>
                    </div>
                  </div>
                  <label class="checkbox-label">
                    <input class="checkbox" type="checkbox" name="checkbox" />
                    <span class="done">Done</span>
                  </label>
    `;
    card.insertBefore(newActivity, addActivity);

    newActivity.querySelector(".removeAct").addEventListener("click", () => {
      newActivity.remove();
    });
    edit();
  });
});
