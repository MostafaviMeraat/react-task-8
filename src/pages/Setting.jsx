import React from 'react'
import Context from '../store/Context'
import { useContext } from 'react'

const Setting = () => {

  const context = useContext(Context)

  const footer = (e) => {
    context.setFooter(e.target.value)
  }

  const header = (e) => {
    context.setHeader(e.target.value)
  }

  const changetheme = () => {
    context.toggleTheme()
  }

  const headerNfooterColor = (e) => {
    context.setColor(e.target.value)
  }


  return (
    <div className='setting'>
      <h3 className='whiteText'>Setting</h3>
      <form className='setting'>
        {/* theme */}
        <div className='theme whiteText'>Choose a Theme
          <div className='center dark '>
            <br />
            <label>Dark</label>
            <input
              type='radio'
              name='theme'
              className='dark'
              onChange={changetheme}
            />
          </div>
          <div className='center light'>
            <label>Light</label>
            <input
              type='radio'
              name='theme'
              className='light'
              onChange={changetheme}
              defaultChecked
            />
          </div>
        </div>
        {/* footer */}
        <div className='whiteText'>Choose A Footer
          <div>
            <input
              className='lightInput'
              type='text'
              name='footer'
              value={context.footer}
              onChange={footer}
            />
          </div>
        </div>
        {/* header */}
        <div className='whiteText'>Choose A Header
          <div>
            <input
              className='lightInput'
              type='text'
              name='header'
              value={context.header}
              onChange={header}
            />
          </div>
        </div>
        {/* dark color */}
        <div className='whiteText'>
          Choose Header and Footer Color
          <div>
            <input
              className='lightInput'
              type='text'
              name='darkColor'
              onChange={headerNfooterColor}
            />
          </div>
        </div>
      </form >
    </div>
  )
}

export default Setting