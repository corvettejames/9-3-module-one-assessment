/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) { //set your parameter to movies

  // !be descriptive with your variable names!
  //set your accumulator to an emoty array to gather the return!
  let movieTitles = []; //create a variable that equals an empty array
  for (let i = 0; i < movies.length; i++) { //start of for loop
    movieTitles.push(movies[i].title); //condition is to return all titles from an array of 'movies' objects
  }
  return movieTitles;
} //end of function

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) { //set your parameter to movies
  let hiScore = 0; //set accumulator
  if (movies.length) { // create guard clause
    hiScore = Number(movies[0].metascore) // converting a string to a number
  }
  for (let i = 1; i < movies.length; i++) { //create for loop for comparison
    if (Number(movies[i].metascore) > hiScore) { //encapsulating condition for the movie index
      hiScore = Number(movies[i].metascore);
    }
  }
  return hiScore
} //end of function

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) { //set your parameter
  let avgRating = 0; //create a variable
  for (let i = 0; i < movies.length; i++) { //for loop created for the parameter
    avgRating += Number(movies[i].imdbRating); //accumalator
    if (avgRating > 0) { // guard clause
      avgRating /= movies.length;
      //divide array for the outcome of the accumulator
    }

  }
  return avgRating;
} //end of function

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) { //set parameter to movies
  let myObject = {}; //accumulator pattern 

  for (let i = 0; i < movies.length; i++) { //for loop begins
    let myKey = movies[i].rated; //looping through the movie index
    if (myObject[myKey]) { //accumlate beginning from 1
    } else {
      myObject[myKey] = 1; //accumulator is being used for first index 
    }

  }
  return myObject
}


/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) { //parameter set
  if (movies.length === 0) { //index of movies equal to 0 
    return null;

  }
  for (i = 0; i < movies.length; i++) { //for loop created
    if (movies[i].imdbID === id) { //accumulator pattern
      return movies[i];
    }
  }
  return null;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let Arr = [] //define an empty array
  if (movies.length === 0) { //guard clause
    return Arr // accumulator return 
  }
  for (i = 0; i < movies.length; i++) { // for loop created
    let makeLowerCase = movies[i].genre.toLowerCase() //movie format
    if (makeLowerCase.includes(genre.toLowerCase())) {
      Arr.push(movies[i])
    }

  }
  return Arr
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies) { //set parameter
let result = []; //create a variable for an empty array
for (movie of movies){
  if (Number(movie.released.slice(-4)) <= year) {
    
  } // utilizing year out of the parameter
result.push(movie);
}

return result
}


/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  let highestBoxMov = 0; //create a variable for box movie number
  let highestMovie = ""; // variable created for movie titles
  if (!movies.length) { //if the movie index is not strictly equal
    return null;
  }
  for (let movie of movies) { //box number is a string
    let numberBox = Number(movie['boxOffice'].replace(/[$,]/g, '')); //remove template literals
    //index of the box number is higher 
    if (numberBox > highestBoxMov) {
      highestBoxMov = numberBox;
      highestMovie = movie['title'];
    }
  }
  return highestMovie;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
