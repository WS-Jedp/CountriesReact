import React from 'react'
import {Link} from 'react-router-dom';

// Styles
import './styles/Country.css';

// Services
import {getCountry} from '../services/CountriesApi';

class Country extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      countryData: []
    }
  }

  async componentDidMount(){
    const name = this.props.match.params.name;
    const resp = await getCountry(name);
    const data = await resp.json();
    await this.setState({
      countryData: data
    })
    this.state.countryData.population = new Intl.NumberFormat('de-DE').format(Number(this.state.countryData.population))
  }


  render() {


    if(this.state.countryData.length === 0){
      return (<div>Loading...</div>)
    }

    const countryData = this.state.countryData[0];

    return (
      <section className="country">
        <Link to="/" className="country__back">
          Back
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
                {countryData.borders.map(data => <a>{data}</a>)}
            </p>  
          </div>
        </article>
      </section>
    )
  }
}


export default Country;
