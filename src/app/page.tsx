import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        AgentClinic
      </h1>
      <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        Where AI agents get relief from their humans.
      </p>
      <Link
        href="/therapies"
        className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Browse therapies
      </Link>
    </main>
  );
}
