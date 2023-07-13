import React, { useState, useRef, useEffect } from 'react';
import './MovieModal.scss';
import YouTube from 'react-youtube';

function MovieModal({ movie, onClose }) {
  const releaseYear = movie?.release_date?.split('-')[0];
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const modalRef = useRef(null);

  const handleTrailerClick = () => {
    setShowTrailerModal(true);
  };

  const handleCloseTrailerModal = () => {
    setShowTrailerModal(false);
  };

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose(); // Виклик функції onClose для закриття модального вікна
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseModal);
    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, []);

  const opts = {
    width: '560',
    height: '315',
    playerVars: {
      autoplay: 1,
      key: 'AIzaSyD41SRKvPs1rm5xxsK70fgRid1dI1kj3uk', // Замініть на свій API-ключ YouTube
    },
  };

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          <h2>{movie?.title}</h2>
          <div className="details">
            <div className="poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt={movie?.title}
              />
            </div>
            <div className="info">
              <p>
                <strong>Рік:</strong> {releaseYear}
              </p>
              <p>
                <strong>Опис:</strong> {movie?.overview}
              </p>
            </div>
          </div>
          <div className="trailer-button">
            <button onClick={handleTrailerClick}>Переглянути трейлер</button>
          </div>
        </div>
      </div>
      {showTrailerModal && (
        <div className="trailer-modal">
          <div className="trailer-content">
            <button className="close-button" onClick={handleCloseTrailerModal}>
              &times;
            </button>
            <h3>Трейлер фільму</h3>
            <YouTube videoId={movie?.trailer_key} opts={opts} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieModal;

