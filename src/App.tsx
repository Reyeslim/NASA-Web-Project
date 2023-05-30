import './App.css'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import VideoBackground from './components/VideoBackground/videoBackground'

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <VideoBackground videoSrc="Multimedia/Videos/earth_-_28531 (Original).mp4" />
    </div>
  )
}

export default App
