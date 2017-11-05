import Time from "./time.js";

var Timers = {
  timers: [],
  addTimer: function(timerObj) {
    Timers.timers.push(Timers.buildTimer(timerObj));
  },
  removeTimer: function(index) {
    Timers.timers.splice(index, 1);
  },
  buildTimer: function(descriptor) {
    return {
      name: descriptor.name,
      description: descriptor.description,
      alarmTime: Time.relativeToAbsolute(descriptor)
    };
  },
};

export default Timers;
