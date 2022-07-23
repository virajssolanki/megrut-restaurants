import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import React from 'react';
import { Theme, ThemeContext } from './component/Context/ThemeContext';
import { AuthProvider } from './component/Context/Context';

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = React.useState(Theme.Light);
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>            
    )
}

export default MyApp
