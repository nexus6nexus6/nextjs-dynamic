'use client';

import { DynamicContextProvider } from '@dynamic-labs/sdk-react';
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector';

export default function Providers({ children }: { children: React.ReactNode }) {


    return (
      <>
        <DynamicContextProvider
            settings={{
                environmentId: 'a12ca124-82b8-4cac-afb2-3f9b0a83be1f',
            }}
        >
            <DynamicWagmiConnector>
                {children}
            </DynamicWagmiConnector>
        </DynamicContextProvider>
      </>
    );
}
