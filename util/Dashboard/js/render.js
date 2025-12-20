import { travelPlans } from "./data/data.js";

function renderCardOverlay() {
  const planOverlay = document.getElementById("planOverlay");
  let id = 0;
  planOverlay.innerHTML = travelPlans
    .map((plan) => {
      id++;
      plan.id = id;
      return `
      <div class="bigCard" id ="${id}">
        <div class="close">
            <i class="fi fi-rr-cross"></i>
          </div>
        <div class="hero-img">
          <img
            src="${plan.heroImageUrl}"
            alt="${plan.title}"
          />
        </div>
        <main class="main-content">
          <section class="title-section">
            <h1 class="title">${plan.title}</h1>
            <hr class="divider" />

            <div class="meta-info">
              <div class="meta-item">
                <span class="meta-icon"
                  ><img
                    src="https://cdn-icons-png.flaticon.com/128/3652/3652267.png"
                    alt="calendar icon"
                /></span>
                <span class="meta-label">Travel Date</span>
                <span class="meta-value">${plan.meta.travelDate}</span>
              </div>
              <div class="meta-item">
                <span class="meta-icon"
                  ><img
                    src="https://cdn-icons-png.flaticon.com/128/17438/17438463.png"
                    alt="status icon"
                /></span>
                <span class="meta-label">Travel Status</span>
                <span class="meta-value">${plan.meta.travelStatus}</span>
              </div>
              <div class="meta-item">
                <span class="meta-icon"
                  ><img
                    src="https://cdn-icons-png.flaticon.com/128/3308/3308315.png"
                    alt="layer icon"
                /></span>
                <span class="meta-label">Travel Type</span>
                <span class="meta-value">${plan.meta.travelType}</span>
              </div>
            </div>
          </section>
          <hr class="divider" />

          <section>
            <h2 class="section-header">🛣️ Itinerary</h2>
            <hr class="divider" />
            <div class="itinerary-grid">
              <div class="day-card day-1">
                <div class="day-badge">Day 1</div>

                <div class="activity-card">
                  <div class="activity-header">
                    <span class="activity-title edit">Visit A</span>
                    <div class="activity-actions">
                      <button class="action-btn">✏️</button>
                      <button class="action-btn">⋮</button>
                    </div>
                  </div>
                  <label class="checkbox-label">
                    <input class="checkbox" type="checkbox" name="checkbox" />
                    <span>Done</span>
                  </label>
                </div>

                <div class="activity-card">
                  <div class="activity-header">
                    <span class="activity-title edit">Sleep in A</span>
                    <div class="activity-actions">
                      <button class="action-btn">✏️</button>
                      <button class="action-btn">⋮</button>
                    </div>
                  </div>
                  <label class="checkbox-label">
                    <input class="checkbox" type="checkbox" name="checkbox" />
                    <span>Done</span>
                  </label>
                </div>

                <button class="new-page-btn">
                  <span>+</span>
                  <span>New page</span>
                </button>
              </div>

              <div class="day-card day-2">
                <div class="day-badge">Day 2</div>

                <div class="activity-card">
                  <div class="activity-header">
                    <span class="activity-title edit">Visit A</span>
                    <div class="activity-actions">
                      <button class="action-btn">✏️</button>
                      <button class="action-btn">⋮</button>
                    </div>
                  </div>
                  <label class="checkbox-label">
                    <input class="checkbox" type="checkbox" name="checkbox" />
                    <span>Done</span>
                  </label>
                </div>

                <div class="activity-card">
                  <div class="activity-header">
                    <span class="activity-title edit">Sleep in Sokha Hotel</span>
                    <div class="activity-actions">
                      <button class="action-btn">✏️</button>
                      <button class="action-btn">⋮</button>
                    </div>
                  </div>
                  <label class="checkbox-label">
                    <input class="checkbox" type="checkbox" name="checkbox" />
                    <span>Done</span>
                  </label>
                </div>

                <button class="new-page-btn">
                  <span>+</span>
                  <span>New page</span>
                </button>
              </div>

              <div class="day-card day-3">
                <div class="day-badge">Day 3</div>

                <div class="activity-card">
                  <div class="activity-header">
                    <span class="activity-title edit">Visit A</span>
                    <div class="activity-actions">
                      <button class="action-btn">✏️</button>
                      <button class="action-btn">⋮</button>
                    </div>
                  </div>
                  <label class="checkbox-label">
                    <input class="checkbox" type="checkbox" name="checkbox" />
                    <span>Done</span>
                  </label>
                </div>

                <div class="activity-card">
                  <div class="activity-header">
                    <span class="activity-title edit">Sleep in A</span>
                    <div class="activity-actions">
                      <button class="action-btn">✏️</button>
                      <button class="action-btn">⋮</button>
                    </div>
                  </div>
                  <label class="checkbox-label">
                    <input class="checkbox" type="checkbox" name="checkbox" />
                    <span>Done</span>
                  </label>
                </div>

                <button class="new-page-btn">
                  <span>+</span>
                  <span>New page</span>
                </button>
              </div>

              <div class="day-card day-3">
                <div class="day-badge">Day 3</div>

                <div class="activity-card">
                  <div class="activity-header">
                    <span class="activity-title edit">Visit A</span>
                    <div class="activity-actions">
                      <button class="action-btn">✏️</button>
                      <button class="action-btn">⋮</button>
                    </div>
                  </div>
                  <label class="checkbox-label">
                    <input class="checkbox" type="checkbox" name="checkbox" />
                    <span>Done</span>
                  </label>
                </div>

                <div class="activity-card">
                  <div class="activity-header">
                    <span class="activity-title edit">Sleep in A</span>
                    <div class="activity-actions">
                      <button class="action-btn">✏️</button>
                      <button class="action-btn">⋮</button>
                    </div>
                  </div>
                  <label class="checkbox-label">
                    <input class="checkbox" type="checkbox" name="checkbox" />
                    <span>Done</span>
                  </label>
                </div>

                <button class="new-page-btn">
                  <span>+</span>
                  <span>New page</span>
                </button>
              </div>
            </div>
          </section>

          <div class="grid-section">
            <section class="info-section booking">
              <h2 class="section-header">✈️ Booking Details</h2>
              <hr class="divider" />

              <div class="info-callout">
                <div class="info-callout-title">
                  🛫 Departure: KEF Airport - Jan 4, 2025
                </div>
                <div class="info-callout-text">
                  🛫 Departure: KEF Airport - Jan 4, 2025
                </div>
              </div>

              <div class="info-callout">
                <div class="info-callout-text">
                  🛬 Arrival: KEF Airport - Jan 24, 2025
                </div>
              </div>
            </section>

            <section class="info-section transport">
              <h2 class="section-header">🚗 Transport Details</h2>
              <hr class="divider" />

              <div class="info-callout">
                <div class="info-callout-text">🚘 Rental Car: 4x4 SUV</div>
              </div>

              <div class="info-callout">
                <div class="info-callout-text">🚘 Rental Car: 4x4 SUV</div>
              </div>
            </section>

            <section class="info-section span-full googleMap">
              <h2 class="section-header">🗺️ Google Maps</h2>
              <hr class="divider" />

              <div class="info-callout">
                <div class="info-callout-text">Link to route planning</div>
              </div>
            </section>

            <section class="todo-list">
              <h2 class="section-header">🎯 To Do's</h2>
              <hr class="divider" />

              <div class="callout-note">
                <input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Callout text..."
                />
              </div>

              <div class="todo-item">
                <div class="todo-checkbox"></div>
                <span>Book flights</span>
              </div>
              <div class="todo-item">
                <div class="todo-checkbox"></div>
                <span>Book rental car</span>
              </div>
              <div class="todo-item">
                <div class="todo-checkbox"></div>
                <span>Book accommodations</span>
              </div>
              <div class="todo-item">
                <div class="todo-checkbox"></div>
                <span>Research activities</span>
              </div>
              <div class="todo-item">
                <div class="todo-checkbox"></div>
                <span>Pack winter clothes</span>
              </div>
            </section>

            <section class="travel">
              <h2 class="section-header">⭐ Travel Highlights</h2>
              <hr class="divider" />
              <div class="callout-note">
                <input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Callout text..."
                />
              </div>
              <ul class="highlights-list">
                <li class="highlight-item">
                  <span class="bullet">•</span>
                  <span>Northern Lights viewing</span>
                </li>
                <li class="highlight-item">
                  <span class="bullet">•</span>
                  <span>Blue Lagoon geothermal spa</span>
                </li>
                <li class="highlight-item">
                  <span class="bullet">•</span>
                  <span>Glacier hiking</span>
                </li>
              </ul>
            </section>

            <section class="packing-list">
              <h2 class="section-header">🎒 Packing List</h2>
              <hr class="divider" />
              <div class="callout-note">
                <input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Callout text..."
                />
              </div>
              <div class="packing-item">
                <div class="todo-checkbox"></div>
                <span>Passport & documents</span>
              </div>
              <div class="packing-item">
                <div class="todo-checkbox"></div>
                <span>Winter jacket</span>
              </div>
              <div class="packing-item">
                <div class="todo-checkbox"></div>
                <span>Waterproof boots</span>
              </div>
              <div class="packing-item">
                <div class="todo-checkbox"></div>
                <span>Camera & charger</span>
              </div>
            </section>

            <section class="travelCost">
              <h2 class="section-header">💸 Travel Costs</h2>
              <hr class="divider" />
              <div class="callout-note">
                <input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Callout text..."
                />
              </div>
              <table class="cost-table">
                <thead>
                  <tr>
                    <th>Cost Name</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Plane Tickets</td>
                    <td>$800</td>
                  </tr>
                  <tr>
                    <td>Car Rental</td>
                    <td>$600</td>
                  </tr>
                  <tr>
                    <td>Hotels</td>
                    <td>$1,200</td>
                  </tr>
                  <tr>
                    <td>Food Budget</td>
                    <td>$500</td>
                  </tr>
                  <tr>
                    <td>Activities</td>
                    <td>$400</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>$3,500</td>
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
  const newPlanBtn = visitedContainer.querySelector(".new-plan");
  let id = 0;

  travelPlans.forEach((card) => {
    id++;

    // Create the wrapper div
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.id = id;

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
        <div class="travel-type citytrip">Citytrip</div>
      </div>
    `;

    // Append each card
    visitedContainer.insertBefore(newCard, newPlanBtn || null);
  });
}
generateCard();
renderCardOverlay();

// Example of how you would use it:
// document.getElementById('planOverlay').innerHTML = plannerInnerHtml;
// console.log(plannerInnerHtml);
