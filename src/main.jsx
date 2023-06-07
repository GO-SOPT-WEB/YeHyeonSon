import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App.jsx'
import './index.css'
import GlobalStyle from './style/GlobalStyle.jsx'

const theme = {
  primaryColor: '#dd60c0',
  secondaryColor: '#07b05b',
  fontFamily: 'bitbit, sans-serif',
  fontSize: '1.2rem',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
