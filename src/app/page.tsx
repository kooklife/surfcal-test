import { NavigationBar } from '@/components/NavigationBar'
import { LandingPage } from '@/components/LandingPage'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationBar />
      <LandingPage />
    </main>
  )
}