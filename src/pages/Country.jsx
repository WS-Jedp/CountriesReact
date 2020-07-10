import React from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as getCountryAction  from '../actions/countryAction';

// Styles
import './styles/Country.css';

// Services
import {getCountry} from '../services/CountriesApi';

// Components
import Loading from '../components/Loading';

class Country extends React.Component {

  constructor(props){
    super(props);
  }

  async componentDidMount(){
    const name = this.props.match.params.name;
    const resp = await getCountry(name);
    const data = await resp.json();
    this.props.getCountryAction(data);
    this.props.countryData.population = new Intl.NumberFormat('de-DE').format(Number(this.props.countryData.population))
  }


  render() {
    if(this.props.countryData.length === 0){
      return (<Loading />)
    }

    const countryData = this.props.countryData[0];

    return (
      <section className="country">
        <Link to="/" className="country__back">
          <i className="fas fa-arrow-left"></i> Back
        </Link>

        <article className="country__content">
          <figure className="country__image">
            <img src={countryData.flag} alt="countryData.name" />
          </figure>

          <div className="country__information">
            <h2>{countryData.name}</h2>
            <div className="country__data">
              <ul>
                <li>
                  <p>
                    <strong>Native Name:</strong> {countryData.nativeName} 
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Population:</strong> {countryData.population} 
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Region:</strong> {countryData.region} 
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Sub Region:</strong> {countryData.subregion} 
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Capital:</strong> {countryData.capital} 
                  </p>
                </li>
              </ul>

              <ul>
              <li>
                  <p>
                    <strong>Top Level Domain:</strong> {countryData.topLevelDomain[0]} 
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Currencies:</strong> {countryData.currencies[0].code } 
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Languages:</strong> {countryData.languages[0].name} 
                  </p>
                </li>
              </ul>
            </div>
            <p className="country__borders">
              <strong>Border countries:</strong>
                {countryData.borders.lenght > 0 ? (countryData.borders.map(data => <a>{data}</a>)) : (<span>There is no border countries</span>)}
            </p>  
          </div>
        </article>
      </section>
    )
  }
}


const mapStateToProps = (reducers) => reducers.countryReducer;

export default connect(mapStateToProps, getCountryAction)(Country);
