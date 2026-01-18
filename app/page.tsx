import GameBoard from '@/components/GameBoard'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Rugby Snap Prototype
      </h1>
      <GameBoard />
    </main>
  )
}
