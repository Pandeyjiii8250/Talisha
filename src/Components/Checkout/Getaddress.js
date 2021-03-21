import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default function Getaddress() {
    return (
        <div className='container get-address'>
            <Form>
                <Form.Group controlId="formGroupName">
                    <Form.Control type="text" placeholder="Username(Required)*" />
                </Form.Group>
                <Form.Group controlId="formGroupPhone">
                    <Form.Control type="number" placeholder="Phone(Required)*" />
                </Form.Group>
                <Form.Group controlId="formGroupPin">
                    <Form.Control type="number" placeholder="Pincode(Required)*" />
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="State(Require)*" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="City(Require)*" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="formGroupHouse">
                    <Form.Control type="text" placeholder="House No./ Building No.(Required)*" />
                </Form.Group>
                <Form.Group controlId="formGroupArea">
                    <Form.Control type="text" placeholder="Road/ Area/ Colony Name(Required)*" />
                </Form.Group>
            </Form>
            
        </div>
    )
}
