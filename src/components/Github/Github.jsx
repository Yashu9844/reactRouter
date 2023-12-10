import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {

const data = useLoaderData()

// const [data, setdata] = useState([])

// useEffect(() => {
//   fetch('https://api.github.com/users/hiteshchoudhary')
//  .then(response => response.json())
//  .then(data =>{
//     console.log(data);
//     setdata(data)
//  })
// }, [])


  return (
    <div className='flex justify-center items-center'>
     <div className='bg-gray-600 p-4 text-white w-1/2 '>
      GitHub Followers :{data.followers}
      <img  className='text-center'      src={data.avatar_url} alt="Git picture"  width={300}/>
    </div>
   </div>
  )
}

export default Github

export const GithubInfo = async () =>{
    const response = await fetch('https://api.github.com/users/Yashu9844')
    return response.json()
}
