import React from 'react';
import { Calendar, Waves, Map, Bell, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Calendar Blocking",
      description: "Automatically block your calendar for perfect surf conditions"
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Wave Forecasting",
      description: "Integration with Stormglass.io for accurate wave predictions"
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Spot Management",
      description: "Save and monitor multiple surf spots using Nominatim"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Notifications",
      description: "Get alerts when conditions match your preferences"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">SurfCal</h1>
            <p className="text-xl mb-8">Never miss the perfect wave again</p>
            <Button variant="secondary" size="lg" className="font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;