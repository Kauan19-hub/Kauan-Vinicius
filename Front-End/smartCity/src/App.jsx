import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes/Routes';
import { StrictMode } from 'react';

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

