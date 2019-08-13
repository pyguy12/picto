import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Accept-Version': 'v1',
    Authorization:
      'Client-ID fa683c2f1e2af1085687d7544e3806c0970b12aeaebf3b3e322ce59da9967a8e'
  }
});
