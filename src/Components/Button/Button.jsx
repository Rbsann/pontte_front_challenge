import Button from '@material-ui/core/Button';

import React, { useContext } from 'react';

import { store } from '../../store';

import './Button.scss';

const ButtonComponent = () => {
    const globalState = useContext(store);
    const {state,dispatch} = globalState

    const handleClick = ()=>{
        console.log(state);
        // dispatch method to post data goes here
        //dispatch({type:'POST_DATA'})
    }

    return(
        <div className='button-container'>
            <Button onClick={()=>handleClick()} disabled={!state.data.isClicked} className='confirm-button'>Gostei, Continuar</Button>
        </div>
    )
}

export default ButtonComponent