import React, { useContext, useEffect, useState,createContext } from 'react'

export const DataAppContext = React.createContext();

const DataApp = (props) => {

  const [dataApp, setDataApp] = useState([]);
  const[searchData,setsearchData]=useState([])
  const [data, setData] = useState([])

  return (
    <DataAppContext.Provider value={{ data, setData, dataApp, setDataApp, searchData, setsearchData, dataApp, setDataApp }}>
      {props.children}
    </DataAppContext.Provider>
  )
}

export default DataApp;