import React from 'react'
import AdminNavbar from '@/AdminComponents/AdminNavbar'
import Sidebar from '@/AdminComponents/Sidebar'
const AppLayout = ({children}) => {
  return (
    <div className='bg-gray-200'>
        <AdminNavbar/>
        <Sidebar/>
        <main>
            {children}
        </main>
    </div>
  )
}

export default AppLayout