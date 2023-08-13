import './src/style.css'

import {createRoot} from 'react-dom/client'
import App from './src/components/App'
import { FiltersProvider } from './src/context/FiltersContext'

const root = createRoot(document.getElementById('app'))

root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
