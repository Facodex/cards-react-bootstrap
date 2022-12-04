import React from 'react'

export const Card = ({title, image, url}) => {
  return (
    <div className='card text-center bg-dark'>

        <img src={image} className='img-card' style={{width:'100%', height:'200px'}}/>

        <div className="card-body text-light">

            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum officia sint? Harum accusamus neque dolores repudiandae voluptates ut esse repellat consectetur, a dolorum libero ducimus reprehenderit eligendi quam dolor!</p>
            <a href={url} target="_blank" className='btn btn-outline-secondary rounded-0'>
                Go to this website
            </a>

        </div>

    </div>
  )
}
