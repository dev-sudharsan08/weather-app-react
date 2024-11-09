import React, { createContext, useState } from 'react';
import MOCK_DATA from '../MOCK_DATA.json';
import PropTypes from 'prop-types';

export const WeatherContext = createContext(null);

export const WeatherContextProvider = ({ children }) => {
  const [weatherDataAll, setWeatherDataAll] = useState(MOCK_DATA);
  const [pageNo, setPageNo] = useState(1);
  const [modalContent, setModalContent] = useState({});

  return (
    <>
      <WeatherContext.Provider
        value={{
          weatherDataAll,
          setWeatherDataAll,
          pageNo,
          setPageNo,
          modalContent,
          setModalContent
        }}>
        {children}
      </WeatherContext.Provider>
    </>
  );
};

WeatherContextProvider.propTypes = {
  children: PropTypes.element
};
