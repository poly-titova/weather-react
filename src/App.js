import React from 'react';
import Info from './components/Info';
import Form from './components/Form';

const API_KEY = '5e7f292d4d2e2431181edee119dd3a4c';

class App extends React.Component {

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_url = await 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
      </div>
    );
  }
}

export default App;
