import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './pages/Test.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import RTK from './pages/RTK.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RTK />
    </Provider>
  </StrictMode>,
)
