import React from 'react';

import InnerContent from '../InnerContent/InnerContent';

import './Frame.scss';

const Frame = () =>{

    // Frame component that holds inner contents.
    return (
        <div className='inside-frame'>
            <div className='top-frame'>
                <h2>Valor Solicitado</h2>
            </div>
            <div className='value-installments'>
                <InnerContent />
            </div>
        </div>)
}

export default Frame