import React from 'react'

export default function TourCard({item}) {
    return (
        <div className="excursions-block">
            <div className="img-excursions"><img src={item.img} alt="" /></div>
            <div className="text-button">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="button-block">
                    <button>{item.info}</button>
                    <button>{item.infoYears}</button>
                </div>
            </div>
            <div className="summa">
                <p>от </p>
                <span>{item.price} UZS</span>
                <button>Подробнее</button>
            </div>
        </div>
    )
}
