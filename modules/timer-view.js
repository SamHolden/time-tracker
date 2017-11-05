import GameTime from "./game-time.js";
import createElement from "./create-element.js";

const TimerView = function(timer) {
  let className = "timer";
  
  if (timer.alarmTime <= GameTime.time) {
    className += " expired";
  }

  return createElement({
    type: "div",
    attrs: [
      {
        name: "className",
        value: className
      },
      {
        name: "innerText",
        value: timer.name
      }
    ]
  });
};

export default TimerView;
