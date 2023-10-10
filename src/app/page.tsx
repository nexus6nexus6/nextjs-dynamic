'use client';

import { DynamicProfile } from './components/dynamic-profile';
import styles from './page.module.css'
import { DynamicWidget } from '@dynamic-labs/sdk-react'
import { SwitchNetwork } from './components/switch-network';

export default function Home() {
  return (
    <main className={styles.main}>
        <DynamicWidget />      
        <DynamicProfile />
        <SwitchNetwork />
    </main>
  )
}
