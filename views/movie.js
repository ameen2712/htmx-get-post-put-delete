const createmovietemplate = (movie) => /*html*/ `
  <li data-id="${movie.id}">
    <div 
      class="details" 
      hx-get="/movies/edit/${movie.id}"
      hx-target="closest li"
    >
      <h3>${movie.title}</h3>
      <p>${movie.director}</p>
    </div>
    <button 
    hx-delete="/movies/${movie.id}"
    hx-target="closest li" 
    hx-swap="outerHTML"
    >Delete</button>
  </li>
`;

export default createmovietemplate;
