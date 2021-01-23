import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '5e7f292d4d2e2431181edee119dd3a4c';

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        error: ""
      });
    }
  }

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
