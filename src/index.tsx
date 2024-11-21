import { createRoot } from 'react-dom/client';
import { App } from './App';

import './index.scss';
// import { App2 } from './App2';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
