import {BrowserRouter, Route, Routes} from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={} />
        <Route path="/login" element={} />
        <Route path="/register" element={} />
        <Route path="/private" element={} />
      </Routes>
    </BrowserRouter>
  );
} 

export {Router};