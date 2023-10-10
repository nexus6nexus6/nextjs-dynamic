'use client';

import { useAccount, useSwitchNetwork } from 'wagmi';


export interface ISwitchNetworkProps {}

export const SwitchNetwork: React.FC<ISwitchNetworkProps> = ({}) => {
    const { chains, switchNetwork } = useSwitchNetwork();
    const { isConnected } = useAccount();

    return (
        <div style={{padding:"20px"}}>
            <div style={{ display:'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 0 20px 0'}}>
                <b>Chains:</b>
            </div>
            {isConnected && (
                <>
                    <ul>
                        {chains?.map((chain, index) => (
                            <li key={index}>{chain.id}</li>
                        ))}
                    </ul>
                    <button onClick={() => switchNetwork?.(137)} style={{ padding: '8px 15px', borderRadius: '7px', border:'1px solid gray', cursor: 'pointer' }}>Switch to 137</button>
                </>
            )}
        </div>
    );
};
