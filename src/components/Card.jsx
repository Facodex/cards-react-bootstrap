import React from 'react';
import propTypes from 'prop-types';
import '../card.css';


export const Card = ({ title, text, image, url }) => {
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInLeft'>

      <div className="overflow">
        <img src={image} className='img-card card-img-top' style={{ width: '100%', height: '200px' }} />
      </div>
      
      <div className="card-body text-light">

        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          {
            text ? text :
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum officia sint? Harum accusamus neque dolores repudiandae voluptates ut esse repellat consectetur, a dolorum libero ducimus reprehenderit eligendi quam dolor!'
          }
        </p>

        <a href={url} target="_blank" className='btn btn-outline-secondary rounded-0'>
          Go to this website
        </a>

      </div>

    </div>
  )
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string,
  image: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};