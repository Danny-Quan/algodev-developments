import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex flex-col items-center h-96 justify-center'>
      <h1 className='font-bold text-center text-black text-4xl'>404 Error! <br/> Page not found</h1>
    <button className='bg-primary text-white px-5 py-2 rounded-full mt-5 mb-10'><Link to={'/'}>back to home</Link></button>
    </div>
  )
}

export default ErrorPage