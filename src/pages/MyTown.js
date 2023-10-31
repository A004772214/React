import React, { useEffect, useState } from 'react';
import imgURL from './Halifax.jpeg';


function MyTown() {
  const [weather, setWeather] = useState(null);
  const [tempUnit, setTempUnit] = useState('C'); // 'C' for Celsius, 'F' for Fahrenheit
  const townName = "Halifax";

  useEffect(() => {
    const fetchWeather = async () => {
      //const apiKey = '33ea52f164dff023a7aa623f34aaca59';
      //const city = 'Halifax';
      //const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={44.651070}&lon={-63.582687}&appid=${apiKey}`);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.651070&lon=-63.582687&units=metric&appid=33ea52f164dff023a7aa623f34aaca59`);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setWeather(data.main.temp);
    };

    fetchWeather();
  }, []);

  const getWeatherImage = () => {
    if (weather !== null) {
      const temp = tempUnit === 'C' ? weather : (weather * 9/5) + 32;
      if (temp <= 10) return 'cold.png';
      if (temp > 10 && temp < 20) return 'mild.png';
      return 'sunny.png';
    }
    return '';
  };

  const toggleTempUnit = () => {
    setTempUnit(prevUnit => prevUnit === 'C' ? 'F' : 'C');
  };

  return (
    <div>
      <img src={imgURL } />
      <h1>{townName}</h1>
      <p>Halifax is the capital and largest municipality of the Canadian province of Nova Scotia, and the largest municipality in Atlantic Canada. As of 2022, it is estimated that the population of the Halifax CMA was 480,582,[6] with 348,634 people in its urban area.[3] The regional municipality consists of four former municipalities that were amalgamated in 1996: Halifax, Dartmouth, Bedford, and Halifax County.
Halifax is an economic centre of Atlantic Canada, home to a concentration of government offices and private companies. Major employers include the Department of National Defence, Dalhousie University, Nova Scotia Health Authority, Saint Mary's University, the Halifax Shipyard, various levels of government, and the Port of Halifax. Resource industries found in rural areas of the municipality include agriculture, fishing, mining, forestry, and natural gas extraction.</p>     
      {weather !== null && (
        <>
          <p>Current Weather: {tempUnit === 'C' ? weather.toFixed(2) : ((weather * 9/5) + 32).toFixed(2)}°{tempUnit}</p>
          <img src={getWeatherImage()} alt="weather status" />
          <button onClick={toggleTempUnit}>Change to °{tempUnit === 'C' ? 'F' : 'C'}</button>
        </>
      )}
    </div>
  );
}

export default MyTown;
