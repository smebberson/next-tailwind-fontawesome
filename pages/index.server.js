import { Suspense } from 'react';
import Header from './components/header.server';

function HomePage() {
    return (
        <Suspense fallback={'Loading...'}>
            <Header />
        </Suspense>
    );
}

export default HomePage;
