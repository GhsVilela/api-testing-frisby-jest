module.exports = {
  getRandomNumber: function (minimum, maximum) {
      return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  },
  getRandomValuesFromArray: function (items) {
      //Example Array("FAILED", "SUCCEEDED", "PROCESSING")
      return items[Math.floor(Math.random() * items.length)];
  },
}
