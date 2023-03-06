import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { ThemeProvider } from './theme/Theme';

// styles
import './styles/index.css';
import 'flowbite';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);