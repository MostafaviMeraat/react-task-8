import React, { useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Context from '../store/Context'
import ReactSwitch from 'react-switch'

const SharedLayout = () => {
  const context = useContext(Context)
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }

  const changeTheme = () => {
    context.toggleTheme()
  }

  // className={({isActive }) => (isActive ? 'active navLink' : 'navLink')}
  return (
    <div className='shared'>
      {context.checkHeader && <h2 className='header' style={{ color: `${context.color}` }}>{context.header}</h2>}
      <i className="back fa-solid fa-arrow-left" onClick={back} ></i>
      <div className="wrapper">
        <NavLink to='/' onClick={() => (context.setCheckHeader(true))}>User Info </NavLink>
        {/* <NavLink to='/edit/:index' className='navLink'>Edit </NavLink> */}
        <NavLink to='/new' className={({ isActive }) => (isActive ? 'active' : 'navLink')} onClick={() => (context.setCheckHeader(false))} >New User </NavLink>
        <NavLink to='/setting' className={({ isActive }) => (isActive ? 'active' : 'navLink')} onClick={() => (context.setCheckHeader(true))}>Setting </NavLink>
        <div>
          <ReactSwitch onChange={changeTheme} checked={context.theme === 'dark'} onClick={() => (context.setCheckHeader(true))} />
          <p className='whiteText'>{context.theme} Mode</p>
        </div>

      </div>

      <hr />

      <Outlet />
      <footer className='footer'>
        <h2 style={{ color: `${context.color}` }}>{context.footer}</h2>
      </footer>
    </div>

  )
}

export default SharedLayout