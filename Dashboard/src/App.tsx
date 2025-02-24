import { Route, Routes } from 'react-router'
import './App.scss'
import LayOut from './Components/LayOut'
import UserList from './Components/UserList/UserList'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route index element={<UserList />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
