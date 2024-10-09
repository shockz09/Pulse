"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "../hooks/use-toast"

// Mock data for goals
const mockGoals = [
  { id: 1, type: 'steps', target: '10000 steps', timeline: '30 days' },
  { id: 2, type: 'sleep', target: '8 hours', timeline: '14 days' },
  { id: 3, type: 'diet', target: '2000 calories', timeline: '7 days' },
]

export function Stake({ isConnected }: { isConnected: boolean }) {
  const [amount, setAmount] = useState('')
  const [solAmount, setSolAmount] = useState('')
  const [selectedGoal, setSelectedGoal] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    // Conversion rate: 1 USD = 0.007 SOL
    const conversionRate = 0.007
    setSolAmount((parseFloat(amount) * conversionRate).toFixed(4))
  }, [amount])

  const handleStake = () => {
    // Implement staking logic here
    console.log(`Staking ${amount} USDC for goal: ${selectedGoal}`)
    toast({
      title: "Stake Successful",
      description: `You have successfully staked ${amount} USDC for your selected goal.`,
    })
  }

  if (!isConnected) {
    return (
      <Card className="bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>Wallet Not Connected</CardTitle>
          <CardDescription>Please connect your wallet to access staking features</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>Stake Crypto</CardTitle>
        <CardDescription>Stake your crypto for specific health goals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="goal">Select Goal</Label>
            <Select onValueChange={setSelectedGoal}>
              <SelectTrigger id="goal" className="bg-gray-700">
                <SelectValue placeholder="Select a goal" />
              </SelectTrigger>
              <SelectContent position="popper" className="bg-gray-700">
                {mockGoals.map((goal) => (
                  <SelectItem key={goal.id} value={goal.id.toString()}>
                    {goal.type} - {goal.target} for {goal.timeline}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="amount">Amount to Stake</Label>
            <div className="relative">
              <Input
                id="amount"
                placeholder="Enter amount"
                onChange={(e) => setAmount(e.target.value)}
                className="bg-gray-700 pr-16"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                USDC
              </span>
            </div>
            <p className="text-right text-xs text-gray-400">
              ≈ {solAmount} SOL
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleStake} className="bg-black text-white" disabled={!selectedGoal || !amount}>Stake</Button>
      </CardFooter>
    </Card>
  )
}