import { database } from "./api.js";

let demo = document.getElementById('demo')
database.forEach((movie,index) => {
  const { imgUrl,rating ,name} = movie;

  const movieEl = document.createElement("a");
  movieEl.classList.add("movie");
  movieEl.id= index;

  movieEl.innerHTML = `
      <img
          src="${imgUrl}"
          
      />
      <div class="movie-info">
          <h3>${rating}</h3>
          <h2>${name}</h2>
     </div>
  `;
   movieEl.addEventListener('click', () => console.log("clicked"))
  demo.appendChild(movieEl);
  })