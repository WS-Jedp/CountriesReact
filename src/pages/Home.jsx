import React from'react';
import {connect} from 'react-redux';

// Styles
import './styles/Home.css';

// Services
import { getCountries } from '../services/CountriesApi';

// Compenents
import Card from '../components/Card';
import Filter from '../components/Filter';
import Loading from '../components/Loading';

import {getCountriesAction, setFilteredCountriesAction, setCountryAction, setContinentAction} from '../actions/countriesActions';


class Home extends React.Component {

  constructor(){
    super();
    this.handleFilterName = this.handleFilterName.bind(this);
    this.handleFilterContinent = this.handleFilterContinent.bind(this);
  }

  async componentDidMount(){
    if(this.props.countries.length === 0){
      const data = await getCountries();
      this.props.getCountriesAction(data);
      this.props.setFilteredCountriesAction(data);
    }
  }

  filterCountries(country = /[a-zA-Z]{1,}/,continent = /[a-zA-Z]{1,}/){
    this.props.setFilteredCountriesAction(this.props.countries.filter(currCountry => currCountry.name.toLowerCase().match(country) && currCountry.region.match(continent)))
  }

  handleFilterName(ev){
    let value = ev.target.value;
    this.props.setCountryAction(value);
    this.filterCountries(value,this.props.continent);
  }
  
  handleFilterContinent(ev){
    let value = ev.target.value;
    this.props.setContinentAction(value);
    this.filterCountries(this.props.country,value);
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
          {this.props.countries.length != 0 ? this.showCountries(this.props.filteredCountries) : <Loading />}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.countriesReducer
}

const mapDispatchToProps = {
  getCountriesAction,
  setCountryAction,
  setFilteredCountriesAction,
  setContinentAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
