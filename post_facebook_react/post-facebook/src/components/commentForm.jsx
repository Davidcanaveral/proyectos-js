import React, { useState } from 'react'

export default function CommentForm({getCommentData}) {
  let [comment,setComment] = useState("");
  let getComment = (e)=>{
    setComment(e.target.value);
  }
  return (
    <div className="comentarios">
      <textarea placeholder="Comment Something..." value ={comment} onChange={getComment} className="text__comment">

      </textarea>
      <button className="btn"
        onClick={()=>getCommentData(comment)}
      ><i class="bi bi-send-fill"></i></button>
    </div>
  )
}
