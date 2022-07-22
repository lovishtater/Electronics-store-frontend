import { API } from "../../backend";

export const getProducts = () => {
  return fetch(`${API}/products`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getBestSellers = () => {
  return fetch(`${API}/products/bestSellers`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const searchProducts = async (text) => {
  try {
    const response = await fetch(`${API}/products/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ search: text })
      });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
}


