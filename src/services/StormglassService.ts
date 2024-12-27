export class StormglassService {
  private apiKey: string;
  private baseUrl: string = 'https://api.stormglass.io/v2';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getMarineConditions(lat: number, lng: number) {
    const params = [
      'waveHeight',
      'waveDirection',
      'wavePeriod',
      'windSpeed',
      'windDirection'
    ];

    const response = await fetch(
      `${this.baseUrl}/weather/point?lat=${lat}&lng=${lng}&params=${params.join(',')}`
    );

    return await response.json();
  }
}