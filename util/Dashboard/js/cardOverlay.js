export function initCardOverlay() {
  const cardOverlay = document.getElementById("planOverlay");
  // const newPlanOverlay = document.querySelector(".newPlanOverlay");

  // We use delegation on the body so we don't have to re-bind every time a card is added
  document.body.addEventListener("click", (e) => {
    const card = e.target.closest(".card[id]");
    if (card) {
      const id = card.getAttribute("id");
      const target = cardOverlay.querySelector(`.bigCard[id="${id}"]`);
      if (target) {
        cardOverlay.classList.add("open");
        cardOverlay.querySelectorAll(".bigCard").forEach(o => o.style.display = "none");
        target.style.display = "flex";
      }
    }

    // Close buttons
    if (e.target.closest(".bigCard .close")) {
      cardOverlay.classList.remove("open");
    }
  });

  // Background click to close
  cardOverlay?.addEventListener("mousedown", (e) => {
    if (e.target === cardOverlay) cardOverlay.classList.remove("open");
  });
}