// components/ClientLayout.tsx

'use client';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans antialiased">
      {children}
    </div>
  );
}
