'use client';

import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';


export interface ISwitchNetworkProps {}

export const SwitchNetwork: React.FC<ISwitchNetworkProps> = ({}) => {
    const { chain } = useNetwork();
    const { chains, error, switchNetwork } = useSwitchNetwork();
    const { isConnected } = useAccount();
    
    return (
        <div style={{padding:"20px", backgroundColor: 'rgba(255,0,0,0.2)'}}>
            <div style={{ display:'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 0 20px 0'}}>
                <b>Chains:</b>
                {isConnected && (
                    <>
                        <small>Should show this section only if connected:</small>
                        {chains?.map((_chain, index) => (
                            <button key={index} onClick={() => switchNetwork?.(_chain.id)} style={{ fontWeight: chain?.id===_chain.id ? 'bold' : 'normal', padding: '8px 15px', borderRadius: '7px', border:'1px solid gray', cursor: 'pointer', marginTop:'10px'}}>Switch to {_chain.id}</button>
                            ))}
                        <br/>
                        {error && (
                            <span>{error.message}</span>
                            )}
                    </>
                )}
            </div>
        </div>
    );
};
