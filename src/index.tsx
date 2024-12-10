import { createRoot } from 'react-dom/client';
import { App } from './App';

import './index.scss';
import React from 'react';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
