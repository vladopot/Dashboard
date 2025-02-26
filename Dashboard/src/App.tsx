import { Route, Routes } from 'react-router'
import './App.scss'
import LayOut from './Components/LayOut'
import UserList from './Components/UserList/UserList'
import UserPage from './Components/UserPage/UserPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route index element={<UserList />} />
          <Route path=':id' element={<UserPage />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
