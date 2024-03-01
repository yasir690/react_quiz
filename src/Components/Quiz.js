

import React, { useContext, useState,useEffect } from 'react'
import { QuizContext } from '../Context/QuizHolder';

const Quiz = () => {
  const [current,setcurrent]=useState(0);
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Box current={current} next={setcurrent}/>
    </div>
  )
}

const Box=({current,next})=>{
  const [ans,setans]=useState('');
  const {quizzes,setexit,setcorrect,correct}=useContext(QuizContext);
  
// Reset the ans state when the current question changes
useEffect(() => {
  setans('');
}, [current]);

  const handle=()=>{

    if(quizzes[current].correct===ans){
      setcorrect(correct+1);
      setans('');
    }

    if((current+1===quizzes.length)){
      setexit(true)
    }
    next(current+1);
  }
  return (
    <div className='w-[40%] border shadow-lg rounded overflow-hidden'>
      <div>
        {current+1}) {quizzes[current].question}  
      </div>
      <div className='grid grid-cols-2'>
      <div className={`${ans==='a'?'bg-green-500 text-white':''} p-2 border cursor-pointer` } onClick={()=>setans("a")}>{quizzes[current].a}</div>
     <div className={`${ans==='b'?'bg-green-500 text-white':''} p-2 border cursor-pointer`} onClick={()=>setans("b")}>{quizzes[current].b}</div>     
      <div className={`${ans==='c'?'bg-green-500 text-white':''} p-2 border cursor-pointer`} onClick={()=>setans("c")}>{quizzes[current].c}</div>
      <div className={`${ans==='d'?'bg-green-500 text-white':''} p-2 border cursor-pointer`} onClick={()=>setans("d")}>{quizzes[current].d}</div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='text-1xl px-3 mt-2 rounded   cursor-pointer bg-yellow-500' onClick={()=>setans('')}>Reset</div>
        <div className='text-1xl px-3 mt-2 rounded cursor-pointer bg-green-500' onClick={handle}>Save</div>
        <div className='text-1xl px-3 mt-2 rounded cursor-pointer bg-red-500' onClick={()=>setexit(true)}>Exit</div>

      </div>
    </div>
  )
}
export default Quiz