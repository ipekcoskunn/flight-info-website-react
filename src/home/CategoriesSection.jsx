import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';





const CategoriesSection = () => {
    return (
        <div>
            <Form>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Sort by:</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Lowest Price</option>
                            <option>Highest Price</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="my-2" id="formGridCheckbox">
                        <Form.Label>Arrival Time</Form.Label>
                        <Form.Check type="checkbox" label="05:00 - 08:00" />
                        <Form.Check type="checkbox" label="05:00 - 08:00" />
                    </Form.Group>
                    <Form.Group className="my-2" id="formGridCheckbox">
                        <Form.Label>Stops</Form.Label>
                        <Form.Check
                            className='checkbox-label'
                            type="checkbox"
                            label={<p className='checkbox-p'><span>Nonstap</span>$200</p>}
                            name="formHorizontalRadios"
                            id="formHorizontalRadios"
                        />
                        <Form.Check
                            className='checkbox-label'
                            type="checkbox"
                            label={<p className='checkbox-p'><span>1 stap</span>$230</p>}
                            name="formHorizontalRadios"
                            id="formHorizontalRadios"
                        />
                    </Form.Group>

                </Row>
            </Form>
        </div>
    )
}

export default CategoriesSection