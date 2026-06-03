<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
}
=======
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
>>>>>>> 6b82e306feba589c6fbf283b723295def5b493dd
