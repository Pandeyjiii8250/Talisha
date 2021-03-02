import React from 'react';
import 'antd/dist/antd.css';
import {Card, Button} from 'antd';
import {useStateValue} from './StateProvider';

function Cardant(props){
    const [{basket}, dispatch] = useStateValue();

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
        <Card title={props.title}>
        <div style={{display:"flex", justifyContent:"space-around"}}>
        {props.info.map((item, index)=>{
            return(
                <Card.Grid
                    key={index}
                    id={index}
                    // key={index}
                    // id={index}
                    hoverable={true}
                    style={gridStyle}>
                    <Card
                    cover={
                        <img
                        alt="example"
                        // src={item.data().img}
                        src={item.img}
                        style={props.val === "0" ? {height:"auto"} : {height:150}}
                        />
                    }
                    actions={[
                        <Button 
                        shape="round" 
                        type="primary" 
                        onClick={()=>addToBasket(index, item.title)}>
                        +<i class="fas fa fa-shopping-cart">
                        </i></Button>
      
                    ]}
                >
                <Meta
                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    // title={item.data().title}
                    title={item.title}
                    // description={item.data().description}
                    description={item.description}
                />
                </Card>
                </Card.Grid>
            );
        })}</div>
        </Card>
        
    );
}

export default Cardant;