'use client';

import { useAccount } from 'wagmi';


export interface IDynamicProfileProps {}

export const DynamicProfile: React.FC<IDynamicProfileProps> = ({}) => {
    const { address } = useAccount();

    return (
        <div style={{padding:"20px"}}>
            <b>Address:</b> {address}
        </div>
    );
};
