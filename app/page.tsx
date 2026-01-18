import GameBoard from "@/components/GameBoard";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-800 p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Rugby Snap Prototype
      </h1>
      <div className="max-w-5xl mx-auto bg-green-700 p-6 rounded-lg shadow-lg">
        <GameBoard />
      </div>
    </main>
  );
}
