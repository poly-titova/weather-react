import React from 'react';
import Info from './components/Info';

const API_KEY = '5e7f292d4d2e2431181edee119dd3a4c';

class App extends React.Component {

  gettingWeather = async () => {
    const api_url = await 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Info />
      </div>
    );
  }
}

export default App;
