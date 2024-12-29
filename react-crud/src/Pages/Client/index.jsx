import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderClient from '../../Layout/Header-client'

const ClientLayout = () => {
  return (
    <div>
        <HeaderClient/>
        <Outlet/>
    </div>
  )
}

export default ClientLayout