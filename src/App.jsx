import { useEffect } from 'react';
import { Router, useLocation } from 'react-router-dom';
import './global/preline';
import Navigator from './components/Navigator';

function App() {
    const location = useLocation();

    useEffect(() => {
        window.HSStaticMethods.autoInit();
    }, [location.pathname]);

    return <Navigator />;
}

function RootComponent() {
    return (
        <div className={'bg-slate-700 text-white'}>
            <App />
        </div>
    );
}

export default RootComponent;
