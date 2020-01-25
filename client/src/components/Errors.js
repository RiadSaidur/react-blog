import React, { useContext } from 'react'

import UserContext from '../store/userContext/UserContext'

export default function Errors() {
  const { clearError, user: { errors } } = useContext(UserContext);

  const removeError = (idx) => clearError(idx)

  return (
    <div>
      {errors ? errors.map((error, idx) =>
        <p 
          key={idx} 
          className='errors' 
          onClick={() => removeError(idx)}>
            {error}
        </p>) : ''
      }
    </div>
  )
}
