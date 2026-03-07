export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="max-w-xl space-y-6">
        <h1 className="text-3xl font-bold">🧩 Developer Puzzle</h1>

        <p>
          Before pushing to production, a good developer always checks the
          <strong> ______ </strong>, verifies the
          <strong> ______ </strong>, and never forgets to protect the
          <strong> ______ </strong>.
        </p>

        <div className="text-sm text-gray-400 space-y-2">
          <p>• Inspect everything.</p>
          <p>• Headers are underrated.</p>
          <p>• Errors are not always errors.</p>
          <p>• Environment matters.</p>
        </div>

        <p className="text-xs text-gray-500">
          All answers are lowercase.
          Final format: word1-word2-word3
        </p>
      </div>
    </main>
  );
}