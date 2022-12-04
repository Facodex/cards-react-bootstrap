import React from 'react'
import { Card } from './Card';
import eth from '../images/eth.jpg';
import boredApe from '../images/boredApe.jpg';
import facodex from '../images/facodex.png';

export const Cards = () => {
    const cards = [
        {
            id: 1,
            title: "MY PORTFOLIO facodex.tech",
            img: facodex,
            url: 'https://facodex.tech/'
        },
        {
            id: 2,
            title: "Ethereum Official",
            img: eth,
            url: 'https://ethereum.org/es/'
        },
        {
            id: 3,
            title: "Bored Ape NFTs",
            img: boredApe,
            url: 'https://opensea.io/collection/boredapeyachtclub'
        }
    ];

    return (
        <div className='container d-flex justify-content-center h-100 align-items-center'>
            <div className="row">

                {
                    cards.map((card) => {
                        return (
                            <div className="col-md-4" key={card.id}>
                                <Card title={card.title} url={card.url} image={card.img}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
