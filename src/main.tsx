
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initCustomCursor } from './utils/cursorEffect'

createRoot(document.getElementById("root")!).render(<App />);

// Initialize custom cursor after the app is rendered
window.addEventListener('load', () => {
  initCustomCursor();
});
