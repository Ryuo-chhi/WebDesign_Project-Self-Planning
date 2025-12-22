import './render.js'
import './cardOverlay.js'
import './tableCalc.js'
import './itineraryCard.js'
import './infoSection.js'
import './newPlan.js'

import { initCardOverlay } from "./cardOverlay.js";
import { initItineraryLogic } from "./itineraryCard.js";
import { edit } from "./tableCalc.js";

document.addEventListener("DOMContentLoaded", () => {
  initCardOverlay();
  initItineraryLogic();
  edit();
});