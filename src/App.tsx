import { Header } from './components/Header'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Login } from './pages/Login'
import { Feed } from './pages/Feed'
import { Register } from './pages/Register'

function App() {

  return (
    <>
    <Router>
      <GlobalStyle />
      {/* < Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
