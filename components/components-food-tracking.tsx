"use client"
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk';
import { Button } from "@/components/ui/button"
import { QRCodeSVG } from 'qrcode.react';

const foodHistory = [
  { id: 1, date: '2023-01-01', meal: 'Breakfast', food: 'Oatmeal with berries', calories: 300, protein: 10, carbs: 50, fat: 5 },
  { id: 2, date: '2023-01-01', meal: 'Lunch', food: 'Grilled chicken salad', calories: 400, protein: 30, carbs: 15, fat: 20 },
  { id: 3, date: '2023-01-01', meal: 'Dinner', food: 'Salmon with roasted vegetables', calories: 500, protein: 35, carbs: 30, fat: 25 },
  { id: 4, date: '2023-01-02', meal: 'Breakfast', food: 'Scrambled eggs with toast', calories: 350, protein: 20, carbs: 30, fat: 15 },
  { id: 5, date: '2023-01-02', meal: 'Lunch', food: 'Vegetable soup with whole grain bread', calories: 300, protein: 10, carbs: 45, fat: 8 },
];

export function FoodTracking() {
  const [requestUrl, setRequestUrl] = useState('');

  const getVerificationReq = async () => {
    const APP_ID = "0x326FE577dDF7ED2BeA7588751d303110bfbd918E";
    const PROVIDER_ID = "a5476c8e-af4f-4110-8a6b-26cb2b8e7f98";
    const APP_SECRET = "";
    
    const reclaimProofRequest = await ReclaimProofRequest.init(APP_ID, APP_SECRET, PROVIDER_ID);
    const url = await reclaimProofRequest.getRequestUrl();
    setRequestUrl(url);
    console.log('Request URL:', url);

    const statusUrl = reclaimProofRequest.getStatusUrl();
    console.log('Status URL:', statusUrl);

    await reclaimProofRequest.startSession({
      onSuccess: (proofs) => {
        console.log('Verification success', proofs);
      },
      onError: (error) => {
        console.error('Verification failed', error);
      }
    });
  };

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className='text-yellow-500'>Food History</CardTitle>
        <CardDescription>Track your food intake and nutritional information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <Button onClick={getVerificationReq}>Get Verification Request</Button>
          {requestUrl && (
            <div className="mt-4 p-4 bg-white rounded-lg flex flex-col items-center">
              <QRCodeSVG 
                value={requestUrl}
                size={256}
                level="H"
                includeMargin={true}
              />
              <p className="mt-2 text-sm text-gray-800">Scan this QR code to verify</p>
            </div>
          )}
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-300">Date</TableHead>
              <TableHead className="text-gray-300">Meal</TableHead>
              <TableHead className="text-gray-300">Food</TableHead>
              <TableHead className="text-gray-300">Calories</TableHead>
              <TableHead className="text-gray-300">Protein (g)</TableHead>
              <TableHead className="text-gray-300">Carbs (g)</TableHead>
              <TableHead className="text-gray-300">Fat (g)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {foodHistory.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.meal}</TableCell>
                <TableCell>{entry.food}</TableCell>
                <TableCell>{entry.calories}</TableCell>
                <TableCell>{entry.protein}</TableCell>
                <TableCell>{entry.carbs}</TableCell>
                <TableCell>{entry.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}