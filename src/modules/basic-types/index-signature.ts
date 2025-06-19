type Movie = {
  title: string;
  year: number;
  [key: string | number]: string | number | boolean;
};

type Movies = {
  [key: string]: Movie;
};

let movies = {
  movie1: {
    title: 'Vingadores',
    year: 2012,
    isFavorite: true,
    genre: 'Ação',
  },

  movie2: {
    title: 'Um Sonho de Liberdade',
    year: 1994,
    isFavorite: true,
    genre: 'Drama',
    runtime: 142,
  },

  movie3: {
    title: 'Pantera Negra',
    year: 2018,
    isFavorite: false,
    genre: 'Ação',
    Director: 'Kendrick Lamar',
  },
};

export function showMovies(movies: Movies) {
  console.log(movies);
}

showMovies(movies);
