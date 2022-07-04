import axios from "axios";

export const getAllHackathons = async () => {
  const response = await axios.post("http://127.0.0.1:8000/contests");
  return response.data;
};

export const getHackathonbyId = async (id) => {
  const response = await axios.post('http://127.0.0.1:8000/contest/",', {
    id: id,
  });
  return response.data;
};

