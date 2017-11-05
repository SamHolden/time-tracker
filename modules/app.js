import createElement from "./create-element.js";
import GameTime from "./game-time.js";
import "./ticker.js";

const App = {
  init: function() {
    document.body.appendChild(App.domNode);
    App.addEventListener("tick", App.update);
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
      // update view
      console.log("updated view");
      return true;
    }
    console.log("did not update view");
    return false;
  },
  domReferences: {},
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
