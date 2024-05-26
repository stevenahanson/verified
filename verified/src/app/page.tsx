import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-8">Betting Insights Platform</h1>
      <Link href="/duel" className="bg-blue-500 text-white py-2 px-4 rounded">
        Start Data Duel
      </Link>
      <p className="mt-4 text-blue-500 underline">Upgrade Your Subscription</p>
    </div>
  );
}
