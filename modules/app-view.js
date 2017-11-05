import GameTime from "./game-time.js";
import GameTimeView from "./game-time-view.js";
import Timers from "./timers.js";
import TimerView from "./timer-view.js";
import AddTimerView from "./add-timer-view.js";
import createElement from "./create-element.js";

const AppView = function() {
  let appView = createElement({
    type: "div",
    attrs: [
      {
        name: "className",
        value: "app-view"
      }
    ]
  });  
  appView.appendChild(AddTimerView());
  appView.appendChild(GameTimeView(GameTime));
  
  Timers.timers.forEach((timer) => {
    appView.appendChild(TimerView(timer));
  });

  return appView;
};

export default AppView;
