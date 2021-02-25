import React from 'react';
import Cardant2 from './Cardant2'
import {DataProvider} from './Contex/DataProvider';
export default function Test() {
    return (
        <DataProvider>
            <div>
                <Cardant2 />
            </div>
        </DataProvider> 
    )
}
