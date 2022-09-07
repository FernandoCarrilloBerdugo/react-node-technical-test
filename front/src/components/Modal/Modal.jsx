import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteComment, getComments, putComment } from '../../redux/actions/actions'
import './Modal.css'

export default function Modal({ closeModal, type }) {

  const [data, setData] = useState(type.comment)

  const dispatch = useDispatch()

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  function handleEdit(e) {
    if (type.comment.email === data.email && type.comment.comment === data.comment) {
      closeModal(false) //Since there are no changes, there's no need to make a request
    } else {
      dispatch(putComment(data.id, data))
        .then(r => closeModal(false))
        .then(r => dispatch(getComments())) //To update the comments
    }
  }

  function handleDelete(e) {
    dispatch(deleteComment(data.id))
      .then(r => closeModal(false))
      .then(r => dispatch(getComments()))
  }

  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='title'>
          <h1>{type.title}</h1>
        </div>
        <div className='body'>
          {
            type.edit && //Display body for editting the comment
            (
              <div className='edit-container'>
                <div style={{ display: "flex", flexDirection: "column", fontSize: "medium" }}>
                  <label>email </label>
                  <input type="text" name="email" value={data.email} onChange={handleChange}></input>
                </div>
                <div style={{ fontSize: "medium" }}>
                  <label >comment </label>
                  <textarea name="comment" value={data.comment} onChange={handleChange}></textarea>
                </div>
              </div>
            )
          }
          {
            !type.edit && //Display body for deleting the comment
            (
              <div>
                <p>This action cannot be undone</p>
                <br />
                <br />
                <div className='delete-container'>
                  <p><b>{type.comment.email}</b></p>
                  <p >{type.comment.comment.slice(0, 120) + '...'}</p>
                </div>
              </div>
            )
          }
        </div>
        <div className='footer'>
          <button className='cancelBtn' onClick={() => closeModal(false)}>Cancel</button>
          <button onClick={type.edit ? handleEdit : handleDelete}>Confirm</button>
        </div>
      </div>
    </div>
  )
}
