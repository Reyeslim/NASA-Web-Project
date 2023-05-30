import './App.css'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Card from './components/Card/card'
import VideoBackground from './components/VideoBackground/videoBackground'
import Dashboard from './views/Dashboard/dashboard'

function App() {
  return (
    <div className="App">
      
      <Dashboard />
      <Card title="Título de la Tarjeta" extraInfo="Información adicional" onClick={() => console.log('Button clicked')} />
    </div>
  )
}

export default App
