"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

// Sample data - replace with actual API data in production
const dailyData = [
  { date: '2023-01-01', steps: 8000, heartRate: 72, sleep: 7.5, caloriesBurned: 2200, standingTime: 5 },
  { date: '2023-01-02', steps: 10000, heartRate: 75, sleep: 8, caloriesBurned: 2500, standingTime: 6 },
  { date: '2023-01-03', steps: 7500, heartRate: 70, sleep: 7, caloriesBurned: 2100, standingTime: 4 },
  { date: '2023-01-04', steps: 9000, heartRate: 73, sleep: 7.8, caloriesBurned: 2300, standingTime: 5.5 },
  { date: '2023-01-05', steps: 11000, heartRate: 76, sleep: 8.2, caloriesBurned: 2700, standingTime: 7 },
]

const weeklyData = [
  { week: 'Week 1', avgSteps: 9000, avgHeartRate: 73, avgSleep: 7.7, avgCaloriesBurned: 2360, avgStandingTime: 5.5 },
  { week: 'Week 2', avgSteps: 9500, avgHeartRate: 74, avgSleep: 7.9, avgCaloriesBurned: 2450, avgStandingTime: 6 },
  { week: 'Week 3', avgSteps: 10000, avgHeartRate: 72, avgSleep: 8.1, avgCaloriesBurned: 2550, avgStandingTime: 6.5 },
  { week: 'Week 4', avgSteps: 9800, avgHeartRate: 71, avgSleep: 8.0, avgCaloriesBurned: 2500, avgStandingTime: 6.2 },
]

const monthlyData = [
  { month: 'Jan', avgSteps: 9300, avgHeartRate: 73, avgSleep: 7.8, avgCaloriesBurned: 2400, avgStandingTime: 5.8 },
  { month: 'Feb', avgSteps: 9700, avgHeartRate: 72, avgSleep: 8.0, avgCaloriesBurned: 2500, avgStandingTime: 6.1 },
  { month: 'Mar', avgSteps: 10200, avgHeartRate: 71, avgSleep: 8.2, avgCaloriesBurned: 2600, avgStandingTime: 6.5 },
]

export function HealthMetrics() {
  const [timeframe, setTimeframe] = useState('daily')

  const getDataForTimeframe = () => {
    switch (timeframe) {
      case 'daily':
        return dailyData
      case 'weekly':
        return weeklyData
      case 'monthly':
        return monthlyData
      default:
        return dailyData
    }
  }

  const data = getDataForTimeframe()

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Label htmlFor="timeframe">View:</Label>
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger id="timeframe" className="bg-gray-700 w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent position="popper" className="bg-gray-700">
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey={timeframe === 'daily' ? 'date' : timeframe === 'weekly' ? 'week' : 'month'} stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                <Legend />
                <Line type="monotone" dataKey={timeframe === 'daily' ? 'steps' : 'avgSteps'} stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Heart Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey={timeframe === 'daily' ? 'date' : timeframe === 'weekly' ? 'week' : 'month'} stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                <Legend />
                <Line type="monotone" dataKey={timeframe === 'daily' ? 'heartRate' : 'avgHeartRate'} stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Sleep Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey={timeframe === 'daily' ? 'date' : timeframe === 'weekly' ? 'week' : 'month'} stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                <Legend />
                <Line type="monotone" dataKey={timeframe === 'daily' ? 'sleep' : 'avgSleep'} stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Calories Burned</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey={timeframe === 'daily' ? 'date' : timeframe === 

 'weekly' ? 'week' : 'month'} stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                <Legend />
                <Line type="monotone" dataKey={timeframe === 'daily' ? 'caloriesBurned' : 'avgCaloriesBurned'} stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Standing Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey={timeframe === 'daily' ? 'date' : timeframe === 'weekly' ? 'week' : 'month'} stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                <Legend />
                <Line type="monotone" dataKey={timeframe === 'daily' ? 'standingTime' : 'avgStandingTime'} stroke="#8dd1e1" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}