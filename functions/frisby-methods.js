module.exports = {
  get: function (baseUrl, endpoint, frisby) {
    return new Promise((resolve, reject) => {
      frisby.get(baseUrl + endpoint)
      .then(function (res) {
        resolve(res);
      }).catch((err)=>{reject(err)});
    });
  }
}
