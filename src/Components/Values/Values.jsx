
import React, { useContext } from 'react';

import {FaRegQuestionCircle} from 'react-icons/fa';

import { store } from '../../store';

import './Values.scss';


// simple component to hold the value and the absolute value of the app
const Values = ()=>{
    const globalState = useContext(store);
    const {state} = globalState


    return(
        <div>
            <div className='first-value'>
                <h1>R$ {state.data.value}</h1>
            </div>
            <div className='absolute-value' >
                <h2>Valor Bruto: R$ {state.data.absoluteValue}  <FaRegQuestionCircle className='icon' /> </h2>
            </div>
        </div>
        
    );

}

export default Values