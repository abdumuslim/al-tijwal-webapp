
import './font-strategy.css'; // Load first
import './index.css';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById("root")!).render(<App />);
