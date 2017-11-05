var tick = function() {
  document.body.dispatchEvent(new CustomEvent("tick"));
};
//window.setInterval(tick, Time.minute);
window.setInterval(tick, 6000);
