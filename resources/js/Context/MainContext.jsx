import {createContext, useContext, useEffect, useState} from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const MainDataContext = createContext() 

const MainContext = ({children}) => {
    const [showResponsiveSidebar, setShowResponsiveSidebar] = useState(false)
    const [toggleSidebar, setToggleSidebar] = useState(false)


    const contexts = {showResponsiveSidebar, setShowResponsiveSidebar, toggleSidebar, setToggleSidebar}

  return (
        <MainDataContext.Provider value={contexts}>
                <ToastContainer autoClose={1000}/>
                {children}
        </MainDataContext.Provider>
  )
}

export default MainContext