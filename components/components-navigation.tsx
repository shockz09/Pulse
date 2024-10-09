"use client"
import React, { useState } from "react";
import { useOkto, OktoContextType } from "okto-sdk-react";
import { GoogleLogin } from "@react-oauth/google";
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

  const { authenticate } = useOkto() as OktoContextType;
const [authToken, setAuthToken] = useState(null);

const handleGoogleLogin = async (credentialResponse: { credential: any; }) => {
 const idToken = credentialResponse.credential;
  authenticate(idToken, (authResponse, error) => {
      if (authResponse) {
        setAuthToken(authResponse.auth_token);
        console.log("Authenticated successfully, auth token:", authResponse.auth_token);
      } else if (error) {
            console.error("Authentication error:", error);
        }
    });
 };


  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-4xl text-red-500 font-bold ">Pulse</div>
      <div className="flex items-center space-x-4">
       {!authToken ? (
        <GoogleLogin
            
            onSuccess={(credentialResponse) => {
                if (credentialResponse.credential) {
                    handleGoogleLogin({ credential: credentialResponse.credential });
                } else {
                    console.error("Login Failed: No credential provided");
                }
            }}
            onError={() => console.error("Login Failed")}
            >
               
            </GoogleLogin>
                        ) : (
                          //button which says authenticated is displayed and also call the onConnectWallet function
                          <Button
                            onClick={onConnectWallet}
                            variant={isWalletConnected ? "secondary" : "default"}
                            className="bg-black text-white"
                            >
                            {isWalletConnected ? 'disconnect okto wallet' : 'click to confirm okto login'}
                          </Button>
                           
                        )}
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