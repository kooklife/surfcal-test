import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Settings, User } from 'lucide-react';

export const NavigationBar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-blue-600">SurfCal</h1>
          <Button variant="ghost" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Calendar
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Sign In
        </Button>
      </div>
    </nav>
  );
};