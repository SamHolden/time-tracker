const Time = {
  minute: 60000,
  hour: 60000 * 60,
  mod: function(time, mod, factor) {
    return new Number(time + (mod * factor));
  },
  relativeToAbsolute: function(startTime, relativeTime) {
    let absoluteTime = Number(new Date(startTime));
    return absoluteTime + Time.toMilliseconds(relativeTime);
  },
  toMilliseconds: function(timeObj) {
    let milliseconds = 0;
    Object.keys(timeObj).forEach((denomination) => {
      let change = timeObj[denomination] * Time[denomination];
      milliseconds = milliseconds + change;
    });
    return milliseconds;
  }
};

export default Time;
