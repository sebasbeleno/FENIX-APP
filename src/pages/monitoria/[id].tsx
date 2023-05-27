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
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%", height: "100%" }}
        constraints={{ facingMode: "environment" }}
      />
      <p>{data}</p>
    </Layout>
  );
}
