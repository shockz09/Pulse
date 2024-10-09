"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, Upload, Download } from 'lucide-react'

interface ProfileProps {
  onClose: () => void
}

export function Profile({ onClose }: ProfileProps) {
  const [balance, setBalance] = useState(1000) // Example balance
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [depositAmount, setDepositAmount] = useState('')

  const handleWithdraw = () => {
    // Implement withdrawal logic
    console.log(`Withdrawing ${withdrawAmount}`)
  }

  const handleDeposit = () => {
    // Implement deposit logic
    console.log(`Depositing ${depositAmount}`)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>Manage your account and balance</CardDescription>
          <CardDescription>On ramp and Off ramp with Mercuryo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value="John Doe" readOnly className="bg-gray-700" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" value="john@example.com" readOnly className="bg-gray-700" />
            </div>
            <div>
              <Label>Balance</Label>
              <div className="flex items-center space-x-2">
                <DollarSign className="text-green-500" />
                <span className="text-2xl font-bold">{balance.toFixed(2)} USD</span>
              </div>
            </div>
            <div>
              <Label htmlFor="withdraw">Withdraw</Label>
              <div className="flex space-x-2">
                <Input
                  id="withdraw"
                  type="number"
                  placeholder="Amount"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="bg-gray-700"
                />
                <Button onClick={handleWithdraw} className="whitespace-nowrap">
                  <Download className="mr-2 h-4 w-4" /> Withdraw
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="deposit">Deposit (On-ramp)</Label>
              <div className="flex space-x-2">
                <Input
                  id="deposit"
                  type="number"
                  placeholder="Amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="bg-gray-700"
                />
                <Button onClick={handleDeposit} className="whitespace-nowrap">
                  <Upload className="mr-2 h-4 w-4" /> Deposit
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={onClose} variant="outline" className="w-full">
            Close
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}