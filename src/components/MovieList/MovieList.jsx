// MovieList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieList.scss';
import MovieModal from '../MovieModal/MovieModal';

function MovieList({ searchTerm, selectedGenre }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let response;

        if (searchTerm) {
          response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: '1781147e1e53e3ff54bd89e87c75faea',
              language: 'en-US',
              query: searchTerm,
              page: currentPage,
              include_adult: false,
            },
          });
        } else if (selectedGenre) {
          response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
              api_key: '1781147e1e53e3ff54bd89e87c75faea',
              language: 'en-US',
              sort_by: 'popularity.desc',
              with_genres: selectedGenre,
              page: currentPage,
            },
          });
        } else {
          response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
              api_key: '1781147e1e53e3ff54bd89e87c75faea',
              language: 'en-US',
              page: currentPage,
            },
          });
        }

        setMovies(response.data.results.slice(0, 40)); // Змінюємо кількість фільмів на 20
        setTotalPages(response.data.total_pages);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [searchTerm, selectedGenre, currentPage]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const interval = 10;
    const startPage = Math.floor((currentPage - 1) / interval) * interval + 1;
    const endPage = Math.min(startPage + interval - 1, totalPages);

    return (
      <div className="pagination">
        {startPage > 1 && (
          <button onClick={() => handlePageChange(startPage - 1)}>Попередня</button>
        )}
        <ul className="pagination__list">
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(
            (page) => (
              <li key={page} className="pagination__item">
                <button
                  className={`pagination__button ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              </li>
            )
          )}
        </ul>
        {endPage < totalPages && (
          <button onClick={() => handlePageChange(endPage + 1)}>Наступна</button>
        )}
      </div>
    );
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item" onClick={() => handleMovieClick(movie)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
        </div>
      ))}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}

      {totalPages > 1 && renderPagination()}
    </div>
  );
}

export default MovieList;
