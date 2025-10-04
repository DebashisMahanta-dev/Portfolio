import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; // Import the global styles here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ----- Unregister any service workers and clear caches -----
// This helps ensure an old service worker doesn't continue serving cached
// favicons or other assets. It runs on app startup in the browser.
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  // Unregister all service workers
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((reg) => {
      try { reg.unregister(); } catch (e) { /* ignore */ }
    });
  }).catch(() => {});

  // Clear all caches (best-effort)
  if ('caches' in window) {
    caches.keys().then((keys) => {
      keys.forEach((key) => caches.delete(key));
    }).catch(() => {});
  }
}

