"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HealthMetrics } from './components-health-metrics'
import { GoalSetting } from './components-goal-setting'
import { Stake } from './components-stake'
import { FoodTracking } from './components-food-tracking'
import { Navigation } from './components-navigation'
import { Profile } from './components-profile'
import { Settings } from './components-settings'
import { Leaderboard } from './components-leaderboard'

export function MainDashboard() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [isCudisConnected, setIsCudisConnected] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showProfile, setShowProfile] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    // Check if wallet is already connected
    const checkWalletConnection = async () => {
      // Implement wallet connection check logic here
      // For now, we'll just set it to false
      setIsWalletConnected(false)
    }

    checkWalletConnection()
  }, [])

  const handleConnectWallet = async () => {
    // Implement wallet connection logic here
    setIsWalletConnected(!isWalletConnected)
  }

  const handleConnectCudis = async () => {
    // Implement CUDIS ring connection logic here
    setIsCudisConnected(!isCudisConnected)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navigation
        isWalletConnected={isWalletConnected}
        isCudisConnected={isCudisConnected}
        onConnectWallet={handleConnectWallet}
        onConnectCudis={handleConnectCudis}
        onShowProfile={() => setShowProfile(true)}
        onShowSettings={() => setShowSettings(true)} onShowLeaderboard={function (): void {
          throw new Error('Function not implemented.')
        } }      />
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <Card className="w-full bg-gray-800 border-gray-700">
          <CardContent className="p-0">
            <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-gray-700">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="goals">Goals</TabsTrigger>
                <TabsTrigger value="stake">Stake</TabsTrigger>
                <TabsTrigger value="food">Food Tracking</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              </TabsList>
              <div className="p-4 md:p-6 min-h-[500px]">
                <TabsContent value="dashboard">
                  <HealthMetrics />
                </TabsContent>
                <TabsContent value="goals">
                  <GoalSetting />
                </TabsContent>
                <TabsContent value="stake">
                  <Stake isConnected={isWalletConnected} />
                </TabsContent>
                <TabsContent value="food">
                  <FoodTracking />
                </TabsContent>
                <TabsContent value="leaderboard">
                  <Leaderboard />
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      {showProfile && (
        <Profile onClose={() => setShowProfile(false)} />
      )}
      {showSettings && (
        <Settings
          onClose={() => setShowSettings(false)}
          onDisconnectWallet={handleConnectWallet}
          onDisconnectCudis={handleConnectCudis}
        />
      )}
    </div>
  )
}

//how do i run this next js thing
