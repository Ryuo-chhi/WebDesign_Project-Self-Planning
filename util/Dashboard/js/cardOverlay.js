function initCardOverlay() {
  const cardOverlay = document.getElementById("planOverlay");
  const rootContainer =
    document.querySelector(".container-box") || document.body;
  const newPlanButtons = () => document.querySelectorAll(".new-plan");

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

  // Use event delegation so dynamically added .card elements work
  rootContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".card[id]");
    if (!card) return;
    const id = card.getAttribute("id");
    if (!id || !cardOverlay) return;
    const target = cardOverlay.querySelector(`.bigCard[id="${id}"]`);
    if (!target) return;
    hideAllOverlays();
    openOverlay();
    target.style.display = "flex";
  });

  // Close buttons inside overlays
  if (cardOverlay) {
    // Close buttons inside overlays (use delegation so newly-added overlays are handled)
    cardOverlay.addEventListener("click", (e) => {
      if (e.target.closest(".bigCard .close")) {
        closeOverlay();
      }
    });

    // Close when clicking on overlay background
    cardOverlay.addEventListener("mousedown", (e) => {
      if (e.target === cardOverlay) {
        closeOverlay();
      }
    });
  }

  // New plan buttons (show the newPlanOverlay)
  // New plan buttons: re-query the overlay at click time so dynamically appended
  // newPlan overlays are found.
  const bindNewPlan = () => {
    newPlanButtons().forEach((btn) => {
      btn.removeEventListener("click", btn._newPlanHandler);
      const handler = () => {
        if (!cardOverlay) return;
        hideAllOverlays();
        openOverlay();
        const newPlanOverlayEl = cardOverlay.querySelector(
          ".bigCard.newPlanOverlay"
        );
        if (newPlanOverlayEl) newPlanOverlayEl.style.display = "flex";
      };
      btn._newPlanHandler = handler;
      btn.addEventListener("click", handler);
    });
  };

  // Initial bind and also observe DOM mutations to re-bind if new buttons are added
  bindNewPlan();
  const observer = new MutationObserver(bindNewPlan);
  observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCardOverlay);
} else {
  initCardOverlay();
}
