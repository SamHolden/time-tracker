import createElement from "./create-element.js";

const GameTimeView = function(gameTime) {
  let className = "game-time";
  let innerText = new Date(gameTime.time);

  return createElement({
    type: "div",
    attrs: [
      {
        name: "className",
        value: className
      },
      {
        name: "innerText",
        value: innerText
      }
    ]
  });
};

export default GameTimeView;
