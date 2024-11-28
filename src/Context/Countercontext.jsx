import React, { useState } from 'react'

export const Countercontext = createcontext()
export const Counterprovider = (Children)=>{
    const [count,setcount] = useState(0)
    const increment = ()=>{
        setcount(count+1)

    }

    return(
        <Countercontext.Provider value={{count,increment}}>
            {Children}

        </Countercontext.Provider>
    )
}