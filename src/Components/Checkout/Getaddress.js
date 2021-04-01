import React, {useRef} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import {useAuth} from '../Contex/AuthContex';
import { db } from '../../firebase';

export default function Getaddress(props) {
    // const formRef = useRef()
    const {currentUser} = useAuth()

    const submitToFire = (e)=>{
        e.preventDefault()
        const formVal = props.getRef.current;
        if (currentUser){
            const setAdd = {
                'name' : formVal.userName.value,
                'phone' : formVal.phone.value,
                'pincode' : formVal.pincode.value,
                'state': formVal.state.value,
                'city': formVal.city.value,
                'houseNo': formVal.houseNo.value,
                'other': formVal.other.value
            }
            db.collection('user').doc(currentUser.uid).set({
                'setAdd':setAdd
            },{merge:true})
            // console.log(setAdd)
            // console.log("Save users address into place");
        }else{
            console.log("Saved anonymus data");
        }
    }
    return (
        <div className='container get-address'>
            <Form onSubmit={submitToFire} ref={props.getRef}>
                <Form.Group controlId="formGroupName">
                    <Form.Control type="text" placeholder="Username(Required)*" name="userName"/>
                </Form.Group>
                <Form.Group controlId="formGroupPhone">
                    <Form.Control type="number" placeholder="Phone(Required)*" name="phone"/>
                </Form.Group>
                <Form.Group controlId="formGroupPin">
                    <Form.Control type="number" placeholder="Pincode(Required)*" name = "pincode" />
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="State(Require)*" name="state"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="City(Require)*" name="city"/>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="formGroupHouse">
                    <Form.Control type="text" placeholder="House No./ Building No.(Required)*" name="houseNo"/>
                </Form.Group>
                <Form.Group controlId="formGroupArea">
                    <Form.Control type="text" placeholder="Road/ Area/ Colony Name(Required)*" name="other"/>
                </Form.Group>
            </Form>
        </div>
    )
}
