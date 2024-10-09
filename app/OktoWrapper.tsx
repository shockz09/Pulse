'use client'

import { OktoProvider, BuildType } from 'okto-sdk-react'
const OKTO_CLIENT_API_KEY = '2cabacd3-294b-4d57-b62e-e6390a3c1125';

export default function OktoWrapper({ children }: { children: React.ReactNode }) {
  return (
    <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
      {children}
    </OktoProvider>
  )
}