import { faPlaneArrival, faPlaneDeparture, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'bootstrap'
import React from 'react'

const flightList = [
    {
        title: 'Milano - Madrid',
        departureTime: '7.30 AM',
        arrivalTime: '9:55 AM',
        countryName: 'Italia',
        departureAirport: 'MXP',
        arrivalAirport: 'MAD',
        price: '$200'
    },
    {
        title: 'Milano - Madrid',
        departureTime: '7.30 AM',
        arrivalTime: '9:55 AM',
        countryName: 'Italia',
        departureAirport: 'MXP',
        arrivalAirport: 'MAD',
        price: '$200'
    }
]

const FlightCard = () => {
    return (
        <div>
            <div className='flight-card-section'>
                <div className="container">
                    {
                        flightList.map((flight, i) => (
                            <div key={i}>
                                <div className="row flight-info-card">
                                    <h5 className='flight-title'>{flight.title}</h5>
                                    <div className="col-4">
                                        <div className="airline">
                                            <FontAwesomeIcon icon={faPlaneDeparture}></FontAwesomeIcon>
                                            Departure</div>
                                        <div className="flight-time">{flight.departureTime}</div>
                                        <div className="flight-number">Airport: {flight.departureAirport}</div>
                                        <div className="flight-price">Price: {flight.price}</div>
                                        <div className="flight-trip">Round Trip</div>
                                        <span>_______</span>
                                    </div>
                                    <div className="col-4">
                                        <div className="airline d-inline-grid">
                                            {flight.countryName}
                                            <FontAwesomeIcon icon={faPlaneArrival}></FontAwesomeIcon>
                                        </div>
                                        <div className="flight-trip">2h 25m (Nonstop)</div>
                                        <span>_______</span>
                                    </div>
                                    <div className="col-4">
                                        <div className="airline">
                                            <FontAwesomeIcon icon={faPlaneArrival}></FontAwesomeIcon>
                                            Arrival</div>
                                        <div className="flight-time">{flight.arrivalTime}</div>
                                        <div className="flight-number">Airport: {flight.arrivalAirport}</div>
                                        <button type='submit' className='btn-primary flight-book-btn'>
                                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                            Book Flight
                                        </button>

                                    </div>
                                </div>
                            </div>))
                    }

                </div>

            </div>
        </div>
    )
}

export default FlightCard