import './render.js'
import './infoSection.js'
import './newPlan.js'

import { initCardOverlay } from "./cardOverlay.js";
import { initItineraryLogic } from "./itineraryCard.js";
import { init as initTableCalc} from "./tableCalc.js";

document.addEventListener("DOMContentLoaded", () => {
  initCardOverlay();
  initItineraryLogic();
  initTableCalc();
});