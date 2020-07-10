import React from'react';

// Styles
import './styles/Home.css';

// Services
import { getCountries } from '../services/CountriesApi';

// Compenents
import Card from '../components/Card';
import Filter from '../components/Filter';
import Loading from '../components/Loading';

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      countries: [],
      filteredCountries: [],
      country: /[a-zA-Z]{1,}/,
      continent: ''
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

  filterCountries(country = /[a-zA-Z]{1,}/,continent = /[a-zA-Z]{1,}/){
    this.setState({
      filteredCountries: this.state.countries.filter(currCountry => currCountry.name.toLowerCase().match(country) && currCountry.region.match(continent))
    })
  }

  handleFilterName(ev){
    let value = ev.target.value;
    this.setState({
      country: value,
    })
    this.filterCountries(value,this.state.continent);
  }
  
  handleFilterContinent(ev){
    let value = ev.target.value;
    this.setState({
      continent: value,
    });

    this.filterCountries(this.state.country,value);
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
          {this.state.countries.length != 0 ? this.showCountries(this.state.filteredCountries) : <Loading />}
        </div>
      </section>
    );
  }
}

export default Home;
