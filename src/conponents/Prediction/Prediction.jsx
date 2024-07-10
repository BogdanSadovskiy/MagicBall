import React, { useState } from "react";
import "./Prediction.css"; 
import enTranslations from "./en.json"; 
import uaTranslations from "./ua.json"; 

const PredictionWheel = () => {
  const [prediction, setPrediction] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentLanguage, setLanguage] = useState("en");

  
  const translations = {
    en: enTranslations,
    ua: uaTranslations,
  };

  
  const changeLanguage = (language) => {
    setLanguage(language);
    setPrediction(translations[language].buttonText.default);
  };

  
  const handlePredictionClick = () => {
    if (isSpinning) return; 

    setIsSpinning(true);

    setTimeout(() => {
      const randomIndex = Math.floor(
        Math.random() * translations[currentLanguage].predictions.length
      );
      console.log(randomIndex);
      const randomPrediction =
        translations[currentLanguage].predictions[randomIndex];
      setPrediction(randomPrediction);
      setIsSpinning(false);
    }, 1500);
  };

  return (
    <>
      <div className="language-buttons">
        <button
          className={currentLanguage === "en" ? "active" : ""}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
        <button
          className={currentLanguage === "ua" ? "active" : ""}
          onClick={() => changeLanguage("ua")}
        >
          UA
        </button>
      </div>
      <div className={`prediction-wheel ${isSpinning ? "spin-animation" : ""}`}>
        <button className="circle-button" onClick={handlePredictionClick}>
          {isSpinning
            ? translations[currentLanguage].buttonText.spinning
            : prediction
            ? prediction
            : translations[currentLanguage].buttonText.default}
        </button>
      </div>
    </>
  );
};

export default PredictionWheel;
