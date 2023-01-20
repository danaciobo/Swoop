// import {createContext, useEffect, useState} from 'react'

// const DataContext = createContext({});

// export const context = ({children}) => {

//   const [items, setItems] = useState([]);

//   useEffect(() => {

//     getData()
//   }, []);

//   return (
//     <DataContext.Provider value={{}}>
//       {children}
//     </DataContext.Provider>
//   )
// }


// export default context;

import React from 'react'

function context () {
  return (
    <div>context</div>
  )
}

export default context