export const getArticles = () => {
  return fetch(
    `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2fcc723224a647aa9d6a95beb944cd0d`
  )
    .then((res) => res.json())
    .then((json) => json.articles);
};
