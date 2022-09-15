import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Context from '../store/Context'

const Edit = () => {

  const context = useContext(Context)
  let { index } = useParams()
  index = parseInt(index)
  let myname = ''
  let myemail = ''
  const navigate = useNavigate()




  const inputChange = (e) => {

    if (e.target.name === 'name') { myname = e.target.value }
    if (e.target.name === 'email') { myemail = e.target.value }
  }

  const handelModify = () => {

    context.setUsers([...context.users], context.users[index].name = myname)
    context.setUsers([...context.users], context.users[index].email = myemail)
    context.setUsers([...context.users], context.users[index].seen = true)
    navigate(-1)

  }

  return (
    <div className='new'>
      <div className="login">
        <h2 className='header'>Edit</h2>

        <div className="name">
          <input
            // value={context.users[index].name}
            type='text'
            name='name'
            onChange={inputChange}
          />
        </div>

        <div className="email">
          <input
            // value={context.users[index].email}
            type='email'
            name='email'
            onChange={inputChange}
          />
        </div>

        <div className="button">
          <button
            onClick={handelModify}

          >Modify</button>
        </div>

      </div>

    </div>
  )
}

export default Edit