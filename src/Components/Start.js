
import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

const Start = () => {
  const {setstart}=useContext(QuizContext);
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <button className='text-2xl text-cyan-400 border-2 border-orange-400 rounded outline-none p-2 cursor-pointer' onClick={()=>setstart(true)}>Start</button>
    </div>
  )
}

export default Start