import React from 'react';
import 'antd/dist/antd.css';
import {Card, Button} from 'antd';

function Cardant(props){
    const {Meta} = Card;
    const gridStyle = {
        width: props.width,
        textAlign: 'center',
      };
    return(
        <Card title={props.title}>
        <div style={{display:"flex", justifyContent:"space-around"}}>
        {props.info.map(item=>{
            return(
                <Card.Grid
                    hoverable={true}
                    style={gridStyle}>
                    <Card
                    cover={
                        <img
                        alt="example"
                        src={item.img}
                        style={props.val === "0" ? {height:"auto"} : {height:150}}
                        />
                    }
                    actions={[
                        <Button shape="round" type="primary" >+<i class="fas fa fa-shopping-cart"></i></Button>
      
                    ]}
                >
                <Meta
                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={item.title}
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