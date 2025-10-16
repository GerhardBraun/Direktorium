import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('Service Worker erfolgreich registriert:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker Registrierung fehlgeschlagen:', error);
      });
  });

  let refreshing = false;

  // Aktuelle und gespeicherte Version vergleichen
  const checkVersion = () => {
    fetch('./version-info.json')
      .then(response => response.json())
      .then(versionInfo => {
        const storedAppVersion = localStorage.getItem('app-version');

        // Beim ersten Besuch oder nach App-Update
        if (storedAppVersion && storedAppVersion !== versionInfo.appVersion) {
          if (confirm(`Neue Version verfügbar (${versionInfo.appVersion}):\n${versionInfo.updateNotes}\n\nJetzt aktualisieren?`)) {
            window.location.reload();
          }
        }

        // Version speichern
        localStorage.setItem('app-version', versionInfo.appVersion);
      });
  };

  // Bei Seitenstart Version prüfen
  checkVersion();

  // Bei Service Worker Update prüfen
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      checkVersion();
    }
  });
}