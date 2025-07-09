import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Redux-Todos/Store.js'
// import store from './apps/store.js'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
         <App />
    </Provider>
 
  
 
  </StrictMode>
)
