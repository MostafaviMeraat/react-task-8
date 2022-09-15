import React, { useContext, useState } from 'react'
import Context from '../store/Context'

const New = () => {
  const context = useContext(Context)
  const [user, setUser] = useState({
    name: '',
    email: '',
  })
  const [success, setSuccess] = useState(false)

  const inputChange = (e) => {
    if (e.target.name === 'name')
      setUser({
        name: e.target.value,
        email: user.email,
        seen: false,
      })
    else if (e.target.name === 'email') {
      setUser({
        name: user.name,
        email: e.target.value,
        seen: false,
      })
    }
  }

  const handelSubmit = () => {
    if(user.name === '' || user.email === ''){
      alert('Please enter your name and email')
    }
    context.setUsers([...context.users, user])
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 3000)

  }

  const close = () => {
    setSuccess(false)
  }


  return (
    <div className='new'>
      <div className="login">
        <h2 className='whiteText'>Register</h2>

        <div className="name">
          <input
            value={user.name}
            type='text'
            name='name'
            placeholder='Name'
            onChange={inputChange}
          />
        </div>

        <div className="email">
          <input
            value={user.email}
            type='email'
            name='email'
            placeholder='E-Mail'
            onChange={inputChange}
          />
        </div>

        <div className="button">
          <button
            onClick={handelSubmit}

          >Submit</button>
        </div>

        {success && <div>
          <div className='notif'>
            <i className="fa-solid fa-xmark close whiteText" onClick={close}></i>
            <p className='whiteText'>Successfully Submited</p>
          </div>
        </div>}


      </div>

    </div >
  )
}

export default New