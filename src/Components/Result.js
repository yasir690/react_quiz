
import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

const Result = () => {
  const {setstart,setexit,correct,quizzes}=useContext(QuizContext);

  const play=()=>{
    setexit(false);
    setstart(false);
  }
  return (
    <div className='h-screen w-full flex justify-center items-center'>
    <div className='w-[40%] shadow rounded overflow-hidden text-center'>
    <h1 className='text-2xl text-center text-cyan-500'>{`${correct} out of ${quizzes.length}`}</h1>
      <button className='bg-green-500 rounded p-3' onClick={play}>play</button>
    </div>
    </div>
  )
}

export default Result