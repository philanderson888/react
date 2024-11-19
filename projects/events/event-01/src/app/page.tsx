import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">Events</h1>
        <p className="text-lg text-center">
          This is a list of events that you can attend.
        </p>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <li className="flex flex-col items-center">
            <div className="text-center">Event 1</div>
            
          </li>
          <li className="flex flex-col items-center">
            <div className="text-center">Event 2</div>
            
          </li>
        </ul>
      </main>
    </div>
  );
}
