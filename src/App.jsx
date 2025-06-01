
import { Routes ,BrowserRouter,Route} from 'react-router-dom'
import './App.css'
import Navbar from './assets/Navbar/Navbar'
import Login from './assets/Login/Login'
import Register from './assets/Register/Register'
import DashBoard from './assets/DashBoard/DashBoard'
import AddAmount from './assets/AddAmount/AddAmount'
import Transaction from './assets/Transaction/Transaction'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/dashboard' element={<DashBoard />}/>
    <Route path='/addmoney' element={<AddAmount />}/>
    <Route path='/transactions' element={<Transaction />}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
