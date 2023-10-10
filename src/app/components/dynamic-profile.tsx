'use client';

import { useAccount } from 'wagmi';


export interface IDynamicProfileProps {}

export const DynamicProfile: React.FC<IDynamicProfileProps> = ({}) => {
    const { address } = useAccount();

    return (
        <div style={{padding:'20px', backgroundColor: 'rgba(255,0,0,0.2)', margin: '20px 0'}}>
            {address && (
                <>
                    <small>Should show this section only if connected:</small>
                    <br/>
                    <b>Address:</b> {address}
                </>
            )}
        </div>
    );
};
