import React from 'react'
import pikachuImg from "../assets/img/imagePikachu.jpeg"
import profileImg from "../assets/img/Profile.png"; 
import { useState, useEffect } from 'react'
import CommentForm from './commentForm';
import CommentList from './commentList';

export default function Post() {

  //Likes
  let [likes, setLike] = useState(0);
  let UpdateLikes = () => {
    setLike(likes+1);
  };
  let [btnComentario, setBtnComentario] = useState(false);
  let isShowComment = () => setBtnComentario(!btnComentario);
  //funcion para obtener comentarios del form
  let [textComment, setTextComment] = useState("")
  let getCommentData = (comment)=>{
    setTextComment(comment); 
  }
  let listComments = [
    {
      id:1,
      text:"fuck*** looser HAHAHAHAHAHAHA"
    },
    {
      id:2,
      text:"hahahaha that's such a true 😂"
    }
  ];
  let[listData,setListData] =useState(listComments);
  useEffect(()=>{
    if(textComment){
      setListData([
        ...listData, 
        {id:listData.length+1,text:textComment}
      ]);
    }
  },[textComment]);

  let formatDate = ()=>{
    let date = new Date();
    let options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleString('en-CO', options).replace(',', ' at');
  }

  return (
    <div className="card" style={{"width":"30rem"}}>
        <div className="card-body"> 
          <div className="Profile__content" style={{"width":"70%"}}>
            <img src={profileImg} alt="Profile" className="Profile__Image"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
            <div className="Info__content">
              <p className="card__title">User</p>
              <small className="Date__post">{formatDate()}</small>
            </div>
          </div>
          <br />
            <p className="card-text">When i rewrite the senior's website:</p>
            <img src={pikachuImg}  className="card-img-top" alt=""/>
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-around">
          <span><i className="bi bi-hand-thumbs-up"></i> {likes}</span>
          <span> {listData.length} <i className="bi bi-chat"></i> </span>
        </li>
          <li className="list-group-item d-flex justify-content-around">
            <button onClick={UpdateLikes} className="btn"><i className="bi bi-hand-thumbs-up"></i> Like</button> 
            <button onClick={isShowComment} className="btn"><i className="bi bi-chat"></i> Comment</button> 
          </li>
        </ul>
        <div className="card-footer">
          {btnComentario && <CommentForm getCommentData = {getCommentData} />}
        </div>
        <CommentList listCommentsData ={listData}/>
    </div> 
  )
}
