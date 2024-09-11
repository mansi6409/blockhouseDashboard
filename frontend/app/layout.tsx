// app/layout.tsx

import './globals.css';
import ReduxProvider from '../src/components/reduxProvider'; // Import your client-side Redux provider
import ClientLayout from './clientLayout';

export const metadata = {
  title: 'Blockhouse Dashboard',
  description: 'A dashboard for Blockhouse to display charts for stocks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Link to the hexagon favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ReduxProvider>
          <ClientLayout>{children}</ClientLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
