import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [theme, setTheme] = useState('light');

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedGenre(null); // Скидання вибраного жанру при пошуку
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setSearchTerm(''); // Скидання пошукового терміна при виборі жанру
  };

  const handleLogoClick = () => {
    setSelectedGenre(null); // Скидання вибраного жанру при натисканні на логотип
    setSearchTerm(''); // Скидання пошукового терміна при натисканні на логотип
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className={`app ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <ThemeSelector theme={theme} onThemeChange={handleThemeChange} />
      <Header onSearch={handleSearch} onGenreSelect={handleGenreSelect} onLogoClick={handleLogoClick} />
      <main className="main-content">
        <MovieList searchTerm={searchTerm} selectedGenre={selectedGenre} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
