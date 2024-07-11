const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading and Movie List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="search" style="text-align: center;">
          <input 
            type="search"
            name="search"
            placeholder="Search books by title..."
            hx-post="/books/search"
            hx-trigger="keyup changed delay:300ms"
            hx-target=".book-list"
          />
        </div> 

        <!-- Books section -->
        <div class="book-list list">
          <button hx-get="/books" hx-target=".book-list">Show Books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form
            hx-post="/books" 
            hx-target=".book-list ul" 
            hx-swap="beforeend" 
            hx-on::after-request="document.querySelector('form').reset()"
          >
            <input 
              id="title" 
              name="title"
              placeholder="title" 
              type="text"
              required 
            />
            <input 
              id="author" 
              name="author"
              placeholder="author" 
              type="text"
              required
            />
            <button>Add</button>
          </form>
        </div>
        
        <!-- Movies section -->
        <header>
          <h1 style="margin-top: 30px">My Favourite Movies List</h1>
        </header>
        <div class="search" style="text-align: center;">
          <input 
            type="search"
            name="search"
            placeholder="Search movies by title..."
            hx-post="/movies/search"
            hx-trigger="keyup changed delay:300ms"
            hx-target=".movie-list"
          />
        </div> 

        <div class="movie-list list">
          <button hx-get="/movies" hx-target=".movie-list">Show Movies</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to watch?</h2>
          <form
            hx-post="/movies" 
            hx-target=".movie-list ul" 
            hx-swap="beforeend" 
            hx-on::after-request="document.querySelector('form').reset()"
          >
            <input 
              id="title" 
              name="title"
              placeholder="title" 
              type="text"
              required 
            />
            <input 
              id="director" 
              name="director"
              placeholder="director" 
              type="text"
              required
            />
            <button>Add</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;
