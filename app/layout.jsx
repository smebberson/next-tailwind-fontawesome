import Link from 'next/link';
import './globals.css';

export const metadata = {
    description: 'Start with a solid foundation',
    title: 'next-tailwind-fontawesome starter',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col min-h-screen">
                    <div className="flex-grow">{children}</div>
                </div>

                <div className="bg-emerald-700 w-full text-white p-4 border-t fixed bottom-0 flex justify-center">
                    <footer>
                        <ul className="flex gap-2">
                            <li>
                                <Link href="/">Homepage</Link>
                            </li>
                            <li>
                                <Link href="/ssr">SSR rendering</Link>
                            </li>
                            <li>
                                <Link href="/client">Client rendering</Link>
                            </li>
                        </ul>
                    </footer>
                </div>
            </body>
        </html>
    );
}
