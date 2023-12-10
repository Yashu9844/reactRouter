import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid}=useParams()
  return (
   <div className='flex justify-center items-center'>
     <div className='bg-gray-600 p-4 text-white w-1/2 '>
      User: {userid}
    </div>
   </div>
  )
}

export default User
