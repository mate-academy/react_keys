import { createRoot } from 'react-dom/client';
import { ShowCurrentKey } from './ShowCurrentKey';
import './index.scss';
import React from 'react';

createRoot(document.getElementById('root') as HTMLElement).render(
  <ShowCurrentKey />,
);
