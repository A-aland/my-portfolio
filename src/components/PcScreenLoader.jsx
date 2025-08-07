// import { useState, useEffect } from "react";

// export default function PcScreenLoader({ children }) {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     function handleScroll() {
//       setScrollY(window.scrollY);
//     }
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // As user scrolls down, we shrink and fade the PC screen
//   // Adjust these values to control effect intensity
//   const maxScroll = 200; 
//   const progress = Math.min(scrollY / maxScroll, 1);

//   return (
//     <>
//       {/* The fixed PC screen */}
//       <div
//         className="fixed top-12 left-1/2 -translate-x-1/2 w-[320px] h-[200px] bg-gray-900 rounded-lg shadow-2xl border-4 border-gray-700 overflow-hidden z-50 transition-all duration-300"
//         style={{
//           transform: `translateX(-50%) scale(${1 - progress * 0.5}) translateY(${progress * -50}px)`,
//           opacity: 1 - progress,
//           filter: `drop-shadow(0 0 ${5 * (1 - progress)}px rgba(0,0,0,0.6))`,
//         }}
//       >
//         {/* Screen top bar */}
//         <div className="bg-gray-800 h-6 flex items-center justify-start px-2 space-x-2">
//           <span className="w-3 h-3 bg-red-500 rounded-full"></span>
//           <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
//           <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//         </div>

//         {/* The screen content preview */}
//         <div className="bg-black w-full h-[calc(100%-24px)] p-4 text-white text-xs overflow-auto select-none">
//           <p>Loading Aland's Portfolio...</p>
//           {/* You can replace below with a small preview or animation */}
//           <pre className="mt-4 text-[8px] leading-tight font-mono">
//             {`
//   import React from "react";

//   function App() {
//     return <div>Hello, I'm Aland</div>;
//   }
//             `}
//           </pre>
//         </div>
//       </div>

//       {/* The actual page content behind with blur */}
//       <div
//         className="transition-filter duration-300"
//         style={{
//           filter: `blur(${progress * 4}px) brightness(${1 - progress * 0.3})`,
//         }}
//       >
//         {children}
//       </div>
//     </>
//   );
// }
