"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "../hooks/use-toast"

export function GoalSetting() {
  const [goalType, setGoalType] = useState('')
  const [targetMetric, setTargetMetric] = useState('')
  const [timeline, setTimeline] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement goal submission logic here
    console.log({ goalType, targetMetric, timeline })
    toast({
      title: "Goal Created",
      description: "Your new health goal has been successfully created.",
    })
  }

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className='text-yellow-500'>Set New Health Goal</CardTitle>
        <CardDescription>Create a new health goal to track your progress</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="goalType">Goal Type</Label>
              <Select onValueChange={setGoalType}>
                <SelectTrigger id="goalType" className="bg-gray-700">
                  <SelectValue placeholder="Select goal type" />
                </SelectTrigger>
                <SelectContent position="popper" className="bg-gray-700">
                  <SelectItem value="steps">Steps</SelectItem>
                  <SelectItem value="sleep">Sleep</SelectItem>
                  <SelectItem value="diet">Diet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="targetMetric">Target Metric</Label>
              <Input id="targetMetric" placeholder="Enter target metric" onChange={(e) => setTargetMetric(e.target.value)} className="bg-gray-700" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="timeline">Timeline (days)</Label>
              <Input id="timeline" placeholder="Enter timeline in days" onChange={(e) => setTimeline(e.target.value)} className="bg-gray-700" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="bg-black text-white">Cancel</Button>
        <Button onClick={handleSubmit} className="bg-black text-white">Create Goal</Button>
      </CardFooter>
    </Card>
  )
}