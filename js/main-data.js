const mainData = () => {
  fetch('https://anime-fd498-default-rtdb.firebaseio.com/anime.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
}

mainData();