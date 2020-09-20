import React, { useContext } from 'react'

import AmadodaContext from './AmadodaContext';



const AddIndoda = () => {

    const { name, setName, amadoda, setAmadoda } = useContext(AmadodaContext);

return(
    <div>
        <form>
            <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
            <p>{name}</p>
            <button onClick={(event) => {
            event.preventDefault();
            setAmadoda([...amadoda, name])
            setName('')
            } 
        } >Add</button>
        </form>
    </div>
)

    }

export default AddIndoda;