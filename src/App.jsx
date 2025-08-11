import React, { useState } from "react";
import QRCode from "qrcode";
import toast, { Toaster } from "react-hot-toast";
import { Github } from "lucide-react"; // lucide-react GitHub icon

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
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-green-100 via-white to-red-50 overflow-hidden">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 py-6">
        <div className="flex flex-col items-center shadow-2xl rounded-3xl px-7 py-6 w-full max-w-lg bg-white/80 backdrop-blur-xl border border-green-100">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-lg tracking-wide text-center">
            QR Code Generator
          </h1>
          <p className="text-gray-500 mt-2 text-center text-lg italic">
            Instantly create scannable QR codes from your text
          </p>

          <div className="my-6">
            <div className="h-48 w-48 rounded-2xl p-[3px] border border-gray-200 shadow-lg">
              <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center p-3">
                {qrImageUrl ? (
                  <img
                    src={qrImageUrl}
                    alt="QR Code"
                    className="w-full h-full object-contain animate-fadeIn"
                  />
                ) : (
                  <span className="text-gray-400 text-sm text-center px-2">
                    Your QR code will appear here
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <input
              value={input}
              type="text"
              placeholder="Paste any URL or Type something..."
              className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 text-gray-700 shadow-sm"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="px-6 py-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              onClick={handleQr}
            >
              Generate QR Code
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-900">
        <a
          href="https://github.com/ravikanttarare95/qr-code-generator.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-center gap-2 text-white hover:text-green-400 cursor-pointer transition-colors">
            <Github size={22} />
            <span className="font-medium">Check codebase</span>
          </div>
        </a>
      </footer>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.35s ease-out;
          }
        `}
      </style>
      <Toaster />
    </div>
  );
}

export default App;
