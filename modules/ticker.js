import Time from "./time.js";
import App from "./app.js";

var tick = function() {
  App.dispatchEvent(new CustomEvent("tick"));
};

window.setInterval(tick, Time.minute);
