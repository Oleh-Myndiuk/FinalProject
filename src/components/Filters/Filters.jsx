import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Filters.scss';

function Filters({ onFilter }) {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  useEffect(() => {
    const fetchFilteredMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          {
            params: {
              api_key: '1781147e1e53e3ff54bd89e87c75faea',
              language: 'en-US',
              sort_by: 'popularity.desc',
              with_genres: genre,
              primary_release_year: year,
              'vote_average.gte': rating,
              include_adult: false,
              include_video: false,
              page: 1,
              with_watch_monetization_types: 'flatrate',
            },
          }
        );
        onFilter(response.data.results);
      } catch (error) {
        console.error('Error fetching filtered movies:', error);
      }
    };

    fetchFilteredMovies();
  }, [genre, year, rating, onFilter]);

  return (
    <div className="filters">
      <select value={genre} onChange={handleGenreChange}>
        <option value="">Select Genre</option>
        <option value="28">Action</option>
        <option value="18">Drama</option>
        <option value="35">Comedy</option>
      </select>
      <select value={year} onChange={handleYearChange}>
        <option value="">Select Year</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
      <select value={rating} onChange={handleRatingChange}>
        <option value="">Select Rating</option>
        <option value="7">7+</option>
        <option value="8">8+</option>
        <option value="9">9+</option>
      </select>
    </div>
  );
}

export default Filters;

