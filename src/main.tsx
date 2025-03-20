
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './override-fonts.css' // Import the font override CSS

createRoot(document.getElementById("root")!).render(<App />);
