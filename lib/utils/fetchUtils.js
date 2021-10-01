import { fetch } from 'node-fetch';



const URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/';

const fetchURL = async () => {
  const trueURL = await fetch(URL);
  return trueURL;
};



module.exports = { fetchURL, URL };
