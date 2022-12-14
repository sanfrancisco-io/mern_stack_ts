import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Deck from './pages/Deck';

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/deck/:id', element: <Deck /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
