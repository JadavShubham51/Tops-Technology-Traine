import React, { createContext, useState } from 'react'
import ChildB from './ChildB';
import ChildC from './ChildC';


export const data1 = createContext();
function Chida() {
    const [name,setname] = useState("shubham");
  return (
    <div>
        <data1.Provider value={{name,setname}} >
            <h1>Hello i am child A:- {name}</h1>
            <ChildB/>
            <ChildC/>
      </data1.Provider>
    </div>
  )
}

export default Chida
