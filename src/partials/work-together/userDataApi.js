import axios from 'axios';

export const sendUserDataApi = async ({ email, comment }) => {
  const URL = 'https://portfolio-js.b.goit.study/api/requests';

  const { data } = await axios.post(URL, { email, comment });
  return data;
};
