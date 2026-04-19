import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import MainContext from './Context/MainContext';
import InitialLoader from './MainComponents/InitialLoader';

const appName = import.meta.env.VITE_APP_NAME;

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
        <MainContext>
        <InitialLoader>
            <App {...props} />
        </InitialLoader>
        </MainContext>
    );
    },
    progress: {
        color: '#4B5563',
    },
});
