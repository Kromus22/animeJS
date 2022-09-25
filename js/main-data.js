const mainData = () => {

  const renderAnimeList = (arr, genres) => {

  }


  const renderTopAnime = (arr) => {

    const wrapperTop = document.querySelector('.filter__gallery');

    wrapperTop.innerHTML = '';

    arr.forEach((item) => {
      wrapperTop.insertAdjacentHTML('afterbegin', `
      <div class="product__sidebar__view__item set-bg mix" data-setbg="${item.image}">
         <div class="ep">${item.rating} / 10</div>
          <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
          <h5><a href="/anime-details.html">${item.title}</a></h5>
      </div>
      `)
    })

    wrapperTop.querySelectorAll('.set-bg').forEach((elem) => {

      elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
    })
  }

  fetch('https://anime-fd498-default-rtdb.firebaseio.com/anime.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const genres = new Set();

      renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));

      data.forEach((item) => {
        genres.add(item.ganre)
      })

      renderAnimeList(data, genres);
    })
}

mainData();