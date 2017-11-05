var GameTime = {
  time: 1509901265087,
  factor: 1,
  ticking: true,
  update: function() {
    if (GameTime.ticking) {
      GameTime.time = Time.mod(GameTime.time, Time.minute, GameTime.factor);
      return true;
    }
    return false;
  }
};

