import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPlaneArrival, faPlaneDeparture, faSearch } from '@fortawesome/free-solid-svg-icons'

const pageTitle = "Book Your Flight"



const FilterFlightCard = () => {
    return (
        <div className='filter-flight-card-section'>
            <div className="container">
                <div className="row filter-card">
                    <h5 className='filter-flight-title'>{pageTitle}</h5>
                    <Form>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="flight-d" className=''>
                                                <FontAwesomeIcon icon={faPlaneDeparture}></FontAwesomeIcon>
                                            </InputGroup.Text>
                                            <Form.Control
                                                className=''
                                                placeholder="Select your flight"
                                                aria-label="Departure"
                                                aria-describedby="flight-d"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="flight-d" className=''>
                                                <FontAwesomeIcon icon={faPlaneArrival}></FontAwesomeIcon>
                                            </InputGroup.Text>
                                            <Form.Control
                                                className=''
                                                placeholder="Select your flight"
                                                aria-label="Departure"
                                                aria-describedby="flight-d"
                                            />
                                        </InputGroup></Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="flight-d" className=''>
                                                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                                            </InputGroup.Text>
                                            <Form.Control
                                                className=''
                                                placeholder="Select your flight"
                                                aria-label="Departure"
                                                aria-describedby="flight-d"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="flight-d" className=''>
                                                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                                            </InputGroup.Text>
                                            <Form.Control
                                                className=''
                                                placeholder="Select your flight"
                                                aria-label="Departure"
                                                aria-describedby="flight-d"
                                            />
                                        </InputGroup></Col>
                                </Row>
                            </Col>

                        </Row>

                        {/* <div className='col-6 d-flex'>
                            <input type="date" className='left-input col-6' id='search' placeholder='Select your flight' />
                            <input type="date" className='right-input col-6' id='search' placeholder='Select your flight' />
                        </div> */}
                    </Form>
                    <button type='button' className='filter-button'>Show Flights</button>
                </div>

            </div>

        </div>
    )
}

export default FilterFlightCard