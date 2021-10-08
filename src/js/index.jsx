// ===== React imports ===== //
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// ===== SASS import (just for webpack) ===== //
import '../sass/main.scss';

render(<App/>, document.querySelector('#root'));