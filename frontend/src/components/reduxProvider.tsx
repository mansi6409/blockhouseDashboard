// src/components/ReduxProvider.tsx

'use client'; // This ensures that this component is treated as a client-side component

import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Import your Redux store

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
