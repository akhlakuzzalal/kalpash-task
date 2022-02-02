import React, { createContext } from 'react';
import useAllState from '../hooks/useAllState';

export const StateContext = createContext();

const StateProvider = ({children}) => {
    const allState = useAllState()
    return (
        <StateContext.Provider value={allState}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;