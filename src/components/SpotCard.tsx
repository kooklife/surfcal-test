import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, Wind } from 'lucide-react';

interface SpotCardProps {
  name: string;
  waveHeight: number;
  waveDirection: string;
  windSpeed: number;
  windDirection: string;
  rating: number;
}

export const SpotCard = ({
  name,
  waveHeight,
  waveDirection,
  windSpeed,
  windDirection,
  rating,
}: SpotCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{name}</span>
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {rating}/10
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Waves className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Wave Conditions</p>
              <p>{waveHeight}ft @ {waveDirection}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Wind</p>
              <p>{windSpeed}mph @ {windDirection}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};