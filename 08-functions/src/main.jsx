import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
 
// React renders only ONE root → wrap multiple components
createRoot(document.getElementById('root')).render(
 <>

    <App />
     <App2/>
 </>
    
  
)
// onClick={func} ✅ correct
// onClick={func()} ❌ wrong (runs immediately)
// Use event.target.value to get input value
// Arrow / inline functions can be used inside events
// Wrap multiple components in <> </>
// deltaY > 0 → scroll down, < 0 → scroll up