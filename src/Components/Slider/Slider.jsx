import Slider from '@material-ui/core/Slider';

import React, { useContext } from 'react';

import { store } from '../../store';
import './Slider.scss'


// Slider component, i found a decent easy to work slider component in the material ui library. 
const SliderComponent = () =>{
    const globalState = useContext(store);
    const {state,dispatch} = globalState

    const handleChangeSlider = (event,newValue)=>{
        //default method from material slider, easy to manipulate values, receive the new value and dispatch it.
        let index = state.data.valoresEmprestimo.indexOf(newValue)
        dispatch({type:'SLIDER_ACTION',payload:{...state.data,isClicked:false,active:-1,value:newValue.toLocaleString('Pt-Br')+',00',
        absoluteValue:state.data.valoresEmprestimeBruto[index].toLocaleString('Pt-Br'),installments:state.data.parcelas[index]}})
    }  

    return(
        <div className='slider'>
        <Slider 
        marks={state.data.sliderObject} 
        step={null} 
        min={state.data.valoresEmprestimo[0]} 
        max={state.data.valoresEmprestimo.slice(-1)} 
        onChange={handleChangeSlider}/>  
    </div>
    )

}




export default SliderComponent