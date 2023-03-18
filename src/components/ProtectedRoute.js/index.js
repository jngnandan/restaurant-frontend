import { Outlet, useNavigate, Navigate } from 'react-router-dom'

import Cookies from 'js-cookie'
import { useState } from 'react'

import React from 'react'

function ProtectedRoute(props) {
    const [cookie, setCookie] = useState('cool')

    const navigate = useNavigate()

    setCookie(Cookies.get('jwt_Token'))
    console.log(cookie)

  return (
    <div>
        {!cookie? <Outlet/>: <Navigate to='/login' />}
    </div>
  )
}

export default ProtectedRoute