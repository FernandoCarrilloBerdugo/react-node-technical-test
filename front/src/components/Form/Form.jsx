import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComments, postComment } from '../../redux/actions/actions';
import Modal from '../Modal/Modal';
import './Form.css'

export default function Form() {

  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments)
  // eslint-disable-next-line
  const [data, setData] = useState({
    email: '',
    comment: '',
  })
  const [error, setError] = useState(false) //To show error message
  const [modal, setModal] = useState(false)
  const [modalType, setModalType] = useState({ //This is used to set the body and functions of the modal
    title: '',
    edit: true,
    comment: {},
  })

  useEffect(() => {
    dispatch(getComments())
  }, [dispatch])

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  function handleEdit(comment) {
    setModalType({
      title: "Edit comment",
      edit: true,
      comment: comment
    })
    setModal(true)
  }

  function handleDelete(comment) {
    setModalType({
      title: "Are you sure you want to delete this comment?",
      edit: false,
      comment: comment,
    })
    setModal(true)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (data.email === '' || data.comment === '') setError(true)
    else {
      setError(false)
      dispatch(postComment(data)).then(r => dispatch(getComments()))
      setData({
        email: '',
        comment: '',
      })
    }
  }

  return (
    <div >
      {modal && <Modal closeModal={setModal} type={modalType} />}
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
                  <div className='option' onClick={() => handleEdit(comment)} >Edit</div>
                  <div className='option' onClick={() => handleDelete(comment)}>Delete</div>
                </div>
              </div>
            ))
            : <h3>There are no comments yet</h3>
        }
      </div>
    </div>
  )
}
