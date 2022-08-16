import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const UserInfo = () => {
    const location = useLocation()
    const [user, setUser] = useState(location.state.user)
    console.log(user)
    return (
        <div>UserInfo</div>
    )
}

export default UserInfo