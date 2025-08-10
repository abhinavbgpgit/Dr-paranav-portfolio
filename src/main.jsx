import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function applyInitialTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved ? saved === 'dark' : prefersDark;
  const body = document.body;
  const html = document.documentElement;
  body.classList.toggle('dark-mode', isDark);
  body.classList.toggle('light-mode', !isDark);
  html.classList.toggle('dark', isDark);
}

applyInitialTheme();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);