import React, {createContext, useReducer} from 'react';


const initialState = {data:{loading:true,isClicked:false}};
const store = createContext(initialState);
const { Provider } = store;


const StateProvider =  ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'SET_DATA':
                console.log(action.payload)
                return{
                    ...state,
                    data:action.payload
                }
            case 'SLIDER_ACTION':
                console.log(action.payload)
                return{
                    ...state,
                    data:action.payload
                }
            case 'INSTALLMENT_ACTION':
                return{
                    ...state,
                    data:action.payload
                }
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }