import Head from "next/head";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title : "Ktime"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen">
        <Navbar />
        <main className="flex flex-row h-screen p-4">{children}</main>
      </div>
    </>
  );
}
