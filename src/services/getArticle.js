export const getArticle = (title) => {
  return fetch(
    `https://newsapi.org/v2/everything?${title}&apiKey=${process.env.NEWS_API_KEY}`
  ).then((res) => res.json());
};
