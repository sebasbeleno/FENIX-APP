import Layout from "@/components/Layout";
import { QrReader } from "react-qr-reader";
import { useState } from "react";

export default function Page() {
  const [step, setstep] = useState(1);
  const [data, setData] = useState("No result");

  const onConfirm = () => {
    setstep(3);
  };


  const renderStepts = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">Escanea el código QR</h1>
            <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.getText());
                  setstep(2);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              className="w-full h-full"
              constraints={{ facingMode: "environment" }}
            />
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">Confirmar asistencia? clase ${data}</h1>
            <div className="flex flex-row justify-center items-center">
              <button
                onClick={onConfirm}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Si
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                No
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">Asistencia confirmada</h1>
          </div>
        );
      default:
        break;
    }
  };
  }

    return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        {renderStepts()}
      </div>
    </Layout>
  );
}
