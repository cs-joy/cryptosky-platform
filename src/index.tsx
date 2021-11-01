import { defaultTheme } from '@medly-components/theme';
import { CssBaseline } from '@medly-components/core';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
