import * as React from 'react';
import { Theme, useTheme } from './component/Context/ThemeContext';

const MyPage = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <button onClick={() => setTheme(Theme.Dark)} className="bg-green-700">
                switch to dark theme
            </button>
            my page
        </div>
    )
}

export default MyPage;