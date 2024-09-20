import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHotel, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'

const cardList = [
    {
        imgUrl: 'src/assets/images/card-1.jpg',
        icon: <FontAwesomeIcon icon={faCar} className='info-icons' />,
        title: 'Car Rentals',
    },
    {
        imgUrl: 'src/assets/images/card-2.jpg',
        icon: <FontAwesomeIcon icon={faHotel} className='info-icons' />,
        title: 'Hotels',
    },
    {
        imgUrl: 'src/assets/images/card-3.jpg',
        icon: <FontAwesomeIcon icon={faUmbrellaBeach} className='info-icons' />,
        title: 'Travel Packages',
    }
]


const RightCards = () => {
    return (
        <div className='card-section'>
            <div className="container">
                <div className="cards-area">
                    {
                        cardList.map((val, i) => (<div key={i}>
                            <div className="card-style">
                                <img src={val.imgUrl} className='card-img' />
                                <div className="card-content">
                                    {val.icon}
                                    <p className='card-title'>{val.title}</p>
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default RightCards