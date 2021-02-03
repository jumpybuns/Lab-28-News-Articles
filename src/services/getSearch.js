export const getSearch = () => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${search.params}&apiKey=${process.env.NEWS_API_KEY}`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};
