import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function Logut() {
    const {logout}=useAuth0()
  return (
    <button onClick={()=>logout()}>Logut</button>
  )
}

export default Logut