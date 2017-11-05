import Time from "./time.js";
import App from "./app.js";

var Timers = {
  timers: [],
  addTimer: function(timerObj) {
    Timers.timers.push(Timers.buildTimer(timerObj));
    App.update();
  },
  removeTimer: function(index) {
    Timers.timers.splice(index, 1);
  },
  buildTimer: function(descriptor) {
    return {
      name: descriptor.name,
      description: descriptor.description,
      alarmTime: Time.relativeToAbsolute(Date.now(), descriptor)
    };
  },
};

export default Timers;
