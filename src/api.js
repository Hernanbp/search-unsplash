import axios from "axios";

const searchImages = async (term) => {
  const resp = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID hLfIjhlAtHOtOjZfMa1a_Fh5l64HmCmuNELPgv2y3gk",
    },
    params: {
      query: term,
    },
  });
  const data = resp.data.results;
  return data;
};

export default searchImages;
