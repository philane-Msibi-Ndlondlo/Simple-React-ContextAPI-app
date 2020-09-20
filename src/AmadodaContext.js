import React, { useState } from 'react';

const AmadodaContext = React.createContext();

export const AmadodaContextProvider = ({ children }) => {

    const [ name, setName ] = useState('');

    const [ amadoda, setAmadoda ] = useState(['Shali']);

    const data = {
        name,
        setName,
        amadoda,
        setAmadoda
    }

    return <AmadodaContext.Provider value={data}>
        {children}
    </AmadodaContext.Provider>
}

export default AmadodaContext;