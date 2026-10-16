import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router';
import { MotionConfig } from 'motion/react';
import '@fontsource-variable/fraunces';
import '@fontsource-variable/nunito-sans';
import '@fontsource/jetbrains-mono/latin-400.css';
import App from './App';
import './styles.css';

// The normal website uses clean URLs; exported local HTML uses hash routes.
const Router = window.location.protocol === 'file:' ? HashRouter : BrowserRouter;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><Router><MotionConfig reducedMotion="user"><App/></MotionConfig></Router></React.StrictMode>,
);
