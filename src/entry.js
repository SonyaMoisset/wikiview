import React from 'react';
import { render } from 'react-dom';
import WikipediaViewer from './components/WikipediaViewer';

import './css/main';

render(<WikipediaViewer />, document.getElementById('wikipedia-viewer'));
