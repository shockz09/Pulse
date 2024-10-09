"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const leaderboardData = [
  { id: 1, name: 'Alice', steps: 12500, heartRate: 68, spO2: 98 },
  { id: 2, name: 'Bob', steps: 11000, heartRate: 72, spO2: 97 },
  { id: 3, name: 'Charlie', steps: 10500, heartRate: 70, spO2: 99 },
  { id: 4, name: 'David', steps: 9800, heartRate: 75, spO2: 98 },
  { id: 5, name: 'Eve', steps: 9500, heartRate: 69, spO2: 97 },
]

export function Leaderboard() {
  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-yellow-500">Leaderboard</CardTitle>
        <CardDescription>See how you stack up against other users</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-300">Rank</TableHead>
              <TableHead className="text-gray-300">Name</TableHead>
              <TableHead className="text-gray-300">Steps</TableHead>
              <TableHead className="text-gray-300">Heart Rate</TableHead>
              <TableHead className="text-gray-300">SpO2</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.steps}</TableCell>
                <TableCell>{user.heartRate}</TableCell>
                <TableCell>{user.spO2}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}