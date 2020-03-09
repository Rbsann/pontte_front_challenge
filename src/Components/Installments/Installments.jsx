
import React, { useContext } from 'react';

import { store } from '../../store';
import './Installments.scss'

// component to hold the installments columns, i decided using Bootstrap simply because it is the easier framework to design a proper grid layout
const Installments = ()=>{
    const globalState = useContext(store);
    const {state,dispatch} = globalState
    const prazo = [60,90,120,150,180]

    const handleClick = (index)=>{
        //on click dispatches 'isClicked true' 
        dispatch({type:'INSTALLMENT_ACTION',payload:{...state.data,active:index,isClicked:true}})
        console.log(state)
        console.log(index)
        console.log('clicked')
    }

    return (
        <div className='installments'>
            <h2 className='pre-installments'>Selecione a quantidade de parcelas</h2>
            <div className='container'>
                <div className="row">
                    {state.data.parcelas.map((data,index)=>{
                        return(
                            <div className={state.data.active===index?'col installments-col-active':'col installments-col'} 
                            onClick={()=>handleClick(index)} 
                            key={index} >
                                <h4>{prazo[index]} meses</h4>
                                <h4>R$ {state.data.installments[index]?.toLocaleString('Pt-Br')}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Installments;