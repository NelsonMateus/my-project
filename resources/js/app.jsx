import React from 'react';
import { createRoot } from 'react-dom/client';
import InteractiveMap from '../../src/app/InteractiveMap';


const rootElement = document.getElementById('map-root');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<InteractiveMap />);
}
