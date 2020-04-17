const axios = require('axios');

// request blockchain data from python
axios
  .get('localhost:5000/chain')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
  })
  .then(function () {
    // always executed
  });
