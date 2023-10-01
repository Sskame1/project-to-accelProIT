import { Routes, Route } from 'react-router-dom'

import { Homepage } from './pages/Homepage';
import { Header } from './components/header';
import { NotFoundPage } from './pages/NotFoundpage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
