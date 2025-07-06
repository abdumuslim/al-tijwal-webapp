
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './components/ThemeProvider'; // Import ThemeProvider
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import './index.css';
import './font-strategy.css';
import './override-fonts.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider> {/* Wrap with HelmetProvider */}
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
