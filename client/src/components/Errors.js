import React from 'react'

export default function Errors({errors, clearError}) {
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
