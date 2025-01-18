

import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className=' h-screen   flex justify-center items-center gap-8  '>

        
      <Link to={'/trasaction'} className='bg-blue-600 p-2 text-lg font-semibold border rounded-lg'> Transaction</Link> 
      
      <Link to={'/visa'} className='bg-blue-600 p-2 text-lg font-semibold border rounded-lg' >Visa card</Link>

      
    </div>
  )
}
