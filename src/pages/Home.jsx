import React from'react';

// Styles
import './styles/Home.css';

// Services
import { getCountries } from '../services/CountriesApi';

// Compenents
import Card from '../components/Card';
import Filter from '../components/Filter';

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      countries: [],
      filteredCountries: [],
    };
    this.handleFilterName = this.handleFilterName.bind(this);
    this.handleFilterContinent = this.handleFilterContinent.bind(this);
  }

  async componentDidMount(){
    if(this.state.countries.length === 0){
      const data = await getCountries();
      this.setState({
        countries: data,
        filteredCountries: data
      })
    }
  }

  handleFilterName(ev){
    let value = ev.target.value;
    this.setState({
      filteredCountries: this.state.countries.filter(country => country.name.toLowerCase().includes(value.toLowerCase() && country.region.toLowerCase() === value.toLowerCase()))
    })
  }
  
  handleFilterContinent(ev){
    let value = ev.target.value;
    if(value === ''){
      this.setState({
        filteredCountries: this.state.countries
      })
    }
    
    console.log(this.state.filteredCountries);
    this.setState({
      filteredCountries: this.state.countries.filter(country => country.region.toLowerCase() === value.toLowerCase())
    });
  }

  showCountries(data){

    if(data.length === 0){
      return (<div>I'm sorry that country doen't exist</div>)
    }
    return (data.map(
      (country, key) => (<Card key={key} 
        flag={country.flag} 
        name={country.name} 
        population={country.population} 
        region={country.region} 
        capital={country.capital}
      />)
    ));
  }

  render() {
    return (
      <section className="home">
        <nav className="home__nav">
          <Filter onChange={this.handleFilterName} onChangeContinent={this.handleFilterContinent} />
        </nav>
        <div className="home__cards"> 
          {this.state.countries.length != 0 ? this.showCountries(this.state.filteredCountries) : 'loading'}
        </div>
      </section>
    );
  }
}

export default Home;
