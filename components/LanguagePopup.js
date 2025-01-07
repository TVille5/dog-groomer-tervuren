import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import styles from './LanguagePopup.module.css'; // Optional for component-specific styles
import { useTranslation } from 'react-i18next';

const LanguagePopup = ({ onLanguageChange }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t, i18n } = useTranslation('translation', {keyPrefix: 'languagepopup'});

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (!storedLanguage) {
      setIsPopupOpen(true); // Show the pop-up if no language is set
    } else {
      i18n.changeLanguage(storedLanguage);
    }
  }, [onLanguageChange]);

  const handleLanguageSelection = (lang) => {
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
    setIsPopupOpen(false); // Close the pop-up
  };

  const handlePopupClose = () => {
    if (isPopupOpen) {
      handleLanguageSelection('en'); // Default to English
    }
  };

  return (
    <Popup
      open={isPopupOpen}
      closeOnDocumentClick
      onClose={handlePopupClose}
      modal
    >
      <div className={styles['popup-content']}>
        <h2>{t('h2')}</h2>
        <button onClick={() => handleLanguageSelection('en')}>English</button>
        <button onClick={() => handleLanguageSelection('nl')}>Nederlands</button>
        <button onClick={() => handleLanguageSelection('fr')}>Français</button>
        <button onClick={() => handleLanguageSelection('de')}>Deutsch</button>
      </div>
    </Popup>
  );
};

export default LanguagePopup;
