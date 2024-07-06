import { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [isUrlVisible, setIsUrlVisible] = useState(false);

  const handleUrlGen = () => {
    if (!url) {
      return;
    }

    setIsUrlVisible(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <h1 className="text-6xl font-bold">
        QR <span className="text-blue-500">code</span> Generator
      </h1>
      <div className="mt-10 flex gap-x-8">
        <input
          type="text"
          className="border border-gray-700 px-4 py-2 rounded-md max-w-80 outline-none focus-within:ring-4 transition-all ease-linear duration-100"
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter a url"
        />
        <button
          onClick={handleUrlGen}
          className="bg-blue-500 hover:bg-blue-800 focus-within:ring-4 transition-all ease-linear duration-100 rounded-lg px-5 text-white"
        >
          Generate
        </button>
      </div>
      {isUrlVisible && (
        <div className="mt-[80px]">
          <QRCode value={url} size={200} />
        </div>
      )}
    </div>
  );
};
export default QrCodeGenerator;
