import React from 'react'

export default function Author({Date}) {
  return (
    <div className='author'>
        <div className='authorimg'></div>
        <h4 className='datte'>Kartik Ranaut</h4>
        <h4 className='datte'>{Date.substring(0,10)}</h4>
    </div>
  )
}
