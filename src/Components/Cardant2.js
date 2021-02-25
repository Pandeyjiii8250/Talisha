import React, {useRef, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Card, Button} from 'antd';
import {useStateValue} from './StateProvider';
import {db} from '../firebase';
// import {useDataValue} from './Contex/DataProvider';

export default function Cardant2(props) {
    const [{basket}, dispatch] = useStateValue();
    const [loading, setLoading] = useState(false);

    var itemDetail = useRef([]);
    // const{itemDetail,loading} = useDataValue()

    useEffect(()=>{
        console.log("Hellow");
        db.collection("Items").get().then(querySnapshot=>{
            // console.log(querySnapshot.docs)
            itemDetail.current = querySnapshot.docs;
            setLoading(true);
            console.log("hellow2");
        })
            
    },[]);

    const addToBasket = (id, title)=>{
        dispatch({
            type:"ADD_ITEM",
            payload:{
                id:id,
                title:title,
                price:10,
                count:1
            }
        })
    }
    //design for card
    const {Meta} = Card;
    const gridStyle = {
        width: props.width,
        textAlign: 'center',
      };
    
    return(
        <Card title="Test">
        
        <div style={{display:"flex", justifyContent:"space-around"}}>
        {/* {props.info.map((item, index)=>{ */}
        {loading && itemDetail.current.map((item)=>{
            return(
                <Card.Grid
                    key={item.id}
                    id={item.id}
                    hoverable={true}
                    style={gridStyle}>
                    <Card
                    cover={
                        <img
                        alt="example"
                        src={item.data().img}
                        style={props.val === "0" ? {height:"auto"} : {height:150}}
                        />
                    }
                    actions={[
                        <Button 
                        shape="round" 
                        type="primary" 
                        onClick={()=>addToBasket(item.id, item.data().title)}>
                        +<i class="fas fa fa-shopping-cart">
                        </i></Button>
      
                    ]}
                >
                <Meta
                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={item.data().title}
                    description={item.data().description}
                />
                </Card>
                </Card.Grid>
            );
        })}</div>
        </Card>
        
    );
}


