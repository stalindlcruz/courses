const url = "https://jsonplaceholder.typicode.com/todos/";
fetch(url, {
  method: "POST", // PUT, PATCH, DELETE, GET -> Valor por defecto que tiene la función de fetch.
  body: JSON.stringify({ tittle: "Hola Mundo!" }),
  headers: {
    "Content-Type": "application/json",
    Authorization: "api key",
  },
  cache: "no-cache", // default, reload, force-cache, only-if-cahed
})
  .then((response) => {
    if (response.ok) {
      return response.json();
      //   return response.text();
    }
    return Promise.reject(response.status);
  })
  .then((data) => console.log(data))
  .catch((message) => console.log({ message }));
