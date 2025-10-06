import ReactGA from 'react-ga4'

// Inicializar Google Analytics
export const initGA = () => {
  const googleId = import.meta.env.VITE_GOOGLE_ID;
  ReactGA.initialize(googleId);
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