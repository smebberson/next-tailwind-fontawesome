import { config } from '@fortawesome/fontawesome-svg-core';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

import '../styles/globals.css';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
