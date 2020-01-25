import React from 'react'

export default function Loading() {
  const gifStyle = {
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div style={gifStyle}>
      <img src={require('../assets/loading.gif')} alt='Loading ...' style={{height: '100px'}} />
    </div>
  )
}
