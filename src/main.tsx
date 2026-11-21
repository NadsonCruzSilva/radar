import '@fontsource/space-grotesk/300.css'
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import { createRoot } from 'react-dom/client'
import '@/styles/tokens.css'
import { App } from './App'

// Reveal.js mantém estado global no módulo; o double-mount do StrictMode
// reinicializa o deck e lança "already initialized". Como o deck é montado
// uma única vez, dispensamos o StrictMode aqui.
createRoot(document.getElementById('root')!).render(<App />)
