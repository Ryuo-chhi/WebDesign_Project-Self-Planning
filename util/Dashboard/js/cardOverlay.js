const cardOverlay = document.getElementById("planOverlay");
const baceCard = document.querySelector(".bacelona");
const baceOverlay = document.querySelector(".bacelonaOverlay");
const newPlan = document.querySelectorAll(".new-plan");
const newPlanOverlay = document.querySelector(".newPlanOverlay");
const bigcard = document.querySelectorAll(".bigCard");

function openOverlay() {
  cardOverlay.classList.add("open");
  cardOverlay.setAttribute("aria-hidden", "false");
}
function closeOverlay() {
  cardOverlay.classList.remove("open");
  cardOverlay.setAttribute("aria-hidden", "true");
}

baceCard.addEventListener("click", () => {
  openOverlay();
  baceOverlay.style.display = "flex";
});

bigcard.forEach((card) => {
  const closeBtn = card.querySelector(".planner .close");
  closeBtn.addEventListener("click", () => {
    closeOverlay();
    // baceOverlay.style.display = "none";
  });
});

cardOverlay.addEventListener("mousedown", (e) => {
  if (e.target === cardOverlay) {
    closeOverlay();
  }
});

newPlan.forEach((newCard) => {
  newCard.addEventListener("click", () => {
    openOverlay();
    newPlanOverlay.style.display = "flex";
  });
  //   closeBtn.addEventListener("click", () => {
  //     cardOverlay();
  //     newPlanOverlay.style.display = "none";
  //   });
});
