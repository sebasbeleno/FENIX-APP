import Layout from "@/components/Layout";
import { QrReader } from "react-qr-reader";
import { useState } from "react";

export default function Page() {
  const [data, setData] = useState("No result");

  const renderConfirmation = () => {
    if (data !== "No result") {
      return (
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
      );
    } else {
      return (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">Confirmar asistencia?</h1>
          <div className="flex flex-row justify-center items-center">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Si
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              No
            </button>
          </div>
        </div>
      );
    }
  };
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl">Escanea el código QR</h1>
      </div>
      {renderConfirmation()}
    </Layout>
  );
}
