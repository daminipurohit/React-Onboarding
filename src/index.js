import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/app-constants';
import App from './App';


const ReactRoot = createRoot(document.getElementById('react-root'));
ReactRoot.render(<><GlobalStyle /><App /></>);