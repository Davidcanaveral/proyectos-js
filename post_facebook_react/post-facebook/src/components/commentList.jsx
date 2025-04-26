import React from 'react'

export default function CommentList({listCommentsData}) {
  return (
    <ul className="list-group list-group-flush">
        {
          listCommentsData.map((item)=>(
            <li key={item.id} className="list-group-item">{item.text}</li>
          ))
        }
    </ul>
  )
}
