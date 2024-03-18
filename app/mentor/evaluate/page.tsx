import React from 'react'

const page = () => {
const questions=[
  {question:"How was the student's academic and technical background on a scale of 1 to 5", weight:5},
  {question:"How was the student's academic and technical background on a scale of 1 to 5", weight:15},
  {question:"How was the student's academic and technical background on a scale of 1 to 5", weight:10},
  {question:"How was the student's academic and technical background on a scale of 1 to 5", weight:5},
  {question:"How was the student's academic and technical background on a scale of 1 to 5", weight:25}

];

  return (
    <div>
      <div>
        <p>Evaluation Form</p>
        <ol>
          <li>
            {questions.map((quest)=>(
              
            ))}
          </li>
        </ol>
      </div>
    </div>
  )
}

export default page