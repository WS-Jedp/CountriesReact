import React from 'react'
import { Link } from 'react-router-dom';

// Styles
import './styles/Card.css';

const Card = ({flag, name, population, region, capital}) => {
  return (
    <article className="card">
      <Link to={`/country/${name}`}>
        <figure className="card__image">
          <img src={flag} alt={name} loading="lazy"></img>
        </figure>
        <div className="card__content">
          <h2 className="card__title">{name}</h2>
          <p>
            <strong>Population:</strong> {population}
          </p>
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Capital:</strong> {capital}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default Card;
