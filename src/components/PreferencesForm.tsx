import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const PreferencesForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Surf Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Preferred Wave Height</label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-xs text-gray-500">Minimum (ft)</span>
                <input type="number" className="w-full border rounded px-2 py-1" min={0} />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-gray-500">Maximum (ft)</span>
                <input type="number" className="w-full border rounded px-2 py-1" min={0} />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Preferred Wind Speed</label>
            <input type="number" className="w-full border rounded px-2 py-1" placeholder="Max wind speed (mph)" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Session Duration</label>
            <select className="w-full border rounded px-2 py-1">
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
              <option value="180">3 hours</option>
              <option value="240">4 hours</option>
            </select>
          </div>
          <button className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition-colors">
            Save Preferences
          </button>
        </form>
      </CardContent>
    </Card>
  );
};