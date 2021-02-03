export const getArticles = () => {
  return fetch(
    `https://newsapi.org/v2/everything&apiKey=${process.env.NEWS_API_KEY}`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};
