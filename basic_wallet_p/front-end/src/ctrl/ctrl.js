const axios = require('axios');
//import axios from 'axios';
// request blockchain data from python
const BASE_URL = 'localhost:5000';
const getChain = async () => {
  try {
    response = axios.get(`${BASE_URL}/chain`);
    chain = res.data;
    console.log(`here's the chain: ${chain}`);
    document.body.innerHTML = `<h2>${chain}</h2>`;
  } catch (error) {
    console.log(error);
  }
};

getChain();

const applyData = async () => {};
