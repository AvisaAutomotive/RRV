import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css'; // Optional: Add any styles you want here
import App from './App'; // Import your App component

const rootElement = document.getElementById('root'); // Get the root DOM element
const root = createRoot(rootElement); // Create a root using createRoot

root.render(
    <React.StrictMode> {/* Optional: Wrap in StrictMode for additional checks */}
        <App /> {/* Render your App component */}
    </React.StrictMode>
);