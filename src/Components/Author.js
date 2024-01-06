import React from 'react'

export default function Author({Date}) {
  return (
    <div className='author'>
        <div className='authorimg'></div>
        <h6>Kartik Ranaut</h6>
        <h6>{Date}</h6>
    </div>
  )
}
