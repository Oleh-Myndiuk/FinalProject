// Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.scss';
import SearchBar from './SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Header({ onSearch, onGenreSelect }) {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setSearchTerm('');
    onGenreSelect(genre);
  };

  const handleLogoClick = () => {
    setSelectedGenre(null);
    setSearchTerm('');
    window.location.reload(); // Перезавантаження сторінки
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedGenre(null);
    onSearch(term);
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick}>
        CineSeeker
      </div>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <span className="menu__link">Фільми</span>
            <ul className="submenu">
              <li className="submenu__item" onClick={() => handleGenreSelect(28)}>
                Екшн (бойовики)
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(9648)}>
                Детективи
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(36)}>
                Історичні
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(35)}>
                Комедії
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(18)}>
                Військові
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(10759)}>
                Спортивні
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(99)}>
                Документальні
              </li>
            </ul>
          </li>
          <li className="menu__item">
            <span className="menu__link">Серіали</span>
            <ul className="submenu">
              <li className="submenu__item" onClick={() => handleGenreSelect(10759)}>
                Екшн (бойовики)
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(9648)}>
                Детективи
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(36)}>
                Історичні
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(35)}>
                Комедії
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(10752)}>
                Військові
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(18)}>
                Спортивні
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(99)}>
                Документальні
              </li>
            </ul>
          </li>
          <li className="menu__item">
            <span className="menu__link">Мультфільми</span>
            <ul className="submenu">
              <li className="submenu__item" onClick={() => handleGenreSelect(16)}>
                Повнометражні
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(18)}>
                Короткометражні
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(10762)}>
                Мультсеріали
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(2132)}>
                Netflix
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(2257)}>
                DreamWorks
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(7453)}>
                Pixar
              </li>
              <li className="submenu__item" onClick={() => handleGenreSelect(1112)}>
                WB
              </li>
            </ul>
          </li>
        </ul>
      </nav>
       <div className="search">
        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
      </div>
      <div
        className="scroll-button"
        onClick={handleScrollToTop}
        style={{ display: showScrollButton ? 'block' : 'none' }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </header>
  );
}

export default Header;