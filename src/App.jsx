import Header from './components/Header'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Post from './components/Post'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Post />
      <Home />
      <Navbar />
    </>
  )
}

export default App
