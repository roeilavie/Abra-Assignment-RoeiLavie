import React, { useState } from 'react'
import { createContext } from 'react';
export const GlobalContext = createContext();

export default function Context({ children }) {
    const [quotes, setQuotes] = useState([]);
    return (
        <GlobalContext.Provider
            value={{
                quotes,
                setQuotes
            }}
        >
            {children}
        </GlobalContext.Provider>

    )
}
