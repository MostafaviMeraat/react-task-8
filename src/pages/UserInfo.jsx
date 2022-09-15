import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import Context from "../store/Context"


const UserInfo = () => {

  const context = useContext(Context)
  const [foundUsers, setFoundUsers] = useState([])

  const checkUsers = (e) => {
    if (context.users.length > 0) {
      context.users.map((user, index) => {
        if (user.name === e.target.value) {
          context.setUsers([...context.users], context.users[index].found = true)
        }
      })
    }
    else (alert('Register First '))
  }


  return (
    <div className="userInfo">

      <div className="search">
        <input
          autoFocus
          placeholder="Search User"
          name='search'
          type="search"
          onChange={checkUsers} />
      </div>

      <div className="foundUserWrapper">

        {context.users.map((user, index) => {
          return (
            <div className="foundUser" key={index}>
              {user.found &&
                <div>
                  <p><span>Name: </span> {user.name}</p>
                  <p><span>E-Mail: </span> {user.email}</p>
                  {user.seen ? <span className="seen" >Seen</span> : <span className="seen redSpan">Unseen</span>}
                  <NavLink className="edit" to={`/edit/${index}`}>Edit</NavLink>
                  <hr />
                </div>}
            </div>)
        })}

      </div>
    </div>
  )
}


export default UserInfo