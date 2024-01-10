import React from "react";
import { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//initial state:
const initialstate={
    transactions:[
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
    ]};

    //GlobalContext:
    export const GlobalContext=createContext(initialstate);


    
    //context Provider:
    
    export const GlobalProvider=({children})=>{
        const [state,dispatch]=useReducer(AppReducer,initialstate);
        
        //Actions:

        //delete transaction:
         function deleteTransaction(id)
        {
            dispatch({
                type:'DeleteTransaction',
                payload:id
            })
        }
        //add transaction:
        function addTransaction(transaction)
        {
            dispatch({
                type:'AddTransaction',
                payload:transaction
            })
        }
        return(
            <GlobalContext.Provider value={{

                    transactions:state.transactions,
                    deleteTransaction,
                    addTransaction
                }}>
                {children}
            </GlobalContext.Provider>
        );
    }