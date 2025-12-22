import { visitedPlans } from "./data/data.js";

// Helper function to convert date format "Month Day, Year" to "YYYY-MM-DD"
function convertToDateInput(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr.trim());
  if (isNaN(date)) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function renderCardOverlay() {
  const planOverlay = document.getElementById("planOverlay");
  if (!planOverlay) return;
  let id = 0;
  planOverlay.innerHTML = visitedPlans
    .map((plan) => {
      id++;
      plan.id = `${plan.meta.travelStatus}-${plan.id}`;
      console.log(plan.id);
      return `
        <div class="bigCard" id = "${plan.id}">
        <div class="close">
          <i class="fi fi-rr-cross"></i>
        </div>
        <!-- Hero Image -->
        <div class="hero-img">
          <img src="${plan.heroImageUrl}" alt="new-plan" />
        </div>
        <!-- Main Content -->
        <main class="main-content">
          <!-- Title Section -->
          <section class="title-section">
            <h1 class="title edit">${plan.title}</h1>
            <hr class="divider" />

            <div class="meta-info">
              <div class="meta-item">
                <span class="meta-icon"
                  ><img
                    src="https://cdn-icons-png.flaticon.com/128/3652/3652267.png"
                    alt="calendar icon"
                /></span>
                <span class="meta-label">Travel Date</span>
                <input type="date" value="${convertToDateInput(plan.meta.travelDate.split(' - ')[0])}" />
                <span class="meta-value">-</span>
                <input type="date" value="${convertToDateInput(plan.meta.travelDate.split(' - ')[1])}" />
              </div>
              <div class="meta-item">
                <span class="meta-icon"
                  ><img
                    src="https://cdn-icons-png.flaticon.com/128/17438/17438463.png"
                    alt="status icon"
                /></span>
                <span class="meta-label">Travel Status</span>
                <select name="travelStatus" class="travelStatus" value="${plan.meta.travelStatus}">
                  <option value="empty" disabled hidden>Empty</option>
                  <option value="Planning">Planning</option>
                  <option value="To plan">To plan</option>
                  <option value="Visited">Visited</option>
                </select>
              </div>
              <div class="meta-item">
                <span class="meta-icon"
                  ><img
                    src="https://cdn-icons-png.flaticon.com/128/3308/3308315.png"
                    alt="layer icon"
                /></span>
                <span class="meta-label">Travel Type</span>
                <select name="travelType" class="travelType" value="${plan.meta.travelType.toLowerCase()}">
                  <option value="empty" disabled hidden>Empty</option>
                  <option value="citytrip">Citytrip</option>
                  <option value="roadtrip">Roadtrip</option>
                  <option value="beach">Beach</option>
                  <option value="festival">Festival</option>
                  <option value="camping">Camping</option>
                  <option value="hiking">Hiking</option>
                </select>
              </div>
            </div>
          </section>
          <hr class="divider" />

          <!-- Itinerary Section -->
          <section>
            <h2 class="section-header">🛣️ Itinerary</h2>
            <hr class="divider" />
            <div class="itinerary-grid">
              <!-- Day 1 -->
              <div class="day-card day-1">
                <div class="day-card-title">
                  <div class="day-badge edit">Day 1</div>
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
              </div>

              <!-- Day 2 -->
              <div class="day-card day-2">
                <div class="day-card-title">
                  <div class="day-badge edit">Day 2</div>
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
              </div>

              <!-- Day 3 -->
              <div class="day-card day-3">
                <div class="day-card-title">
                  <div class="day-badge edit">Day 3</div>
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
              </div>

              <div class="newDay">
                <span>+ New day</span>
              </div>
            </div>
          </section>

          <div class="grid-section">
            <!-- Booking Details -->
            <section class="info-section booking">
              <h2 class="section-header">✈️ Booking Details</h2>
              <hr class="divider" />
              <div class="new-booking-btn new">
                <span>+ New</span>
              </div>
              <div class="info-callout">
                <div class="info-callout-title edit">
                  🛫 Departure: Location - Date
                </div>
                <div class="removeAct">
                  <i class="fi fi-rr-cross"></i>
                </div>
              </div>

              <div class="info-callout">
                <div class="info-callout-text edit">
                  🛬 Arrival: Location - Date
                </div>
                <div class="removeAct">
                  <i class="fi fi-rr-cross"></i>
                </div>
              </div>
            </section>

            <!-- Transport Details -->
            <section class="info-section">
              <h2 class="section-header">🚗 Transport Details</h2>
              <hr class="divider" />
              <div class="new-transport-btn new">
                <span>+ New</span>
              </div>
              <div class="info-callout">
                <div class="info-callout-text edit">🚘 Rental Car: Brand</div>
                <div class="removeAct">
                  <i class="fi fi-rr-cross"></i>
                </div>
              </div>

              <div class="info-callout">
                <div class="info-callout-text edit">🚘 Rental Car: Type</div>
                <div class="removeAct">
                  <i class="fi fi-rr-cross"></i>
                </div>
              </div>
            </section>

            <!-- Google Maps -->
            <section class="info-section googleMap">
              <h2 class="section-header">🗺️ Google Maps</h2>
              <hr class="divider" />
              <div class="new-map-btn new">
                <span>+ New</span>
              </div>
              <div class="info-callout">
                <div class="info-callout-text edit">Link to route planning</div>
                <div class="removeAct">
                  <i class="fi fi-rr-cross"></i>
                </div>
              </div>
            </section>

            <!-- To Do's -->
            <section class="todo-list">
              <h2 class="section-header">🎯 To Do's</h2>
              <hr class="divider" />

              <div class="callout-note" id="todo-input">
                <input type="text" placeholder="Callout text..." />
                <i class="fi fi-rr-paper-plane-top"></i>
              </div>

              <div class="todo-item">
                <input
                  class="todo-checkbox"
                  type="checkbox"
                  name="todo-checkbox"
                />
                <div class="action">
                  <span>Book flights</span>

                  <div class="removeAct">
                    <i class="fi fi-rr-cross"></i>
                  </div>
                </div>
              </div>
              <div class="todo-item">
                <input
                  class="todo-checkbox"
                  type="checkbox"
                  name="todo-checkbox"
                />
                <div class="action">
                  <span>Book rental car</span>

                  <div class="removeAct">
                    <i class="fi fi-rr-cross"></i>
                  </div>
                </div>
              </div>
              <div class="todo-item">
                <input
                  class="todo-checkbox"
                  type="checkbox"
                  name="todo-checkbox"
                />
                <div class="action">
                  <span>Book accommodations</span>
                  <div class="removeAct">
                    <i class="fi fi-rr-cross"></i>
                  </div>
                </div>
              </div>
              <div class="todo-item">
                <input
                  class="todo-checkbox"
                  type="checkbox"
                  name="todo-checkbox"
                />
                <div class="action">
                  <span>Research activities</span>
                  <div class="removeAct">
                    <i class="fi fi-rr-cross"></i>
                  </div>
                </div>
              </div>
              <div class="todo-item">
                <input
                  class="todo-checkbox"
                  type="checkbox"
                  name="todo-checkbox"
                />
                <div class="action">
                  <span>Pack winter clothes</span>
                  <div class="removeAct">
                    <i class="fi fi-rr-cross"></i>
                  </div>
                </div>
              </div>
            </section>

            <!-- Travel Highlights -->
            <section class="travel">
              <h2 class="section-header">⭐ Travel Highlights</h2>
              <hr class="divider" />
              <div class="callout-note" id="travel-input">
                <input type="text" placeholder="Callout text..." />
                <i class="fi fi-rr-paper-plane-top"></i>
              </div>
              <ul class="highlights-list">
                <li class="highlight-item edit">
                  <div class="action">
                    <span class="edit">Empty</span>
                    <div class="removeAct">
                      <i class="fi fi-rr-cross"></i>
                    </div>
                  </div>
                </li>
                <li class="highlight-item edit">
                  <div class="action">
                    <span class="edit">Empty</span>
                    <div class="removeAct">
                      <i class="fi fi-rr-cross"></i>
                    </div>
                  </div>
                </li>
                <li class="highlight-item edit">
                  <div class="action">
                    <span class="edit">Empty</span>
                    <div class="removeAct">
                      <i class="fi fi-rr-cross"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </section>

            <!-- Packing List -->
            <section class="packing-list" id="packing-input">
              <h2 class="section-header">🎒 Packing List</h2>
              <hr class="divider" />

              <div class="callout-note">
                <input type="text" placeholder="Callout text..." />
                <i class="fi fi-rr-paper-plane-top"></i>
              </div>

              <div class="packing-item">
                <input
                  class="todo-checkbox"
                  type="checkbox"
                  name="todo-checkbox"
                />
                <div class="action">
                  <span>Passport & documents</span>

                  <div class="removeAct">
                    <i class="fi fi-rr-cross"></i>
                  </div>
                </div>
              </div>
              <div class="packing-item">
                <input
                  class="todo-checkbox"
                  type="checkbox"
                  name="todo-checkbox"
                />
                <div class="action">
                  <span>Winter jacket</span>

                  <div class="removeAct">
                    <i class="fi fi-rr-cross"></i>
                  </div>
                </div>
              </div>
              <div class="packing-item">
                <input
                  class="todo-checkbox"
                  type="checkbox"
                  name="todo-checkbox"
                />
                <div class="action">
                  <span>Waterproof boots</span>

                  <div class="removeAct">
                    <i class="fi fi-rr-cross"></i>
                  </div>
                </div>
              </div>
              <div class="packing-item">
                <input
                  class="todo-checkbox"
                  type="checkbox"
                  name="todo-checkbox"
                />
                <div class="action">
                  <span>Camera & charger</span>

                  <div class="removeAct">
                    <i class="fi fi-rr-cross"></i>
                  </div>
                </div>
              </div>
            </section>

            <!-- Travel Costs -->
            <section class="travelCost">
              <h2 class="section-header">💸 Travel Costs</h2>
              <hr class="divider" />
              <table class="cost-table">
                <thead>
                  <tr>
                    <th>Cost Name</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody id="costContainer">
                  <tr>
                    <td class="edit">Plane Tickets</td>
                    <td class="cost">
                      <div class="edit amount-money">$800</div>
                      <div class="remove">
                        <i class="fi fi-rr-cross"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="edit">Car Rental</td>
                    <td class="cost">
                      <div class="edit amount-money">$800</div>
                      <div class="remove">
                        <i class="fi fi-rr-cross"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="edit">Hotels</td>
                    <td class="cost">
                      <div class="edit amount-money">$1200</div>
                      <div class="remove">
                        <i class="fi fi-rr-cross"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="edit">Food Budget</td>
                    <td class="cost">
                      <div class="edit amount-money">$400</div>
                      <div class="remove">
                        <i class="fi fi-rr-cross"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="edit">Activities</td>
                    <td class="cost">
                      <div class="edit amount-money">$800</div>
                      <div class="remove">
                        <i class="fi fi-rr-cross"></i>
                      </div>
                    </td>
                  </tr>
                  <tr id="totalCell">
                    <td>Total</td>
                    <td class="total-amount"></td>
                  </tr>
                  <tr>
                    <td
                      class="addCost"
                      style="font-size: 1rem; cursor: pointer"
                    >
                      + New
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>
        `;
    })
    .join("");
}

function generateCard() {
  const visitedContainer = document.getElementById("visited");
  if (!visitedContainer) return; // check first

  const newPlanBtn = visitedContainer.querySelector(".new-plan");
  if (!newPlanBtn) return; // then check button

  let id = 0;

  visitedPlans.forEach((card) => {
    id++;

    // Create the wrapper div
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.id = `${card.meta.travelStatus}-${card.id}`;

    // Add inner HTML
    newCard.innerHTML = `
      <div class="img">
        <img
          src="${card.heroImageUrl}"
          alt="${card.title}"
        />
      </div>
      <div class="info">
        <span>🏙 ${card.title}</span>
        <div class="travel-type ${card.meta.travelType}">${card.meta.travelType}</div>
      </div>
    `;

    // Append each card
    visitedContainer.insertBefore(newCard, newPlanBtn || null);
  });
}
generateCard();
renderCardOverlay();

// Set select values after rendering
function setSelectValues() {
  visitedPlans.forEach((plan) => {
    const bigCard = document.getElementById(`${plan.meta.travelStatus}-${plan.id}`);
    if (bigCard) {
      const statusSelect = bigCard.querySelector('.travelStatus');
      const typeSelect = bigCard.querySelector('.travelType');

      if (statusSelect) {
        statusSelect.value = plan.meta.travelStatus;
      }
      if (typeSelect) {
        typeSelect.value = plan.meta.travelType.toLowerCase();
      }
    }
  });
}

setSelectValues();

// Example of how you would use it:
// document.getElementById('planOverlay').innerHTML = plannerInnerHtml;
// console.log(plannerInnerHtml);
