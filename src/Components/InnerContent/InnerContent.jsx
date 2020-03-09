import React, { useEffect,useContext } from 'react';

import axios from 'axios';

import { store } from '../../store';
import ButtonComponent from '../Button/Button';
import Disclaimer from '../Disclaimer/Disclaimer';
import Installments from '../Installments/Installments';
import SliderComponent from '../Slider/Slider';
import Values from '../Values/Values';

import './InnerContent.scss';

// inner content component, responsible for fetching data ( this could be further abstracted by moving it to a service file)
const InnerContent = ()=>{

    const globalState = useContext(store);
    const {state,dispatch} = globalState




    const fetchData = async () => {
        try{
            let result = await axios.get('https://testfrontend.pontte.com.br/'); 
            // Material slider needs a specific format to display data, this object is created for this function
            let sliderObject = result.data.valoresEmprestimo.map((valores,index,arr)=>{
                if (index===0 || index===arr.length -1){
                    return {value:valores, label:'R$ '+ valores.toLocaleString('Pt-Br')+',00'}
                }
                return {value: Number(valores)}
            })
            // since parcelas  comes reversed these two lines reorder the array to make it easier to work with this specific piece of data
            result.data.parcelas = result.data.parcelas.reverse()
            result.data.parcelas = result.data.parcelas.map(parcela=>{
                return parcela.reverse()
            })
            // dispatch the payload
            dispatch({type:'SET_DATA',payload:{...state.data,prazos:result.data.prazos,valoresEmprestimeBruto:result.data.valoresEmprestimeBruto
            ,valoresEmprestimo:result.data.valoresEmprestimo,
            parcelas:result.data.parcelas,sliderObject,value:result.data.valoresEmprestimo[0].toLocaleString('Pt-br')+',00',
            absoluteValue:result.data.valoresEmprestimeBruto[0].toLocaleString('Pt-br'),
            installments:result.data.parcelas[0],loading:false,active:-1}})
        }catch (e){
            console.log(e)
        }
        };
    
    
    useEffect(() => {
        //React context api best practices demand that we use 'useEffect' in this manner
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    return(
        <>
        {state.data.loading? ( 
            "Loading..."):(
        <div>
                <Values />
                <SliderComponent />
                <Installments />
                <ButtonComponent />
                <Disclaimer />
        </div>
        )}
        </>
    )
}

export default InnerContent;