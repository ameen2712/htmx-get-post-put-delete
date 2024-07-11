import  MOVIES_DATA from "../data/moviesdata.js"
import createmovietemplate from './movie.js'

const createmovieList=(movies)=>/*html*/ `
 <ul>
    ${movies.map((movie)=>createmovietemplate(movie)).join('')} 
</ul>
`;
export default createmovieList;