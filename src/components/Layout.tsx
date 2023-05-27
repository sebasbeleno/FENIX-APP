import Head from "next/head";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, user, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title : "Ktime"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen">
        <div className="flex ">
          <div className="grow">
            <Navbar user={user} />
            <main className="flex flex-row min-h-max p-4">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
