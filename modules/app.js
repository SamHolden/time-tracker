const App = {
  update: function() {
    if (GameTime.update()) {
      // update view
      console.log("updated view");
      return true;
    }
    console.log("did not update view");
    return false;
  }
};

document.body.addEventListener("tick", App.update);
