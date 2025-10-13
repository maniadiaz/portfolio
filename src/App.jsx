import { useEffect } from 'react'
import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation  } from 'react-router-dom';
import { initGA, logPageView } from './app/utils/analystic'
import Layout from './app/components/Layout';

import './App.css'

// Lazy loading de páginas
const Home = lazy(() => import('./app/pages/Home'))
const Projects = lazy(() => import('./app/pages/Projects'))
const Skills = lazy(() => import('./app/pages/Skills'))
const Python = lazy(() => import('./app/pages/Python'))
const Contact = lazy(() => import('./app/pages/Contact'))
const About = lazy(() => import('./app/pages/About'))

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
        <Route path="python" element={< Python /> } />
        <Route path="contacto" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
