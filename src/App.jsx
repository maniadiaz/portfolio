import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './app/components/Layout';

import './App.css'

// Lazy loading de páginas
const Home = lazy(() => import('./app/pages/Home'))
const Projects = lazy(() => import('./app/pages/Projects'))
const Skills = lazy(() => import('./app/pages/Skills'))
const Contact = lazy(() => import('./app/pages/Contact'))
const CV = lazy(() => import('./app/pages/CV'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="proyectos" element={<Projects />} />
        <Route path="habilidades" element={<Skills />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="cv" element={<CV />} />
      </Route>
    </Routes>
  )
}

export default App
