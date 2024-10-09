"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface SettingsProps {
  onClose: () => void
  onDisconnectWallet: () => void
  onDisconnectCudis: () => void
}

export function Settings({ onClose, onDisconnectWallet, onDisconnectCudis }: SettingsProps) {
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Manage your app settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <Switch
              id="dark-mode"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Notifications</Label>
            <Switch
              id="notifications"
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
          <Button variant="outline" onClick={onDisconnectWallet} className="w-full bg-black text-white">
            Disconnect Wallet
          </Button>
          <Button variant="outline" onClick={onDisconnectCudis} className="w-full bg-black text-white">
            Disconnect CUDIS Ring
          </Button>
        </CardContent>
        <CardFooter>
          <Button onClick={onClose} className="w-full bg-black text-white">Close</Button>
        </CardFooter>
      </Card>
    </div>
  )
}