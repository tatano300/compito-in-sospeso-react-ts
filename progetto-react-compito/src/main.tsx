import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { TaskApp } from './components/TaskApp'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskApp></TaskApp> 
  </React.StrictMode>,
);
