import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'; 

//initial state
//list of transactions 
const initialState = {
    transactions: [
        { id: 1, text: 'Dinner', amount: -20 },
        { id: 2, text: 'Transport', amount: -10 },
        { id: 3, text: 'Groceries', amount: -35 },
        // { id: 4, text: 'Gym Membership', amount: -50 },
        // { id: 5, text: 'Electricity Bill', amount: -60 },
        // { id: 6, text: 'Internet Bill', amount: -30 },
        // { id: 7, text: 'Coffee', amount: -5 },
        // { id: 8, text: 'Freelance Work', amount: 250 },
        // { id: 9, text: 'Salary', amount: 3000 },
        // { id: 10, text: 'TV Subscription', amount: -12 },
    ]
}

//Create context

export const GlobalContext = createContext(initialState);

// Provider

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}