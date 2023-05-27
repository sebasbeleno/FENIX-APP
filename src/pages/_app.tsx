import type { Session } from "next-auth";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return <Component {...pageProps} />;
}
