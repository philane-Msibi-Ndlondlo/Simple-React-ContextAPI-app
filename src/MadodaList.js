import React, { useContext } from 'react'

import AmadodaContext from './AmadodaContext';

export default function MadodaList() {

    const data = useContext(AmadodaContext);

    return (
        <div>
            <h1>Amadonda</h1>
            <ul>
            {
                data.amadoda.map(indoda => {
                return ( <li>{indoda}</li> );
                })
            }
            </ul>
        </div>
    )
}
