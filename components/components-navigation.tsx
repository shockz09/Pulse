"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, User, Settings, LogOut, Upload, Trophy } from 'lucide-react'

interface NavigationProps {
  isWalletConnected: boolean
  isCudisConnected: boolean
  onConnectWallet: () => void
  onConnectCudis: () => void
  onShowProfile: () => void
  onShowSettings: () => void
  onShowLeaderboard: () => void
}

export function Navigation({
  isWalletConnected,
  isCudisConnected,
  onConnectWallet,
  onConnectCudis,
  onShowProfile,
  onShowSettings,
  onShowLeaderboard
}: NavigationProps) {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-white">HealthTracker</div>
      <div className="flex items-center space-x-4">
        <Button
          onClick={onConnectWallet}
          className="bg-black text-white"
        >
          {isWalletConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
        </Button>
        <Button
          onClick={onConnectCudis}
          variant={isCudisConnected ? "secondary" : "default"}
          className="bg-black text-white"
        >
          {isCudisConnected ? 'Disconnect CUDIS Ring' : 'Connect CUDIS Ring'}
        </Button>
        <Button
          onClick={onShowLeaderboard}
          className="bg-black text-white"
        >
          <Trophy className="mr-2 h-4 w-4" />
          Leaderboard
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="bg-black text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onShowProfile}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onShowSettings}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Upload className="mr-2 h-4 w-4" />
              <span>Import Food App Data</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}