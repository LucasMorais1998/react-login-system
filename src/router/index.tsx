import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from '../providers/Auth/AuthProvider';

import { RequireAuth } from '../contexts/Auth/RequireAuth';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Private } from '../pages/Private';
import { Register } from '../pages/Register';
import { ProfileImageProvider } from '../providers/ProfileImage/ProfileImageProvider';

const Router = () => {
  return (
    <AuthProvider>
      <ProfileImageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/private"
              element={
                <RequireAuth>
                  <Private />
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </ProfileImageProvider>
    </AuthProvider>
  );
};

export { Router };
