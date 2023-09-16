import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./components/App"

import "./css/style.css";
import "./css/responsive.css";

const root = createRoot(document.getElementById('root'));
root.render(<App/>);
