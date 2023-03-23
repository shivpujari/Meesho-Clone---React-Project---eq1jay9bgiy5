import React, { useContext, useEffect, useState } from 'react'

export const DataAppContext = React.createContext();

const DataApp = (props) => {

  const [dataApp, setDataApp] = useState([]);

  return (
    <DataAppContext.Provider value={{ dataApp, setDataApp }}>
      {props.children}
    </DataAppContext.Provider>
  )
}

export default DataApp;