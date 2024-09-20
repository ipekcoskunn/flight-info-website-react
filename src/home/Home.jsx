import React from 'react'
import RightCards from './RightCards'
import FilterFlightCard from './FilterFlightCard'

const Home = () => {
    return (
        <div className="home-section">
            <div className="container">
                <div className='row'>
                    <div className='col-lg-9 col-md-9 col-xs-12 col-sm-12 my-3'>
                        <FilterFlightCard />
                        <div className="row">
                            <div className="col-lg-9 col-md-10 col-xs-12 col-sm-12 my-2">
                                uçuş bilgileri
                            </div>
                            <div className="col-lg-3 col-md-2 col-xs-12 col-sm-12 my-2">
                                sort by
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

export default Home