import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import {useAuth} from '../Contex/AuthContex';
import { db } from '../../firebase';
import { useStateValue } from '../StateProvider';

export default function Getaddress(props) {
    // const formRef = useRef()
    const {currentUser} = useAuth()
    const [{basket}, dispatch] = useStateValue()

    function setUserInfo(addressDetail){
        dispatch({
            type:"ADD_USER",
            payload:{
                addDetail:addressDetail
            }
        })
    }

    function saveUserAddress(addInfo){
        if (currentUser){
            const setAdd = {
                ...addInfo    
            }
            db.collection('user').doc(currentUser.uid).set({
                'address':setAdd
            },{merge:true})
        }else{
            console.log("Saved anonymus data");
        }
    }

    const submitToFire = (e)=>{
        e.preventDefault()
        const formVal = props.getRef.current;
        if(formVal.phone.value.length !== 10){
            alert("Invalid number entered");
            return false;
        }
        else{
            const addInfo = {
                'name' : formVal.userName.value,
                'phone' : formVal.phone.value,
                'pincode' : formVal.pincode.value,
                'state': formVal.state.value,
                'city': formVal.city.value,
                'houseNo': formVal.houseNo.value,
                'other': formVal.other.value
            }
            setUserInfo(addInfo)
            saveUserAddress(addInfo)
            return true;
        }
        
    }
    return (
        <div className='container get-address'>
            <Form onSubmit={submitToFire} ref={props.getRef} autoComplete="on">
                <Form.Group controlId="formGroupName">
                    <Form.Control type="text" placeholder="Username*" name="userName" required autoComplete="on"/>
                </Form.Group>
                <Form.Group controlId="formGroupPhone">
                    <Form.Control type="text" placeholder="Phone*" name="phone" required autoComplete="on"/>
                </Form.Group>
                <Form.Group controlId="formGroupPin">
                    <Form.Control type="text" placeholder="Pincode*" name = "pincode" required autoComplete="on"/>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="State*" name="state" required autoComplete="on"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="City*" name="city" required autoComplete="on"/>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="formGroupHouse">
                    <Form.Control type="text" placeholder="House No./ Building No.*" name="houseNo" required autoComplete="on"/>
                </Form.Group>
                <Form.Group controlId="formGroupArea">
                    <Form.Control type="text" placeholder="Road/ Area/ Colony Name*" name="other" required autoComplete="on"/>
                </Form.Group>
            </Form>
        </div>
    )
}
