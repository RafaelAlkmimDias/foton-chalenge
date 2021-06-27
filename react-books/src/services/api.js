const myHeaders = new Headers();
myHeaders.set('Content-Type', 'application/json');
const myInit = {
  method: 'GET',
  headers: myHeaders,
  // mode: 'cors',
  cache: 'default',
};

export const SearchApi = (query = 'home', index = 0) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${index}`;
  return fetch(url, myInit).then((respose) => respose.json())
    .then((data) => data);
};

export const getData = (id) => {
  const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
  return fetch(url, myInit)
    .then((respose) => respose.json()).then((data) => data);
};

export default SearchApi;
