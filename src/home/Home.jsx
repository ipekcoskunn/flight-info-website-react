import React, { useState, useEffect } from 'react';
import RightCards from './RightCards';
import FilterFlightCard from './FilterFlightCard';
import FlightCard from './FlightCard';
import CategoriesSection from './CategoriesSection';

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/data')
            .then(response => response.json())
            .then(data => {
                setData(data.flights);
            })
            .catch(error => console.error('Error fetching data:', error.message));
    }, []);

    return (
        <div className="home-section">
            <div className="container">
                <div className='row homepage'>
                    <div className='col-lg-9 col-md-9 col-xs-12 col-sm-12 my-3'>
                        <FilterFlightCard />
                        <div className="row">
                            <div className="col-lg-9 col-md-10 col-xs-12 col-sm-12 my-2">
                                {data ? (
                                    <FlightCard flightList={data} />
                                ) : (
                                    <div>Loading...</div>
                                )}
                            </div>
                            <div className="col-lg-3 col-md-2 col-xs-12 col-sm-12 my-2">
                                <CategoriesSection />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-xs-12 col-sm-12 my-3'>
                        <RightCards />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;