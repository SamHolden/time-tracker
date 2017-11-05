import createElement from "./create-element.js";
import GameTime from "./game-time.js";
import AppView from "./app-view.js";
import "./ticker.js";

const App = {
  init: function() {
    App.domNode.appendChild(AppView());
    App.addEventListener("tick", App.update);
    document.body.appendChild(App.domNode);
  },
  domNode: createElement({
    type: "div",
    attrs: [
      {
        name: "id",
        value: "app"
      }
    ]
  }),
  update: function() {
    if (GameTime.update()) {
      App.render();
      return true;
    }
    return false;
  },
  render: function() {
    App.domNode.removeChild(App.domNode.firstChild);
    App.domNode.appendChild(AppView());
  },
  addEventListener: function(eventName, handler) {
    App.domNode.addEventListener(eventName, handler);
  },
  removeEventListener: function(eventName, handler) {
    App.domNode.addEventListener(eventName, handler);
  },
  dispatchEvent: function(event) {
    App.domNode.dispatchEvent(event);
  }
};

App.init();

export default App; 
