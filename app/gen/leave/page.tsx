import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-400">
        <div>
            <div>
                <h1 className="text-3xl p-3 text-slate-800 w-fit rounded-2xl font-mono">Lazy Letter</h1>
            </div>
            <div>
                <h2 className="text-2xl p-3 text-slate-800 w-fit rounded-2xl font-mono">Generate your day to day college letters in seconds.</h2>
            </div>
            <div>
                Coming soon...
            </div>
        </div>
    </main>
  );
}
