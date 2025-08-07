import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gray-900">
      {/* Three bouncing dots loader */}
      <div className="flex space-x-4 mb-10">
        <span className="dot animate-bounce delay-0 bg-cyan-400"></span>
        <span className="dot animate-bounce delay-200 bg-blue-400"></span>
        <span className="dot animate-bounce delay-400 bg-purple-400"></span>
      </div>

      {/* Welcome text */}
      <div className="text-center text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] select-none">
        <h1 className="text-5xl font-extrabold mb-4 animate-glow">
          Welcome to Aland&apos;s Portfolio
        </h1>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: inline-block;
        }

        .animate-bounce {
          animation: bounce 1.2s infinite ease-in-out;
        }

        .delay-0 {
          animation-delay: 0s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.7;
            box-shadow:
              0 0 5px currentColor,
              0 0 15px currentColor;
          }
          40% {
            transform: translateY(-20px);
            opacity: 1;
            box-shadow:
              0 0 12px currentColor,
              0 0 24px currentColor;
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow:
              0 0 8px #3b82f6,
              0 0 12px #2563eb,
              0 0 20px #1e40af,
              0 0 30px #2563eb;
          }
          50% {
            text-shadow:
              0 0 14px #60a5fa,
              0 0 22px #3b82f6,
              0 0 30px #1e40af,
              0 0 40px #2563eb;
          }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
