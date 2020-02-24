import axios from "axios";

const HACKERNEWS_URL = "https://hacker-news.firebaseio.com/v0";

// This function is used to grab the main sections from HN (news, new, past, comments, ask, show, & jobs)
const getData = async endpoint => {
  const ids = await axios.get(
    `${HACKERNEWS_URL}/${endpoint}.json?print=pretty&orderBy="$key"&limitToFirst=30`
  );

  const promises = ids.data.map(id => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  });

  const data = await Promise.all(promises);

  return data;
};

export default getData;
