import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { QrReader } from "react-qr-reader";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState("No result");

  return (
    <Layout>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.getText());
          }

          if (!!error) {
            console.info(error);
          }
        }}
        className="w-full h-full"
        constraints={{ facingMode: "environment" }}
      />
      <p>{data}</p>
    </Layout>
  );
}
