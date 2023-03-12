import React from 'react'
import FeedbackItem from './FeedbackItem';


function FeedbackList({feedback, setFeedback}) {
  const onFeedbackDelete = (id) => {
    setFeedback(feedback.filter((item)=>item.id !== id))
  }
    if  (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>;
      }

  return (
    <div className='feedback-list'>
      {feedback.map((item)=> (
       <FeedbackItem key={item.id} item={item} setFeedback={()=>{onFeedbackDelete(item.id)}}/>
      ))}
      
    </div>
  )
}

export default FeedbackList
