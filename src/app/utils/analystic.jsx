import ReactGA from 'react-ga4'

// Inicializar Google Analytics
export const initGA = () => {
  ReactGA.initialize('G-0NWR5JFNXW')
}

// Registrar visita a página
export const logPageView = () => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: window.location.pathname + window.location.search 
  })
}

// Eventos personalizados
export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  })
}