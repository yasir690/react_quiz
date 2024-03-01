
import React, { useContext } from 'react'
import Start from './Components/Start';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import { QuizContext } from './Context/QuizHolder';
const App = () => {

  const {start,exit}=useContext(QuizContext);
  return (
    <>
      {
       exit===false ?
       <>

       {
        start===true?<Quiz/>:<Start/>
       }
       </>
       :
       <Result/>
      }
    </>
  )
}

export default App


