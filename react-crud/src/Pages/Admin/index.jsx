import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../Layout/Admin-Header'

const AdminLayout = () => {
  return (
    <div>
        <HeaderAdmin/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout