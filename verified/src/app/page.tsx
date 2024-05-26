import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
      <h1 className="text-5xl font-bold mb-8">Betting Insights Platform</h1>
      <div className="flex flex-col items-center">
        <Link
          href="/duel"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 cursor-pointer"
        >
          Start Data Duel
        </Link>
        <Link
          href="/subscribe"
          className="mt-4 text-blue-400 hover:text-blue-500 underline transition duration-300 cursor-pointer"
        >
          Upgrade Your Subscription
        </Link>
      </div>
    </div>
  );
}
