# SurfCal

Smart calendar blocking for surfers based on wave conditions

## Features

- Smart Calendar Blocking
- Wave Forecasting with Stormglass.io
- Surf Spot Management with Nominatim
- Smart Notifications

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your API keys:
   ```
   STORMGLASS_API_KEY=your_key_here
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `/src/components` - React components
- `/src/models` - TypeScript interfaces and types
- `/src/services` - API integration services

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)