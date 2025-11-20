import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes/Routes';
import { StrictMode } from 'react';
import '@fontsource/orbitron';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App

