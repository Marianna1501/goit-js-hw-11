import axios from 'axios';
const KEY = '30379570-4bd802e6747235a0c8da8a029';
const URL = `https://pixabay.com/api/?key=${KEY}&q=`;
const options = {
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: '40',
  },
};
export const fetchImages = async (inputValue, pageNr) =>
  await axios
    .get(`${URL}${inputValue}&page=${pageNr}`, options)
    .then(response => {
      return response.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
