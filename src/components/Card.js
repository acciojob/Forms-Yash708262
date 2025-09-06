import React from "react";
export default function Card({ children }) {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
      {children}
    </div>
  );
}
