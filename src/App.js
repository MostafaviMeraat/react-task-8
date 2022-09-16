import { Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLayout from './pages/SharedLayout';
import UserInfo from './pages/UserInfo';
import Edit from './pages/Edit';
import New from './pages/New';
import Setting from './pages/Setting';
import { BrowserRouter } from 'react-router-dom';
import Context from './store/Context';
import { useState } from 'react'
import ReactSwitch from 'react-switch'


function App() {

  const [checkHeader, setCheckHeader] = useState(true)
  const [theme, setTheme] = useState('light')
  const [header, setHeader] = useState('header')
  const [footer, setFooter] = useState('footer')
  const [users, setUsers] = useState([{
    name: 'meraat',
    email: 'meraat@gmail.com',
    seen: false,
    found: false,
  },
  {
    name: 'masih',
    email: 'masih@gmail.com',
    seen: false,
    found: false,
  }])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <Context.Provider value={{
      checkHeader, setCheckHeader, toggleTheme, header, setHeader, footer, setFooter, users, setUsers, theme
    }}>
      <div className="App" id={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SharedLayout />}>

              <Route index element={<UserInfo />} />
              <Route path='edit/:index' element={<Edit />} />
              <Route path='new' element={<New />} />
              <Route path='setting' element={<Setting />} />


            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
