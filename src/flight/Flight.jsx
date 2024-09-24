import React, { useState } from 'react';
import flightList from '../assets/js/flightExampleData';

const Flight = () => {
    return <FlightList flights={flightList} />;
};

const FlightList = ({ flights }) => {
    const [filters, setFilters] = useState({
        arrived: false,
        delayed: false,
        canceled: false,
    });



    const handleFilterChange = (event) => {
        const { name, checked } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: checked,
        }));
    };

    const filteredFlights = flights.filter((flight) => {
        if (filters.arrived && flight.status === 'Arrived') {
            return true;
        }
        if (filters.delayed && flight.status === 'Delayed') {
            return true;
        }
        if (filters.canceled && flight.status === 'Canceled') {
            return true;
        }
        if (!filters.arrived && !filters.delayed && !filters.canceled) {
            return true;
        }
        return false;
    });

    return (
        <div className="flight-section">
            <div className='container'>
                <div >
                    <label>
                        <input
                            type="checkbox"
                            name="arrived"
                            checked={filters.arrived}
                            onChange={handleFilterChange}
                        />
                        Arrived
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="delayed"
                            checked={filters.delayed}
                            onChange={handleFilterChange}
                        />
                        Delayed
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="canceled"
                            checked={filters.canceled}
                            onChange={handleFilterChange}
                        />
                        Canceled
                    </label>
                </div>

                <ul>
                    {filteredFlights.map((flight) => (
                        <li key={flight.flightName}>
                            {flight.flightName} - {flight.destination} - {flight.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};





export default Flight