const Storage = {
  set: function(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return key;
  },
  get: function(key) {
    return JSON.parse(localStorage.getItem(key) || {});
  }
};

export default Storage;
