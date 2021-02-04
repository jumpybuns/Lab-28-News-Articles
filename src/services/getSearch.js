export const getSearch = (search) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=c1deae5f91454d8981da476f90b22c43`
  )
    .then((res) => res.json())
    .then((json) => json.articles);
};
