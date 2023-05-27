import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="h-screen w-screen justify-center border-2 content-center">
        <h1>FENIX</h1>
      </div>
    </main>
  );
}
