import React from 'react';
import { Steps, Button, message } from 'antd';
import Getaddress from './Getaddress';
import OrderSummary from './OrderSummary';
import Payment from './Payment'

import './Checkout.css'

const { Step } = Steps;

const steps = [
  {
    title: 'Address',
    content: <Getaddress />,
  },
  {
    title: 'Order Summry',
    content: <OrderSummary />,
  },
  {
    title: 'Payment',
    content: <Payment />,
  },
];

export default function Checkout() {
    // 
    const [current, setCurrent] = React.useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
  
    return (
      <div className="container">
        <Steps current={current} className="step-design">
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
}