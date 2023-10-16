import './globals.css';

export const metadata = {
    description: 'Start with a solid foundation',
    title: 'next-tailwind-fontawesome starter',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
