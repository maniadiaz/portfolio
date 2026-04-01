import { useEffect } from 'react'
import { Routes, Route, useLocation  } from 'react-router-dom';
import { initGA, logPageView } from './app/utils/analystic'
import Layout from './app/components/Layout';
import Home from './app/pages/Home'
import Projects from './app/pages/Projects'
import Skills from './app/pages/Skills'
import About from './app/pages/About'

function App() {
  const location = useLocation()

  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    logPageView()
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="proyectos" element={<Projects />} />
        <Route path="habilidades" element={<Skills />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
