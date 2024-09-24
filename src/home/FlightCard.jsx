import { faPlaneArrival, faPlaneDeparture, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import airportCityMap from '../assets/js/airportCityMap';
import airlineLogoMap from '../assets/js/airlineLogoMap';

const FlightCard = ({ flightList }) => {
    useEffect(() => {
        console.log("Flight :", flightList);
    }, [flightList]);

    const transformFlightData = (flights) => {
        return flights.map(flight => {
            const departureTime = new Date(flight.scheduleDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const arrivalTime = new Date(flight.actualLandingTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const departureAirport = flight.prefixIATA;
            const arrivalAirport = flight.route.destinations[0];
            const flightDuration = calculateFlightDuration(flight.scheduleDateTime, flight.actualLandingTime);
            const departureCity = airportCityMap[departureAirport] || departureAirport;
            const arrivalCity = airportCityMap[arrivalAirport] || arrivalAirport;
            const logo = airlineLogoMap[departureAirport] || 'default-logo.png';
            const title = departureCity + "-" + arrivalCity;

            return {
                departureTime,
                arrivalTime,
                departureAirport,
                arrivalAirport,
                departureCity,
                arrivalCity,
                flightDuration,
                flightNumber: flight.flightNumber,
                flightName: flight.flightName,
                logo,
                title,
            };
        });
    };


    const calculateFlightDuration = (departure, arrival) => {
        const dep = new Date(departure);
        const arr = new Date(arrival);
        const duration = Math.abs(arr - dep);

        if (isNaN(duration)) {
            return "Bilinmiyor";
        }

        const hours = Math.floor((duration % 86400000) / 3600000);
        const minutes = Math.round(((duration % 86400000) % 3600000) / 60000);
        return `${hours}h ${minutes} m(Nonstop)`;
    };

    const flightsEdited = transformFlightData(flightList);

    return (
        <div>
            <div className='flight-card-section'>
                <div className="container">
                    {flightsEdited.map((flight, i) => (
                        <div key={i}>
                            <div className="row flight-info-card">
                                <h5 className='flight-title'>{flight.title}</h5>
                                <div className="col-4">
                                    <div className="airline">
                                        <FontAwesomeIcon icon={faPlaneDeparture} /> Departure
                                    </div>
                                    <div className="flight-time">{flight.departureTime}</div>
                                    <div className="flight-number">Airport: {flight.departureAirport}</div>
                                    <div className="flight-price">Price: {flight.price}</div>
                                    <div className="flight-trip">Round Trip</div>
                                    <span>_</span>
                                </div>
                                <div className="col-4">
                                    <div className="airline d-inline-grid">
                                        {flight.countryName}
                                        <FontAwesomeIcon icon={faPlaneArrival} />
                                    </div>
                                    {flight.logo ? (
                                        <img src={flight.logo} />
                                    ) : null}
                                    <div className="flight-trip">{flight.flightDuration}</div>
                                    <span>_</span>
                                </div>
                                <div className="col-4">
                                    <div className="airline">
                                        <FontAwesomeIcon icon={faPlaneArrival} /> Arrival
                                    </div>
                                    <div className="flight-time">{flight.arrivalTime}</div>
                                    <div className="flight-number">Airport: {flight.arrivalAirport}</div>
                                    <button type='submit' className='btn-primary flight-book-btn'>
                                        <FontAwesomeIcon icon={faSearch} /> Book Flight
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}


export default FlightCard;