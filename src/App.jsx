import React, { useState } from "react";
import QRCode from "qrcode";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [input, setInput] = useState("");
  const [qrImageUrl, setQrImageUrl] = useState("");
  const handleQr = () => {
    if (!input) return toast.error("Type something in the box");

    QRCode.toDataURL(input, function (err, url) {
      if (err) return console.error("Invalid Data");
      setQrImageUrl(url);
      toast.success("Your QR code is ready!");
      setInput("");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-green-100 via-white to-green-50 py-10">
      <div className="flex flex-col items-center shadow-2xl rounded-3xl px-8 py-10 w-full max-w-lg bg-white/80 backdrop-blur-xl border border-green-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-emerald-400 drop-shadow-md tracking-wide text-center">
          QR Code Generator
        </h1>
        <p className="text-gray-500 mt-2 text-center text-lg italic">
          Instantly create scannable QR codes from your text
        </p>

        <div className="my-8">
          <div className="h-56 w-56 rounded-2xl border-2 border-green-300 shadow-lg flex items-center justify-center p-3 bg-white">
            {qrImageUrl ? (
              <img
                src={qrImageUrl}
                alt="QR Code"
                className="w-full h-full object-contain animate-fadeIn"
              />
            ) : (
              <span className="text-gray-400 text-sm text-center px-4">
                Your QR code will appear here
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <input
            value={input}
            type="text"
            placeholder="Paste any URL or Type something..."
            className="px-4 py-3 rounded-full border border-green-300 focus:outline-none focus:ring focus:ring-green-400 text-gray-700 shadow-sm"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="px-6 py-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 cursor-pointer"
            onClick={handleQr}
          >
            Generate QR Code
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}
      </style>
      <Toaster />
    </div>
  );
}

export default App;
