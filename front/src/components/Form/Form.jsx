import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComments, postComment } from '../../redux/actions/actions';
import './Form.css'

export default function Form() {

  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments)

  const [data, setData] = useState({
    email: '',
    comment: '',
  })
  const [error, setError] = useState(false) //To show error message
  const [openBox, setOpenBox] = useState(false)

  useEffect(() => {
    dispatch(getComments())
  },[dispatch])

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  function handleClick(e){

  }

  function handleSubmit(e) {
    e.preventDefault()
    if (data.email === '' || data.comment === '') setError(true)
    else {
      setError(false)
      dispatch(postComment(data)).then(r => dispatch(getComments()))
    }
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <h1>Leave comments</h1>
          {error && <span>Please fill both inputs</span>}
          <input placeholder='email' type="email" name="email" value={data.email} onChange={handleChange}></input>
          <textarea resize="none" placeholder='comment...' name="comment" value={data.comment} onChange={handleChange}></textarea>
          <button type="submit">Comment</button>
        </div>
      </form>

      <div className='comments-container'>
        {
        comments.length > 0
        ? comments.map((comment, i) => (
          <div className="comment" key={i}>
            <p><b>{comment.email}</b></p>
            <span>{comment.comment}</span>
            <div className='comment-options'>
              <div className='option'>edit</div>
              <div className='option'>delete</div>
            </div>
            //Set modal here
          </div>
        ))
        : <h1>loading</h1>
        }
      </div>
    </div>
  )
}
