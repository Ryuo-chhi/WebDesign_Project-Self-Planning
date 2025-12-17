function initCardOverlay() {
  const cardOverlay = document.getElementById("planOverlay");
  const triggerCards = document.querySelectorAll(".card[id]");
  const newPlanButtons = document.querySelectorAll(".new-plan");
  const newPlanOverlay = document.querySelector(".newPlanOverlay");

  function openOverlay() {
    if (!cardOverlay) return;
    cardOverlay.classList.add("open");
    cardOverlay.setAttribute("aria-hidden", "false");
  }

  function hideAllOverlays() {
    if (!cardOverlay) return;
    const overlays = cardOverlay.querySelectorAll(".bigCard");
    overlays.forEach((o) => (o.style.display = "none"));
  }

  function closeOverlay() {
    if (!cardOverlay) return;
    cardOverlay.classList.remove("open");
    cardOverlay.setAttribute("aria-hidden", "true");
    hideAllOverlays();
  }

  // Initialize: hide any overlay children
  if (cardOverlay) hideAllOverlays();

  // Open overlay matching clicked card's id (search only inside the overlay container)
  triggerCards.forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("id");
      if (!id || !cardOverlay) return;
      const target = cardOverlay.querySelector(`.bigCard[id="${id}"]`);
      if (!target) return;
      hideAllOverlays();
      openOverlay();
      target.style.display = "flex";
    });
  });

  // Close buttons inside overlays
  if (cardOverlay) {
    cardOverlay.querySelectorAll(".bigCard .close").forEach((el) => {
      el.addEventListener("click", closeOverlay);
    });

    // Close when clicking on overlay background
    cardOverlay.addEventListener("mousedown", (e) => {
      if (e.target === cardOverlay) {
        closeOverlay();
      }
    });
  }

  // New plan buttons (show the newPlanOverlay)
  newPlanButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!cardOverlay) return;
      hideAllOverlays();
      openOverlay();
      if (newPlanOverlay) newPlanOverlay.style.display = "flex";
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCardOverlay);
} else {
  initCardOverlay();
}

