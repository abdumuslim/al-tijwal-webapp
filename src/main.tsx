
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './components/ThemeProvider'; // Import ThemeProvider
import './index.css';
import './font-strategy.css';
import './override-fonts.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme"> {/* Wrap App */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
