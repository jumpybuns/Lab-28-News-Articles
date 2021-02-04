export const getArticle = (title) => {
  return fetch(
    `https://newsapi.org/v2/everything?${title}&apiKey=c1deae5f91454d8981da476f90b22c43`
  ).then((res) => res.json());
};
